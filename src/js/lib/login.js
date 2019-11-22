define(['jquery', 'md5', 'cookie'], function($, md5, cookie) {
    return {
        logEv: function(selector) {
            $(selector).on('click', function() {
                var phone = $('#phone').val();
                var pass = $.md5($('#password').val());
                $.ajax({
                    type: "POST",
                    url: "../lib/login.php",
                    data: {
                        'phone': phone,
                        'password': pass
                    },
                    dataType: 'json',
                    success: function(response) {
                        // console.log(response)
                        if (response == 1) {
                            alert('登录成功');
                            location.href = "../html/home.html";
                        } else {
                            alert('用户名或密码不正确');
                            location.reload();
                        }
                    }
                });
            });
        },
        logIn: function() {
            var phone = $('#phone')[0];
            var password = $('#password')[0];
            var pass = $('.pass')[0];
            var checkbox = $('#checkbox')[0];

            var reg1 = /^1[356789]\d{9}$/; //手机号

            phone.onkeyup = function() {
                if (reg1.test(this.value)) {
                    pass.innerHTML = null;
                    this.dataset.pass = true;
                } else {
                    pass.innerHTML = '请输入有效的手机号';

                }
            }
            checkbox.onclick = function() {
                if (checkbox.checked) {
                    console.log(1)
                    cookie.set('phone', phone.value, 14);
                    cookie.set('password', password.value, 14)
                }
            }
            if (document.cookie) { //判断是否有cookie数据
                var arr = document.cookie.split('; ');
                arr.forEach((elm) => {
                    var item = elm.split('=');
                    switch (item[0]) {
                        case "phone":
                            phone.value = item[1];
                            break;
                        case "password":
                            password.value = item[1];
                            break;
                    }
                });
            }
        }
    }
})