/**
 * @class Responsible for storing and manipulating HOT gym trainees, in-memory
 */
class GymRepo {
    constructor() {
        this.trainees = [];
    }

    getTrainees() {
        return $.get('/trainees')
            .then((data) => {
                this.trainees = data;
                console.log(this.trainees);
                return this.trainees;
            })
    };
    // catch trainee data
    // addTrainee(traineeForm) {

    //     //send trainee data
    //     return $.post('/trainees', { form: traineeForm })
    //         .then((savedTrainee) => {
    //             console.log(savedTrainee)
    //             this.trainees.push(savedTrainee);
    //             // return savedTrainee;
    //         })
    // }
    async addTrainee(traineeData) {
        let result = await $.ajax({
            method: "POST",
            url: '/posts',
            data: traineeData
        })
        this.trainees.push(savedTrainee);
    }


    removeTrainee(traineetId) {
        // let traineetId = this.trainees[index]._id;
        return $.ajax({
            method: "DELETE",
            url: '/trainees/' + traineetId
        })
            .then((data) => {
                this.trainees = data;
                console.log(data);
                this.trainees.splice(index, 1);
                return this.trainees;
            })
    };


    editTrainee(traineeId, traineeForm) {
        // let traineetId = this.trainees[index]._id;
        return $.ajax({
            url: '/trainees/' + traineeId,
            method: "POST",
            data: traineeForm,
            dataType: 'json'
        }).then((data) => {
            this.trainees = data;
            return this.trainees;
        })
    };

    getDataForChart(data) {
        var target = 0, left = 0, aboutToLeave = 0, newMembers = 0;
        for (let i = 0; i < data.length; i++) {
            var d1 = new Date();
            var d2 = new Date(data[i].dateMembershipEnd);
            var d3 = new Date(data[i].dateMembershipStart);
            if (d1.getMonth() == d2.getMonth() && d1.getTime() > d2.getTime()) left += 1;
            if (d1.getMonth() == d2.getMonth() && d1.getYear() == d2.getYear()) aboutToLeave += 1;
            if (d1.getMonth() == d3.getMonth() && d1.getYear() == d3.getYear()) newMembers += 1;
        }
        target = (left + aboutToLeave) - (newMembers) + 1;
        return [
            ['Category', 'How many trainees']
            , ['Target number - More members to sign up', target]
            , ['Left', left]
            , ['About to leave', aboutToLeave]
            , ['New members', newMembers]
        ];
    }
}
//class ends





export default GymRepo;