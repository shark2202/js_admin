define(function (require) {
    var Vue = require('vue')
    ,stpl = require('text!view/main1/index/index.tpl')
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
        methods: {},
        mounted: function mounted() {
            var that = this;
            console.log('88888');
        }
    });
    return vueComponent;
});