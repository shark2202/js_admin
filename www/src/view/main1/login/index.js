define(function (require) {
    var Vue = require('vue')
    ,stpl = require('text!view/main1/login/index.tpl')
    ,css = require('css!view/main1/login/index.css')
    ,layui = require('layui')
    ,{ setToken } = require('app/common/util')
    ,config = require('app/config/config1')
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
            login: function(){
                alert('oooooo');

                setToken('5555')

                //this.$route.push({ path : HOME })
            }
        },
        mounted: function mounted() {
            var that = this;
            console.log('1212');

            layui.use('form', function(){
              var form = layui.form;
              
              //监听提交
              form.on('submit(formDemo)', function(data){
                layer.msg(JSON.stringify(data.field));
                return false;
              });
            });
        }
    });
    return vueComponent;
});