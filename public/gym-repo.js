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

    addTrainee(traineeForm) {
        return $.post('/trainees', { form: traineeForm })
            .then((savedTrainee) => {
                console.log(savedTrainee)
                this.trainees.push(savedTrainee);
                return savedTrainee;
            })
    }

    removeTrainee(index) {
        let traineetId = this.trainees[index]._id;
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


    editTrainee(index, traineeForm) {
        let traineetId = this.trainees[index]._id;
        return $.ajax({
            url: '/trainees/' + traineetId,
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