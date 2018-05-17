    /**
     * @class Responsible for rendering users page and user details in the HTML
     */
    class TraineesRenderer {
        constructor() {
            this.$trainees = $(".trainees");
            this.$traineesTemplate = $('#trainees-template').html();
        }

        async renderTrainees(trainees) {
            this.$trainees.empty();
            let template = Handlebars.compile(this.$traineesTemplate);
            for (let i = 0; i < trainees.length; i++) {
                let newHTML = template(trainees[i]);
                this.$trainees.append(newHTML);
            }
        }
    }
    export default TraineesRenderer;