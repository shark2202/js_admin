define(function (require) {
    var Vue = require('vue')
    ,stpl = require('text!view/main1/index/index.tpl')
    ,user = require('app/store/user/index')
    ;
    var vueComponent = Vue.extend({
        template: stpl,
        name: "app",
        data: function data() {
            return {
                'ttt':77777
            };
        },
        components: {},
        computed: {},
        //beforeCreate: function beforeCreate() {},
        methods: {
            login:function(){
                console.log(this.$store.state.user.name)
            }
        },

        created:function(){
            /*动态加载userStore*/
            this.$store.registerModule("user", user);
        },

        mounted: function mounted() {
            var that = this;
            console.log('88888');

            /*加载form*/
            //layui.use('form', function(){});
        }
    });
    return vueComponent;
});