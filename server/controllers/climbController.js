const Climb = require('../models/climbModel')

const climbController = {};

climbController.createNewClimb = (req, res, next) =>{
  console.log(req.body)
  const {name, grade, area} = req.body;
  Climb.Climb.create({name: name, grade: grade, area: area})
    .then((data) =>{
      console.log(data)
      res.locals.newClimb = data;
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

// climbController.updateClimb = (req, res, next) => {}

// climbController.deleteClimb = (req, res, next) => {}


module.exports = climbController;