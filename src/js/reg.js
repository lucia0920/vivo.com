window.onload = function() {
        $('#submit').on('click', function() {
            var phone = $.md5($('#phone').val());
            var pass = $.md5($('#userPassword').val());
            $.ajax({
                type: "POST",
                url: "../lib/reg.php",
                data: {
                    'phone': phone,
                    'password': pass
                },
                success: function(response) {
                    console.log(data)
                    eval(response);

                }
            });
        })
    }
    // define(['jquery', 'md5'], function($, md5) {
    //     return {
    //         regEv: function(selector) {
    //             console.log($.md5($('#password').val()));
    //             $(selector).on('click', function() {
    //                 $.ajax({
    //                     url: 'http://localhost:8080/H5-1908section2/exercise/vivo/src/lib/reg.php',
    //                     type: 'post',
    //                     data: {
    //                         password: $.md5($('#password').val()),
    //                         phone: $('#phone').val()
    //                     },
    //                     success: function(res) {
    //                         console.log(res);
    //                         eval(res);

//                     }
//                 })
//             });
//         }
//     }
// })