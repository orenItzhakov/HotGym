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