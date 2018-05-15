var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/HotGymDB', function() {
  console.log("DB connection established!!!");
})

var Gym = require('./models/gymModel');
var Trainee = require('./models/traineeModel');

var app = express();

app.listen(SERVER_PORT,function() {
  console.log("Server run... HotGym");
})
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 1) to handle getting all trainees
app.get('/trainees', function (req, res) {
  Trainee.find({ isActive:true },function (error, result){
  if(error) { return console.error(error); }
    res.send(result);
  });
});

// 2) to handle adding a trainee
app.post('/trainees', function (req, res) {
  var newTrainee = new Trainee({
    fullName: "Ana Levi",
    gender: "Female",
    age: 52,
    phoneNumber: "0501230067",
    adress: "Alons 32 , Yavne",
    dateMedicalAssuranceEnd : new Date(2017, 06, 06, 14, 12),
    dateMembershipStart: new Date(2017, 11, 03, 14, 12),
    dateMembershipEnd: new Date(2018, 11, 03, 14, 12),
    isActive: false
  });
  newTrainee.save(function(requ,resp) {
    res.send({status: "Ok", idInsert:resp.id });
  });
});

// 4) to handle edit trainee
app.post("/trainees/:id", function (req, res){
  Trainee.findByIdAndUpdate(req.params.id, {$set:{fullName:"Ariel bozaglo"}}, function (err, resp){
    if (err) throw err;
    else res.send({status: "Ok"});
  });
});
