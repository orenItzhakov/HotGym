    /**
     * @class Responsible for rendering users page and user details in the HTML
     */
    class TraineesRenderer {
        constructor() {
            this.$trainees = $(".trainees");
            this.$traineesTemplate = $('#trainees-template').html();
            // this.$traineeDetailsTemplate = $('#traineeDetails-template').html();
        }

        renderTrainees(trainees) {
            debugger
            this.$trainees.empty();
            let template = Handlebars.compile(this.$trainees);
            for (let i = 0; i < trainees.length; i++) {
                let newHTML = template(trainees[i]);
                this.$trainees.append(newHTML);
                //   this.traineeDetails(trainees, i);
            }
        }
    }

    //     rendertraineeDetails(trainees, traineeIndex) {
    //         let trainee = $(".trainee")[traineeIndex];
    //         let $detailsList = $(trainee).find('.details-list');
    //         $detailsList.empty();
    //         let template = Handlebars.compile(this.$traineeDetailsTemplate);
    //         for (let i = 0; i < trainees[traineeIndex].details.length; i++) {
    //           let newHTML = template(trainees[traineeIndex].details[i]);
    //           $detailsList.append(newHTML);
    //         }
    //     }
    // }

    export default renderTraineesPage