class EventHandler {

    constructor(traineesRenderer, gymRepo) {
        this.traineesRenderer = traineesRenderer
        this.gymRepo = gymRepo;
        // console.log(this.gymRypo)
        // console.log(this.traineesRenderer)
        console.log('from even hendler constracror')

    }


    async handleAddTrainee() {
        $('.saveTrainee').on('click', () => {
            const values = {};
            $(':input').each(function () {
                if ($(this).hasClass('addTrainee'))
                    return;
                //collects all the input data -- i know its not pretty --david-- 
                values[$(this).attr('class')] = $(this).val();
            });
            this.gymRepo.addTrainee(values)
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
        let insideRepo = this.gymRepo;
        let insideTraineesRender = this.traineesRenderer;
        $('.pages').on('click', '.delete', function () {
            console.log(this.gymRepo)
            let traineeId = $(this).closest('.trainee').data().id;
            console.log(traineeId)
            insideRepo.removeTrainee(traineeId).then((updatedTraineesList) => {
                insideTraineesRender.renderTrainees(updatedTraineesList);
            })
        })
    }

    HandleEditTrainee() {
        let insideRepo = this.gymRepo;
        let insideTraineesRender = this.traineesRenderer;
        $('.pages').on('click', '.edit', function () {
            console.log(this.gymRepo)
            let traineeId = $(this).closest('.trainee').data().id;
            console.log(traineeId)
            insideRepo.editTrainee(traineeId).then()
        })
    }
}



export default EventHandler;