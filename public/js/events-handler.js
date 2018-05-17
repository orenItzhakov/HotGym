class EventHandler {

 
    constructor(traineesRenderer, gymRepo) {
        this.traineesRenderer = traineesRenderer
        this.gymRepo = gymRepo;
        // console.log(this.gymRypo)
        console.log('from even hendler constracror')

    }


    async handleAddTrainee() {
        $('.saveTrainee').on('click', () => {
            const values = {};
            $(':input').each(function() {
                if ($(this).hasClass('addTrainee'))
                    return;
                //collects all the input data -- i know its not pretty --david-- 
                values[$(this).attr('class')] = $(this).val();
            });
            this.gymRepo.addTrainee(values)
        })
    }

    registerAddPost() {
        $('#addpost').on('click', () => {
            let $input = $("#postText");
            if ($input.val() === "") {
                alert("Please enter text!");
            } else {
                this.postsRepository.addPost($input.val());
                this.postsRenderer.renderPosts(this.p());
                $input.val("");
            }
        });
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
     let insideTraineesRender =this.traineesRenderer;
        $('.pages').on('click','.delete', function(){
            console.log(this.gymRepo)
        let traineeId = $(this).closest('.trainee').data().id;
        console.log(traineeId)
        insideRepo.removeTrainee(traineeId).then((updatedTraineesList) => {
            insideTraineesRender.renderTrainees(updatedTraineesList);
        })
    })
    }

    HandleEditTrainee() {
        let $traineeForm = $(this).closest('.trainee-form') // need to know the way you orginized the html.
        let traineesId = $traineeForm.data().id
        this.gymRepo.editTrainee(traineesId, traineeForm);

    }
}


export default EventHandler;