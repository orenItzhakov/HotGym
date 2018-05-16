/**
 * @class Responsible for rendering home page and user details in the HTML
 */
class ChartRenderer {
    constructor() {
        this.$chart = $(".chart");
        this.$chartTemplate = $('#chart-template').html();
    }

    renderChart(chart) {
        this.$chart.empty();
        let template = Handlebars.compile(this.$chartTemplate);
        let newHTML = template(chart);
        this.$chart.append(newHTML);
    }
}


export default ChartRenderer;