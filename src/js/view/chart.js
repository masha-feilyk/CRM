$(function () {
    var ctx = document.getElementById('chart').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 300, 0, 80);
    gradientStroke.addColorStop(0, '#442a9d');
    gradientStroke.addColorStop(1, '#f14e95');

    var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, '#b13cd5');
    gradientFill.addColorStop(1, '#b13cd5');

    const data1 = [31, 73, 44, 64, 44];
    const data2 = [79, 114, 90, 106, 60];

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: "Data 1",
                fill: true,
                backgroundColor: gradientFill,
                borderColor: gradientFill,
                data: data1,
                pointRadius: 0,
                borderWidth: 1
            },{
                label: "Data 2",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: gradientStroke,
                data: data2,
                pointRadius: 0,
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false

                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });
});