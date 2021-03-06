//配置
require.config({
    paths: { // 模块和路径
        jquery: "./jquery.min",
        md5: "./jquery.md5",
        reg: "./lib/reg",
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'md5', 'reg'], function($, md5, reg) {
    reg.regEv('#submit');
    reg.reg();
})