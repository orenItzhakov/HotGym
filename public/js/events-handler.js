class EventHandler {

    constructor(traineesRenderer, gymRepo) {
        this.traineesRenderer = traineesRenderer
        this.gymRypo = gymRepo;
    }

    handleAddTrainee() {
        $('.saveTrainee').on('click', () => {
            debugger;
            // let $traineeForm = $(this).closest('.trainee-from') // need to know the way you orginized the html.
            // const recoverValues = () => {
            const values = {};

            $(':input').each(function() {
                if ($(this).hasClass('addTrainee'))
                    return;
                // very ugly code
                values[$(this).attr('class')] = $(this).val();
            });
            // debugger;
            console.log(values)
            return values;

            // }
            // cetch trainee data 

            // //----
            // let fullName = $('.fullName').val();
            // let gender = $('.gender').val();
            // let age = $('.age').val();
            // let phoneNumber = $('.phoneNumber').val();
            // let adress = $('.adress').val();
            // let dateMedicalAssuranceEnd = $('.dateMedicalAssuranceEnd').val();
            // let dateMembershipStart = $('.dateMembershipStart').val();
            // let dateMembershipEnd = $('.dateMembershipEnd').val();
            // //-----
            // let traineeForm = {
            //     fullName: fullName,
            //     gender: gender,
            //     age: age,
            //     phoneNumber: phoneNumber,
            //     adress: adress,
            //     dateMedicalAssuranceEnd: dateMedicalAssuranceEnd,
            //     dateMembershipStart: dateMembershipStart,
            // }
            this.gymRepo.addTrainee(traineeForm).then(() => {
                alert("new trainee as been saved");
            })
        })
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