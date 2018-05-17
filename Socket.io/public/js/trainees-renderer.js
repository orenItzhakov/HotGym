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
            let newHTML = template({trainees:trainees});
            this.$trainees.append(newHTML);
        }
    }
    export default TraineesRenderer;
