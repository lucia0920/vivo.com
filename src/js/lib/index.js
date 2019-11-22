let baseUrl = "http://localhost:8080/H5-1908section2/exercise/vivo/src";

define(['jquery'], function($) {
    return {
        render: function() {

            $.ajax({
                url: `../lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm)
                        let pic = JSON.parse(elm.pic);
                        let des = JSON.parse(elm.descrip);
                        temp += `
                                <li class="item">
                                <a href="${baseUrl}/html/product.html?id=${elm.u_id}">
                                    <div class="p-pic">
                                        <img  data-original="..${pic[0].p1}" alt="" class="lazy">
                                    </div>
                                    <div class="p-title">
                                        ${des[0].title}
                                    </div>
                                    <div class="p-scd-title">
                                    ${des[0].details}
                                    </div>
                                    <div class="p-price">
                                        <span class="yuan">￥</span>${elm.price}
                                    </div>
                                </a>
                            </li>`;
                    });
                    $('.sec-list').append(temp);
                    $('img.lazy').lazyload({
                        effect: 'fadeIn',
                        failurelimit: 100
                    })
                }

            })
        }
    }
});