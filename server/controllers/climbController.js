const Climb = require('../models/climbModel')

const climbController = {};
//it says middlware function error but its actually that the database data cant dake more than ten characters as input
climbController.createNewClimb = (req, res, next) =>{
    // console.log('request body', req.body)
    const {name, grade, area, style, sendstyle, date, notes} = req.body;
    const query = `INSERT INTO climbs(name, grade, area, style, sendStyle, date, notes) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [name, grade, area, style, sendstyle, date, notes];
    Climb.query(query, values)
      .then((res) => res)
      .then((data) =>{
        // console.log('data.rows', data.rows)
        res.locals.newClimb = data.rows;
        return next()
      })
      .catch((err) =>{
        console.log(err)
        return next({
          log: 'Express error handler caught climbController.createNewClimb middleware',
          status: 400,
          message: { err: 'An error occurred' },
      })
  })
}


climbController.updateClimb = (req, res, next) => {
    //make it into a button tht updates only one thing at a time?
//   const {id ,name, grade, area, style, sendstyle, date, notes} = req.body;
  const body = req.body;
  const values = []; 
  const updateKey = []; 
  for(const key of body){
      console.log('key', key)
    if(body[key] !== null){
      updateKey.push(key)
      values.unshift(req.body[key])
    }
  }
  const query = `UPDATE climbs SET ${updateKey[1]} = $1 WHERE ${updateKey[0]} = $2`
  Climb.query(query, values)
    .then((res) => res)
    .then((data) =>{
    //   console.log(data.rows)
      res.locals.updated = data.rows;
      return next()
    })
    .catch((err) =>{
      console.log(err)
      return next({
        log: 'Express error handler caught climbController.updateClimb middleware',
        status: 400,
        message: { err: `An error occurred ${err}` },
    })
  })
}

climbController.getClimbs = (req, res, next) => {
  const query = 'SELECT * FROM climbs'

  Climb.query(query)
    .then((data) => {
      // console.log(data.rows)
      res.locals.climbs = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught climbController.getClimb middleware',
        status: 400,
        message: { err: `An error occurred ${err}` },
      })
    })
}

climbController.deleteClimb = (req, res, next) => {
  const {name} = req.body;
  const value = [name];
  const query = 'DELETE FROM climbs WHERE name = $1'
  Climb.query(query, value)
  .then((data) => {
    console.log('data',data)
    res.locals.climbs = data.rows;
    return next();
  })
  .catch((err) => {
    return next({
      log: 'Express error handler caught climbController.deleteClimb middleware',
      status: 400,
      message: { err: `An error occurred ${err}` },
    })
  })
}


module.exports = climbController;