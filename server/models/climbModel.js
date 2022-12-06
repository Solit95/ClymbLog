const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://Solit95:Loveshoes6%21@cluster0.mfblrs9.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ClimbLog'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

// mongoose.connection.once('open', () => {
//   console.log('Connected to Database')
// });

const climbSchema = new Schema({
    // date: {type: String, required:true},
    name: {type: String, required:true},
    grade: {type: String, required:true},
    area: {type: String, required:true},
    // notes: {type: String, required:true}
});

const Climb = mongoose.model('climb', climbSchema);

module.exports = {
    Climb
};