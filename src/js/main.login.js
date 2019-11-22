require.config({
    paths: { // 模块和路径
        jquery: "./jquery.min",
        md5: "./jquery.md5",
        login: "./lib/login",
        cookie: "./cookie"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'md5', 'login'], function($, md5, login) {
    login.logIn();
    login.logEv('#submit')
})