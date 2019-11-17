$(function() {
    $.ajax({
        type: "get",
        url: "../lib/getall.php",
        dataType: "json",

        success: function(data) {
            console.log(data)
            let temp = '';
            data.forEach((elm, i) => {
                let pic = JSON.parse(elm.pic);
                temp += `
                <li class="item">
                <a href="">
                    <div class="p-pic">
                        <img src="../${pic[0].p1}" alt="">
                    </div>
                    <div class="p-title">
                        ${title[0].title}
                    </div>
                    <div class="p-scd-title">
                        ${title[0].details}
                    </div>
                    <div class="p-price">
                        <span class="yuan">￥</span>${price}
                    </div>
                </a>
            </li>
`;
            });

            $('.sec-list').append(temp);
        }
    });
});