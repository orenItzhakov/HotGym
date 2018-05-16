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
            url: '/trainees',
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
                console.log(data)
            return  this.trainees = data;
              
            //    this.trainees.splice(index, 1);
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