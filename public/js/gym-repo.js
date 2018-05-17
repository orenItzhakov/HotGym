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
            url: '/addtrainees',
            data: traineeData
        })
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