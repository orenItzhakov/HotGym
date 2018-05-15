class EventHandler {

    constructor(traineesRenderer, gymRepo) {
        this.traineesRenderer = traineesRenderer
        this.gymRypo - gymRepo;
    }

    handleAddTrainee() {
        $('.addTrainee').on('click', () => {
            let $traineeForm = $(this).closest('.trainee-from') // need to know the way you orginized the html.
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
        let traineesId = $('.remove-trainee').siblings('.trainee').data().id;
        this.gymRepo.RemoveTrainee(trainessId).then(() => {
            this.gymRepo.trainessRenderer.renderTrainees(this.gymRypo)
        })
    }

    HandleEditTrainee() {
        let $traineeForm = $(this).closest('.trainee-form') // need to know the way you orginized the html.
        let index = $traineeForm.data().id
        this.gymRepo.editTrainee(index, traineeForm);

    }
}


export default EventHandler;
