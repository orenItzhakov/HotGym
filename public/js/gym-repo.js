/**
 * @class Responsible for storing and manipulating HOT gym trainees, in-memory
 */
class GymRepo {
    constructor() {
        this.trainees = [];
    }



    async getTrainees() {
        let result = await $.ajax({
            method: "GET",
            url: '/trainees',
        })
        this.trainees = result;
        return this.trainees
    }

    async addTrainee(traineeData) {
        let result = await $.ajax({
            method: "POST",

            url: '/trainees',
            data: traineeData
        })
    }


    removeTrainee(traineetId) {
        return $.ajax({
                method: "DELETE",
                url: '/trainees/' + traineetId
            })
            .then((data) => {
                console.log(data)
                return this.trainees = data;

                //    this.trainees.splice(index, 1);
            })
    };


    editTrainee(traineeId) {
            return $.ajax({
                url: '/trainees/' + traineeId,
                method: "POST",
                data: newTraineeDetails,
                dataType: 'json'
            }).then((data) => {
                console.log(data)
                this.posts[postIndex].comments.push(newCom);
            })
    
        
        return $.ajax({
            url: '/trainees/' + traineeId,
            method: "POST",
            data: traineeForm,
            dataType: 'json'
        }).then((data) => {
            this.trainees = data;
            return this.trainees;
        })
    }

    getDataForChart(data) {
        var target = 0, left = 0, aboutToLeave = 0, newMembers = 0;
        for (let i = 0; i < data.length; i++) {
            var d1 = new Date();
            var d2 = new Date(data[i].dateMembershipEnd);
            var d3 = new Date(data[i].dateMembershipStart);
        
            if (d1.getMonth() == d2.getMonth() && d1.getYear() == d2.getYear() && d1.getDate() > d2.getDate()) left += 1;
            if (d1.getMonth() == d2.getMonth() && d1.getYear() == d2.getYear() && d1.getDate() < d2.getDate()) aboutToLeave += 1;
            if (d1.getMonth() == d3.getMonth() && d1.getYear() == d3.getYear() && d1.getDate() > d3.getDate()) newMembers += 1;
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
