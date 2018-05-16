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

app.listen(SERVER_PORT, function() {
    console.log("Server run... HotGym");
})
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 1) to handle getting all trainees
app.get('/trainees', function(req, res) {
    Trainee.find({ isActive: true }, function(error, result) {
        if (error) {
            return console.error(error);
            res.send(error);
        }
        console.log(result)
        res.send(result);
    });
});
//---------------------------------------------------------------------
app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/addTrainee', function(req, res) {
    res.sendFile(__dirname + '/public/adding user/addTrainee.html');
});

app.post('/trainees', (req, res) => {
    var newTrainee = new Trainee(req.body);
    newTrainee.save((err, post) => {
        if (err) {
            console.log(err);
        } else {
            console.log('POST ADDED')
            res.send(post);
        }
    })
});

//---------------------------------------------------------------------

// 2) to handle adding a trainee
app.post('/trainees', function(req, res) {
    var newTrainee = new Trainee({
        fullName: "Ana Levi",
        gender: "Female",
        age: 52,
        phoneNumber: "0501230067",
        adress: "Alons 32 , Yavne",
        dateMedicalAssuranceEnd: new Date(2017, 06, 06, 14, 12),
        dateMembershipStart: new Date(2017, 11, 03, 14, 12),
        dateMembershipEnd: new Date(2018, 11, 03, 14, 12),
        isActive: true
    });
    newTrainee.save(function(requ, resp) {
        res.send({ status: "Ok", idInsert: resp.id }); // does it send all the newtrainee object the the client?
    });
});
// 3) handling a delete req

app.delete('/trainees/:id', function(req, res) {
    Trainee.findByIdAndRemove({ _id: req.params.id }, function(err, deletedPost) {
        Trainee.find().exec(function(err, alltrainess) {
            if (err) {
                console.log(err)
                res.send("somthing went wrong")
            } else {
                res.send(alltrainess)
            }
        })
    })
})

// 4) to handle edit trainee
app.post("/trainees/:id", function(req, res) {
    let newTraineeForm = new Trainee(req.body)
    Trainee.findByIdAndUpdate(req.params.id, { $set: { trainees: newTraineeForm } }, function(err, resp) { // we ned to figure out how to make the changes of all field of the form, not just the name.
        if (err) throw err;
        else res.send({ status: "Ok" });
    });
});