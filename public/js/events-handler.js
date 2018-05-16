class EventHandler {

    constructor(traineesRenderer, gymRepo) {
        this.traineesRenderer = traineesRenderer
        this.gymRypo = gymRepo;
    }

    handleAddTrainee() {
        // console.log(this);
        let addBtn = $('.addTrainee');
        // console.log(addBtn)
        debugger
        // $('.addTrainee').on('click', () => {
        // let $traineeForm = $(this).closest('.trainee-from') // need to know the way you orginized the html.

        // cetch trainee data 

        //----
        let fullName = $('.fullName').val();
        let gender = $(this).closest('.gender').val();
        let age = $(this).closest('.age').val();
        let phoneNumber = $(this).closest('.phoneNumber').val();
        let adress = $(this).closest('.adress').val();
        let dateMedicalAssuranceEnd = $(this).closest('.dateMedicalAssuranceEnd').val();
        let dateMembershipStart = $(this).closest('.dateMembershipStart').val();
        let dateMembershipEnd = $(this).closest('.dateMembershipEnd').val();
        //-----
        let traineeForm = {
            fullName: fullName,
            gender: gender,
            age: age,
            phoneNumber: phoneNumber,
            adress: adress,
            dateMedicalAssuranceEnd: dateMedicalAssuranceEnd,
            dateMembershipStart: dateMembershipStart,
        }
        this.gymRepo.addTrainee(traineeForm).then(() => {
                alert("new trainee as been saved");
            })
            // })
    }

    handleRenderTrainees() {
        $('.trainees').on('click', () => {
            this.gymRepo.getTrainees(() => {
                this.traineesRenderer.renderTrainees(this.gymRepo.trainees)
            })

        })
    }

    handleRemoveTrainee() {
        let traineesId = $('.remove-trainee').siblings('.trainee').attr("data-id");
        this.gymRepo.removeTrainee(traineesId).then(() => {
            this.gymRepo.trainessRenderer.renderTrainees(this.gymRypo.trainees);
        })
    }

    HandleEditTrainee() {
        let $traineeForm = $(this).closest('.trainee-form') // need to know the way you orginized the html.
        let traineesId = $traineeForm.data().id
        this.gymRepo.editTrainee(traineesId, traineeForm);

    }
}


export default EventHandler;