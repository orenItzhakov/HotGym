var mongoose = require('mongoose');

let traineeSchema = new mongoose.Schema({
    fullName: String,
    gender: String,
    age: Number,
    phoneNumber: String,
    adress: String,
    dateMedicalAssuranceEnd: Date,
    dateMembershipStart: Date,
    dateMembershipEnd: Date,
    isActive: Boolean
});


let Trainee = mongoose.model('trainee', traineeSchema);

module.exports = Trainee
