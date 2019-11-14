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