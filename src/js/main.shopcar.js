require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./cookie",
        shopcar: "./lib/shopcar"
    },
    shim: {}
});

require(['jquery', 'shopcar'], function($, shopcar) {
    shopcar.render();
});