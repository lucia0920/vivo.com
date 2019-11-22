require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product",
        cookie: "./cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {
    product.render(function(id, price) { // 渲染页面
        $('.shop-car').on('click', function() {

            product.addItem(id, price, $('.number').val());
        });
    });
});