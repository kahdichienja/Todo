<?php 
include_once 'layouts/dataheader.php';
?>
<?php 
// include 'getdata.php';
?>

    <div class="container">
        <div id="container" class="card" style="width:100%; height:400px;"></div>
        <div id="second" class="card" style="width:100%; height:400px;"></div>
        <div id="area" class="card" style="width:100%; height:400px;"></div>
        <div id="other1" class="card" style="width:100%; height:400px;"></div>
        <div id="other2" class="card" style="width:100%; height:400px;"></div>
        <!-- <div id="test" class="card" style="width:100%; height:400px;"></div> -->
        <!--<div id="dbdata" class="card" style="width:100%; height:400px;"></div>-->
    </div>
    


    <script src="js/jquery.js"></script>
    <script src="js/graph.js"></script>
    <script>

    // var chart = new Highcharts.Chart({
    //     chart: {
    //         renderTo: 'dbdata',
    //         type: 'bar'
    //     },
    //     title: {
    //             text: 'Fruit Consumption'
    //         },
    //         xAxis: {
    //             categories: ['Apples', 'Bananas', 'Oranges', 'greens']
    //         },
    //         yAxis: {
    //             title: {
    //                 text: 'Fruit eaten'
    //             }
    //         },
    //     series: [{
    //         data: [],
    //         pointStart: 0,
    //         pointInterval: 1
    //     }]
    // });

        document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'School to have its Chatroom'
            },
            xAxis: {
                categories: ['Catholic', 'White House', 'Runda', 'Two Brothers']
            },
            yAxis: {
                title: {
                    text: 'No. of Students'
                }
            },
            series: [{
                name: 'Yes',
                data: [1, .5, 4, 5]
            }, {
                name: 'No',
                data: [1, 1, 3, 3]
            }]
  
        });
    }); 
    document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('area', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'School to have its Chatroom'
            },
            xAxis: {
                categories: ['Jersey', 'Nyamarambe', 'Oxford', 'Karen']
            },
            yAxis: {
                title: {
                    text: 'No. of Students'
                }
            },
            series: [{
                name: 'Yes',
                data: [10, .5, 4, 5]
            }, {
                name: 'No',
                data: [5, 7, 3, 3]
            }]
  
        });
    });    

        document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('second', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Analysis'
            },
            xAxis: {
                categories: ['Jersey', 'Nyamarambe', 'Oxford', 'Karen']
            },
            yAxis: {
                title: {
                    text: 'No. Of Students'
                }
            },
            series: [{
            type: 'column',
            name: 'Jersey',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'Oxford',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Nyamarambe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33]
        }]
        });
    }); 


    document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('other1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,
            plotShadow: true
        },
        title: {
            text: 'Most<br>Visited<br>Social Media',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                fontWeight: 'bold',
                color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
            ['WhatsApp', 58.9],
            ['Facebook', 13.29],
            ['Twitter', 13],
            ['Instagram', 14.78],
            ['Google +', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                enabled: false
                }
            }
            ]
        }]
        });
        });

        
        document.addEventListener('DOMContentLoaded', function () {
        var myChart = Highcharts.chart('other2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'People Versus Person of 507 Individuals by Gender'
    },
    subtitle: {
        text: 'Analysis By: Clinton Agoo  2019'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'People'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Person (every 10)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} people, {point.y} Person'
            }
        }
    },
    series: [{
        name: 'No',
        color: 'rgba(223, 83, 83, .5)',
        data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
            [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
            [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
            [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
            [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
            [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
            [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
            [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
            [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
            [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
            [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
            [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
            [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
            [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
            [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
            [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
            [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
            [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
            [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
            [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

    }, {
        name: 'Yes',
        color: 'rgba(119, 152, 191, .5)',
        data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
            [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
            [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
            [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
            [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
            [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
            [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
            [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
            [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
            [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
            [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
            [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
            [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
            [180.3, 83.2], [180.3, 83.2]]
    }]
});

});

// $(document).ready(function(){
//     var options = {
//         chart:{
//             renderTo: 'test',
//             type: 'line',
//         },
//         series: [{}]
//     };
//     $.getJSON('getdata.php', function(data){
//         options.series[0].data = data;
//         var chart = new Highcharts.Chart(options);
//     });
// });
    </script>
</body>
</html>