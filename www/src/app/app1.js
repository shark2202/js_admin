define(function (require) {
    var Vue = require('vue'),
    Promise = require('promise'),
    router = require('app/router/router1'),
    store = require('app/store/store1'),
    indext = require('view/main1/index'),
    config = require('app/config/config1')
    ,{ getToken } = require('app/common/util')
    //;
    //Cookies = require('Cookie')
    ;

    window.Vue = Vue;
    Vue.config.debug = true;
    Vue.config.devtools = true;

    //Vue.prototype.$message = message;

    
    Vue.directive('focus', {
        inserted: function inserted(el, _ref) {
            var value = _ref.value;
            if (value) {
                el.focus();
            }
        }
    });


    var LOGIN = config.LOGIN; // 白名单
    var HOME = config.HOME; // 白名单
    //var tokenName = config.TOKEN;

    router.beforeEach(function (to, from, next) {
        console.log(router)
        if (getToken()) {
            if (to.path === LOGIN) {
                console.log('gotohome');
                next({ path: HOME });
            } else {
                next();
            }
        }else{
            console.log('gotologin');
            console.log(to);
            if(to.path !== LOGIN){
               next({ path: LOGIN });
            }else{
               next();
            }
        }
    });

    /*启动vuejs主页面*/
    new Vue({
        el: '#app',
        router: router,
        store: store,
        components: {
            indext: indext
        },
        mounted: function mounted() {
            var that = this;
        }
    });
});