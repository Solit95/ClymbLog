const path = require('path');
const express = require('express');
const controller = require('./controllers/climbController')

const app = express();
const PORT = 3000;


// parses JSON from incoming request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(express.static(path.resolve(__dirname, '../client/index.html')))

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.post('/', controller.createNewClimb, (req, res) => {
  //create new climb in the controller and put in the dataBase
  //when its in the database we can await that its in the database and then reroute the client the logbook page which shows all of the climbs in the database
  res.status(200).json(res.locals.newClimb);
});

//the put request to update entries in the table
app.put('/climb', controller.updateClimb, (req, res) => {
  res.status(200).json(res.locals.updated);
});

app.get('/climbs', controller.getClimbs, (req, res) => {
  res.status(200).json(res.locals.climbs);
})


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});