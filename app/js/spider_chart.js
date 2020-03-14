var main_color = '#893111';
var checked_color = '#f47c01';
var font_size = '18px';
var data = [
    {y: 10, color: main_color, 'name': 'Cocoa flavour (%)', fontSize: '20px'},
    {y: 6, color: main_color, 'name': 'Roasted (%)'},
    {y: 8, color: main_color, 'name': 'Bitter (%)'},
    {y: 5, color: main_color, 'name': 'Sour (%)'},
    {y: 5, color: main_color, 'name': 'Spicy (%)'},
    {y: 9, color: checked_color, 'name': 'Fruity (%)'},
    {y: 7, color: main_color, 'name': 'Woody (%)'},
    {y: 4, color: main_color, 'name': 'Floral (%)'},
];
console.log($(window).width());

var tickInterval = 360 / data.length;

var chart = Highcharts.chart('container', {

    chart: {
        polar: true,
        backgroundColor: 'transparent',
    },

    title: {
        enabled: false,
        text: ''
    },

    subtitle: {
        enabled: false,
    },

    credits: {
        enabled: false
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },

    series: [{
        type: 'bar',
        name: 'Line',
        data: data,
        pointWidth: 0.1,
    }],

    xAxis: {
        tickInterval: tickInterval,
        min: 0,
        max: 360,
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0,
        labels: {
            formatter: function () {
                if (!this.isLast) {
                    return data[this.value / tickInterval].name
                }
            },
            style: {
                color: '#c3a15e',
                fontSize: font_size,
            }
        },
    },

    yAxis: {
        min: 0,
        max: 10,
        tickInterval: 0.1,
        gridLineColor: '#caae78',
        labels: {
            enabled: false,
            lineColor: 'red'
        }
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: tickInterval,
            colorByPoint: true,
        },

        point: {
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
});


if ($(window).width() <= 554) {
    font_size = '12px';
    // $('#container').width(chart.setSize(250, 250));
}