
(function($) {
    "use strict"
    //example 1
    var table = $('#tbl-user').DataTable({
        dom: '<"float-left spacing"f><"float-left spacing"l><"pull-right"B><t><"pull-left"i><"pull-right"p>', // Thứ tực dom pull-left: filter, t: table, pull-right: pagination
        //lengthChange:false, // Ẩn số dòng trên 1 trang
        //info: false, // Ẩn thông tin số dòng
        buttons: [ // Thêm nút
            {
                text: 'Thêm',
                className: 'btn btn-outline-primary spacing',
                action: function (e, dt, node, config) {
                    $(node).attr({
                        'data-toggle': 'modal',
                        'data-target': '#exampleModalCenter',
                        'data-whatever': 'myValue'
                    });
                }
            },
            {
                extend: 'excel', // Xuất ra file excel
                text: 'Export Excel',
                className: 'btn btn-outline-primary spacing excelButton',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                text: 'Import Excel',
                className: 'btn btn-outline-primary spacing',
                action: function (e, dt, node, config) {
                    $(node).attr({
                        'data-toggle': 'modal',
                        'data-target': '#importExcel',
                        'data-whatever': ''
                    });
                }
            },
        ],
        stripeClasses: ['table-row-even', 'table-row-odd'], // Thêm class cho từng dòng
        language: { // Ngôn ngữ
            paginate: {
                previous: "<i class='fa fa-angle-left'></i>",
                next: "<i class='fa fa-angle-right'></i>"
            }
        }
    });

    table.on('click', 'tbody tr', function(e) {
        if (!$(e.target).hasClass('fa-ellipsis-h')) {
            $('#exampleModalCenter').modal('show');
        }
    });
    
    table.rows().every(function() {
    });
   
})(jQuery);