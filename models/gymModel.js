var mongoose = require('mongoose');


let gymSchema = new mongoose.Schema({
  name: String,
  adress: String
});

let Gym = mongoose.model('gyms', gymSchema);

module.exports = Gym;
