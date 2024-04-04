(function($) {
    "use strict"
    for(var i = 1; i < 4; i++){
        const doughnut_chart = document.getElementById("doughnut_chart_" + i).getContext('2d');
        var randomNumber1 = 1 + Math.floor(Math.random() * 100);
        var randomNumber2 = 1 + Math.floor(Math.random() * 100);
        // doughnut_chart.height = 100;
        new Chart(doughnut_chart, {
            type: 'doughnut',
            data: {
                defaultFontFamily: 'Poppins',
                datasets: [{
                    data: [randomNumber1, randomNumber2],
                    borderWidth: 0, 
                    backgroundColor: [
                        " #5873fe",
                        "#2549fe;"
                    ],
                    hoverBackgroundColor: [
                        "#2549fe",
                        " #878787"
                    ]
    
                }],
                labels: [
                    "Hoàn thành",
                    "Chưa hoàn thành"
                ]
            },
            cutoutPercentage: 80, // Điều chỉnh phần trống giữa biểu đồ
            legend: {
                display: false, // Ẩn chú thích
            },
            tooltips: {
                enabled: false, // Ẩn tooltip
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            return value + '%'; // Hiển thị phần trăm giữa biểu đồ
                        },
                        color: '#878787', // Màu chữ
                        font: {
                            size: '16', // Kích thước chữ
                        }
                    }
                }
            }
        });
    }
    //doughut chart
   
    

})(jQuery);