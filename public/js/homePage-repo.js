/**
 * @class Responsible for storing and manipulating home page chart, in-memory
 */
class ChartRepo {
    constructor() {
        this.membersTrafic = [];
    }

    getChart() {
        return $.get('/homepage')
            .then((data) => {
                this.trainees = data;
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
                console.log(data)
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

}
//class ends





export default GymRepo;