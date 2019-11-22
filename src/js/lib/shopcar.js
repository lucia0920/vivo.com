let baseUrl = "http://localhost:8080/1910/day36/shopcar";
define(['jquery', 'cookie'], function($, cookie) {
    // var cookie = this.cookie
    return {
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join();
                // console.log(idList)
                $.ajax({
                    url: `../lib/shop.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            let descrip = JSON.parse(elm.descrip)
                            let arr = shop.filter((val, i) => {
                                return val.id == elm.u_id;
                            });
                            // console.log(arr)
                            tempstr += `
                            <li class="tab-head">
                            <div>
                                <input type="checkbox">
                                <img src="..${pic[0].p1}" alt=" ">
                            </div>
                            <div>
                                <a href="javascript:; ">${descrip[0].title}</a><br>
                            </div>
                            <div class="pic">${elm.price}</div>
                            <div class="count ">
                                <span class="reduce ">-</span>
                                <input type="text " value="1 " max="5 " class="number">
                                <span class="add ">+</span>
                            </div>
                            <div></div>
                            <div></div>
                            <div class="countprice">${(arr[0].num*elm.price).toFixed(2)}</div>
                            <div class="del">删除</div>
                        </li>
                            `;
                        });
                        $('.car-list').append(tempstr);


                        //数量加减+单价计算
                        $('.input.number').on('change', function() {
                            console.log(1)
                        })

                        $('.tab-head').on('click', 'span', function() {
                            if ($(this).hasClass('reduce')) {
                                this.nextElementSibling.value -= 1;
                                if (this.nextElementSibling.value <= 1) {
                                    this.nextElementSibling.value = 1
                                }
                            } else {
                                this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
                            }
                            $(this).parents().nextAll('.countprice').html(($(this).parents().prev('.pic').html() * $(this).siblings('input').val()).toFixed(2))
                            count()
                        })


                        //全选
                        $('.selectall').on('click', function() {
                            $('input:not(.selectall)').prop('checked', $(this).prop('checked'))
                            count()
                        })
                        $('input:not(.selectall)').on('click', function() {
                            count()
                        })


                        //删除
                        $('.del').on('click', function() {
                            var i = $('.del').index($(this));
                            console.log(shop[i])
                            var arr = [];
                            shop.forEach(elm => {
                                if (shop[i].id != elm.id) {
                                    arr.push(elm)
                                }
                            })
                            cookie.remove('shop');
                            cookie.set('shop', JSON.stringify(arr), 1)
                            location.reload()
                        })
                    }
                });
            }

            //计算总价和总量
            function count() {
                var sum = 0;
                $('.itemnum').html(null)
                $('.price').html(null)
                $('input:checked:not(.selectall)').parents('.tab-head').find('.countprice').text(function(i, val) {
                    sum += parseInt(val);
                })
                var countnum = $('input:checked:not(.selectall)').length
                    // console.log(countnum)
                $('.itemnum').html(countnum)
                    // console.log(sum)
                    // console.log($('.price').html())
                $('.price').html(sum.toFixed(2))
            }
        }
    }
});