define(["vue", "vueRouter", "require"], function (Vue, vueRouter, require) {
    Vue.use(vueRouter);
    var router = new vueRouter({
        routes: [
            {
                path: "/",
                name: "_index",

                components : {
                    default: function component(resolve) {
                        require(["view/main1/layout/index"], resolve);
                    }
                    ,main : function component(resolve) {
                        require(["view/main1/index/index"], resolve);
                    }
                }
                /*component: function component(resolve) {
                    require(["view/main1/layout/index"], resolve);
                }*/
                /*, children: [{
                    path: 'index',
                    name: 'index',
                    component: function component(resolve) {
                        require(["view/main1/index/index"], resolve);
                    }
                }]*/
            },
            
            {
                path: "/index",
                name: "index",
                //redirect: '/internet',
                component: function component(resolve) {
                    require(["view/main1/index/index"], resolve);
                }
            },

            {
                path: "/login",
                name: "login",
                //redirect: '/internet',
                component: function component(resolve) {
                    require(["view/main1/login/index"], resolve);
                }
            }
        ]
    });
    return router;
});