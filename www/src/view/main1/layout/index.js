define(function (require) {
    var Vue = require('vue')
    ,stpl = require('text!view/main1/layout/index.tpl')
    ,css = require('css!view/main1/layout/index.css')
    ,layui = require('layui')
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
        	
        },
        mounted: function mounted() {
            var that = this;
        }
    });
    return vueComponent;
});