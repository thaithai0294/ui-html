
(function($) {
    "use strict"
    //example 1
    var table = $('#tbl-role').DataTable({
        dom: '<t><"pull-left"B><"pull-right"p>',
        buttons: [ // Thêm nút
            {
                text: 'Lưu',
                className: 'btn btn-primary spacing-top',
                action: function (e, dt, node, config) {
                    
                }
            }
        ],
        searching: false, // Ẩn ô search
        lengthChange: false, // Ẩn số dòng trên 1 trang
        info: false, // Ẩn thông tin số dòng
        stripeClasses: ['table-row-even', 'table-row-odd'], // Thêm class cho từng dòng
        language: { // Ngôn ngữ
            paginate: {
                previous: "<i class='fa fa-angle-left'></i>",
                next: "<i class='fa fa-angle-right'></i>"
            }
        },
        columnDefs: [
            { className: "center", orderable: false, targets: [1,2,3,4] },
        ]
    });

    table.on('click', 'tbody tr', function (e) {
    });

    table.rows().every(function () {
    });

})(jQuery);
