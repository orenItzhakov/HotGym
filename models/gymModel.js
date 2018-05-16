var mongoose = require('mongoose');

// module.exports = Trainee;

let gymSchema = new mongoose.Schema({
    name: String,
    adress: String,
    trainees: []

    // why not trainees arrey? where are you saving all the users as for now? as new collections?
});

let Gym = mongoose.model('gyms', gymSchema);

module.exports = Gym;