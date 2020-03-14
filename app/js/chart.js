//chart
var chocolate_type;
var density;
var color;
var font_size1 = '20px';
var font_size2 = '14px';

function f1() {

}

$(function () {

    var default_bgcolor = "#f1eee9";
    var options = {
        chart: {
            renderTo: 'container',
            plotBackgroundColor: null,
            backgroundColor: 'transparent',
            plotBorderWidth: null,
            plotShadow: false
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        exporting: {
            buttons: [
                {
                    enabled: false
                }
            ]
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: [default_bgcolor],
                stacking: 'normal',
                startAngle: -90,
                endAngle: 90,
                slicedOffset: 5,
                point: {
                    events: {
                        select: function (e) {
                            e.preventDefault();
                            var selectedPoints = chart.getSelectedPoints();
                            for (var key in selectedPoints) {
                                var selectedPoint = selectedPoints[key];
                                if (this.series.index === selectedPoint.series.index) {
                                    selectedPoint.update({color: default_bgcolor, selected: false, sliced: false})
                                }
                            }
                            this.update({color: this.series.options.activeColor, selected: true});
                            console.log(this.value);
                            if (this.value == 'dark' || this.value == 'milk' || this.value == 'white') {
                                chocolate_type = this.value
                            } else if (this.value == 'low' || this.value == 'medium' || this.value == 'high') {
                                density = this.value;
                            }
                        },
                        unselect: function (e) {
                            e.preventDefault();
                            this.update({color: default_bgcolor, selected: false});
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    y: 1,
                    shadow: false,
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                tooltip: {
                    followPointer: false,
                    hover: false,
                }
            }
        },
        responsive: {
            rules: [{
                chartOptions: undefined,
                condition: {
                    callback: undefined,
                    maxHeight: undefined,
                    maxWidth: undefined,
                    minHeight: 0,
                    minWidth: 0
                }
            }]
        },
        series: [{
            type: 'pie',
            name: 'dark',
            activeColor: "#3b2a26",
            borderColor: '#c6a668',
            size: '99%',
            dataLabels:{
                style: {
                    color: 'black',
                    fontSize: font_size1,
                    textOutline: 'black',
                    fontWeight: 'normal',
                    letterSpacing: '2px'
                }
            },
            data: [{
                name: 'DARK',
                value: 'dark',
                y: 1,
                color: "#f1eee9",
                dataLabels: {
                    rotation: -55,

                }
            },
                {
                    name: 'MILK',
                    value: 'milk',
                    y: 1,
                    color: "#f1eee9",
                    dataLabels: {
                        rotation: 0,

                    }
                },
                {
                    name: 'WHITE',
                    value: 'white',
                    y: 1,
                    color: "#f1eee9",
                    dataLabels: {
                        rotation: 55,

                    }
                }]
        },
            {
                type: 'pie',
                borderColor: '#c6a668',
                name: 'Browser share',
                activeColor: '#975a3d',
                size: '66%',
                dataLabels: {
                    rotation: -55,
                    style: {
                        color: 'black',
                        fontSize: font_size2,
                        textOutline: 'black',
                        fontWeight: 'normal',
                        letterSpacing: '2px'
                    },
                },
                data: [
                    {
                        name: 'LOW',
                        y: 1,
                        value: 'low',
                        color: "#f1eee9",
                        dataLabels: {
                            rotation: -55

                        }
                    },
                    {
                        name: 'MEDIUM',
                        value: 'medium',
                        y: 1,
                        color: "#f1eee9",
                        dataLabels: {
                            rotation: 0,

                        }
                    },
                    {
                        name: 'HIGH',
                        value: 'high',
                        y: 1,
                        color: "#f1eee9",
                        dataLabels: {
                            rotation: 55,

                        }
                    }]
            },
            {
                allowPointSelect: true,
                type: 'pie',
                name: 'B',
                borderColor: '#c6a668',
                colors: '#c6a668',
                activeColor: '#c6a668',
                size: '33%',
                dataLabels: {
                    style: {
                        color: 'white',
                        fontSize: font_size1,
                        fontWeight: 'light',
                        letterSpacing: '3px',
                        textOutline: 'white'
                    }
                },
                data: [{
                    name: 'FILTER',
                    y: 1,
                    color: "#caae78",
                    dataLabels: {
                        rotation: 0,
                    }
                }],
                states: {
                    hover: {
                        enabled: false
                    }
                },
                point: {
                    events: {
                        select: function (e) {
                            e.preventDefault();
                            console.log(chocolate_type);
                            console.log(density)
                        }
                    }
                },
            }
        ]
    };

    var chart = new Highcharts.Chart(options);

    function redrawchart() {
        var chart = $('#container').highcharts();

        console.log(chart.series);
        var w = $('#container').closest(".diagram_container").width();
        console.log('------', w)
        chart.setSize(
            w, w * (3 / 4), false
        );
        chart.update({
            plotOptions: {
                pie: {
                    dataLabels: {
                        distance: -w/15
                    }
                }

            }
        });

        chart.series[0].update(
            {dataLabels: {
                    style: {
                        fontSize: w/35
                    }

                }}, true);

        chart.series[1].update(
            {dataLabels: {
                    style: {
                        fontSize: w/45
                    }

                }}, true);

        chart.series[2].update(
            {dataLabels: {
                    style: {
                        fontSize: w/40
                    }

                }}, true);
    }

    $(window).resize(redrawchart);
    redrawchart();
});