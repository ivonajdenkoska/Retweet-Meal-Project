var chart;
var chart2;
$(document).ready(function(){

    chart = c3.generate({
        bindto: '#chart',
        data: {
            x: 'x',
            xFormat: '%d.%m.%Y',
            columns: [
                ['x', '04.04.2015', '23.08.2015', '18.11.2015', '17.01.2016', '20.03.2016',
                '16.04.2016',  '21.08.2016', '30.10.2016', '12.11.2016',
                ],
                ['Оброци', 80, 91, 102, 126, 135, 143, 150, 157 ],
                ['АнгажираниЛуѓе', 13, 20, 25, 35, 45, 55, 65, 69]
            ],
            colors: {
                Оброци: '#c0392b',
                АнгажираниЛуѓе: '#f1c40f'
           },
           types: {
            Оброци: 'area-spline',
            АнгажираниЛуѓе: 'area-spline'
        }
        },
        axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d.%m.%Y'
            },
            show:false
        }
    }
    });


    chart2 = c3.generate({
        bindto: '#chart2',
      data: {
        columns: [
            ['Маркети', 50],
            ['Фирми', 35],
            ['Индивидуи', 170]
        ],
         colors: {
                Маркети: '#c0392b',
                Фирми: '#f1c40f',
                Индивидуи: '#e67e22'
           },
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Поддржувачи"
    }
    });

});
