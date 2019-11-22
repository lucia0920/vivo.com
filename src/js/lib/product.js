let baseUrl = "http://localhost:8080/H5-1908section2/exercise/vivo/src";

define(['jquery', 'cookie'], function($, cookie) {
    // var cookie = this.cookie
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            // console.log(id)
            $.ajax({
                url: `../lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    let descrip = JSON.parse(res.descrip)
                        // console.log(res)
                        // console.log(descrip)
                        // console.log(pic)
                    let tempstr = `
                    <div class="left-box">
                    <div class="img-box">
                        <img src="..${pic[0].p1}" alt="">
                    </div>
                    <ul class="img-list ">
                         <li><img src="..${pic[0].p2}" alt=""></li>
                        <li><img src="..${pic[0].p3}" alt=""></li>
                        <li><img src="..${pic[0].p4}" alt=""></li>
                        <li><img src="..${pic[0].p5}" alt=""></li>
                    </ul>
                    <p class="share">收藏商品（60629人收藏) <a href="javascript">分享</a></p>
                </div>
                <!-- 右边盒子 -->
                <div class="right-box">
                    <h1 class="name">${descrip[0].title}</h1>
                    <p class="info">
                        <span class="limit"></span><i>${descrip[0].details}</i>
                    </p>
                    <div class="summary clear">
                        <div class="summary-pic"><span>￥</span><i>${res.price}</i></div>
                        <div class="summary-activity">
                            <div class="int"><span>积分</span><i></i></div>
                            <div class="send"><span>下单赠卷</span><i></i></div>
                        </div>
                    </div>
                    <div class="support">
                        <i>商品支持&nbsp;:</i>
                        <span>
                            <i class="iconfont">&#xe62c;</i>花呗分期
                            <div>
                                <h3>
                                    <i class="iconfont">&#xe62c;</i>支持花呗分期
                                </h3>商品支持花呗分期
                            </div>
                        </span>
                        <span><i class="iconfont">&#xe62c;</i>以旧换新
                            <div class="encourage">
                                <h3>
                                    <i class="iconfont">&#xe62c;</i>可以使用换新鼓励金
                                </h3>换新鼓励金通过参加以旧换新回收旧手机以后获得，旧手机享受额外补贴
                            </div>
                        </span>
                    </div>
                    <div class="num-title">数量</div>
                    <div class="count">
                        <span class="reduce">-</span>
                        <input type="text" value="1" class="number">
                        <span class="add">+</span>
                    </div>
                    <div class="action clear">
                        <div class="shop-car">加入购物车</div>
                        <div class="buy"><a href="./shopcar.html" class="buynow">立即购买</a></div>
                    </div>
                </div>
                    `;
                    $('.content').append(tempstr);
                    callback && callback(res.u_id, res.price);
                    // console.log($('.left-box'))


                    //选项卡功能
                    var url1 = $('.img-list>li:first-of-type>img')[0].src
                    $('.img-box>img')[0].src = url1
                    $('.img-list>li').on('mouseover', function(ev) {
                        var url = ev.target.src
                        $('.img-box>img')[0].src = url
                    })

                    $('.shop-car').on('click', function() {
                        alert('加购成功！')
                    })

                    //摁键加减
                    $('.reduce').on('click', function() {
                        $('.number').val(Number($('.number').val()) - 1);
                        if ($('.number').val() <= 1) {
                            $('.number').val(1)
                                // $('.reduce').off('click')
                            $('.reduce').attr('style', 'cursor:not-allowed')
                        }
                    })
                    $('.add').on('click', function() {
                        $('.number').val(Number($('.number').val()) + 1)
                    })
                }
            })
        },
        addItem: function(id, price, num) {
            // console.log(this)
            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果m有cookie  添加cookie

            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        },
    }
});