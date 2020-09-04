define(function (require) {
	var Vue = require('vue'),
    Vuex = require('vueX')
    ;

    var state = {};

    var actions = {};

    var getters = {};

    var mutations = {};


    return {
        state: state,
        actions: actions,
        getters: getters,
        mutations: mutations,
        strict: false
    };
});