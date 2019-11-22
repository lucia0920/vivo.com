define(['jquery', 'md5'], function($, md5) {
    return {
        regEv: function(selector) {
            $(selector).on('click', function() {
                var phone = $('#phone').val();
                var pass = $.md5($('#password').val());
                $.ajax({
                    type: "POST",
                    url: "../lib/reg.php",
                    data: {
                        'phone': phone,
                        'password': pass
                    },
                    dataType: 'json',
                    success: function(response) {
                        if (response == 2) {
                            alert('注册成功');
                            location.href = "../html/login.html";
                        } else {
                            alert('该用户已存在');
                            location.reload();
                        }
                    }
                });
            });
        },
        reg: function() {
            var phone = $('#phone')[0];
            var submit = $('#submit')[0];
            var p_reg = $('.p_reg')[0];
            var password = $('#password')[0];
            var pass = $('.pass')[0];
            var checkbox = $('#checkbox')[0];
            var form = $('.form')[0];

            var reg1 = /^1[356789]\d{9}$/; //手机号
            var reg2 = /^\w{8,16}$/; //密码

            phone.onkeyup = function() {
                if (reg1.test(this.value)) {
                    p_reg.innerHTML = null;
                    this.dataset.pass = true;
                } else {
                    p_reg.innerHTML = '请输入有效的手机号';
                }
                check();
            }
            password.onkeyup = function() {
                if (reg2.test(this.value)) {
                    pass.innerHTML = null;
                    this.dataset.pass = true;
                } else {
                    pass.innerHTML = '密码必须为8-16位字母和数字组合';
                }
                check();
            }
            checkbox.onclick = function() {
                if (checked = true) {
                    checkbox.dataset.pass = true;
                }
                check()
            }

            function check() {
                var button = $('.form input[data-pass="true"]');
                // console.log(button)
                if (button.length == 3) {
                    // console.log(button)
                    submit.removeAttribute('disabled');
                }
            }
        }
    }
})