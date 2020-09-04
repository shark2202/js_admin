define(function (require) {
    /*定义数据模型*/
    var Vue = require('vue'),
    Vuex = require('vueX')
    ;

    var state = {};

    var actions = {};

    var getters = {};

    var mutations = {};

    Vue.use(Vuex);
    Vue.config.debug = true; // 1.为所有的警告打印栈追踪  2.把所有的锚节点以注释节点显示在 DOM 中，更易于检查渲染结果的结构。
    var store = new Vuex.Store({
        state: state,
        actions: actions,
        getters: getters,
        mutations: mutations,
        strict: false
    });
    return store;
});