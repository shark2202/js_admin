//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
// if (window.caniuse) {
//   // 清除本地缓存
//   window.localStorage.getItem('version') !== version ? window.localStorage.clear() : console.log(version);
//   window.localStorage.setItem('version', version);
// }

requirejs.config({
    baseUrl: './src',
    paths: {
        app: './app',

        //'@': './app',

        /*类库的*/
        'text': 'lib/text',
        'css': 'lib/css',
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'promise': 'lib/promise.min',
        'polyfill': 'lib/polyfill.min',

        /*vuejs相关的*/
        'vue': 'lib/vue',
        'vueRouter': 'lib/vue-router.min',
        'vueX': 'lib/vuex.min',
        'lang': 'lib/lang',

        'jqueryqrcode': 'lib/jqueryqrcode',
        'qrcode': 'lib/qrcode',
        'Cookie': 'lib/cookie',
        'clipboard': 'lib/clipboard.min',

        /*layui /static/admin/layuiadmin/layui/layui.js*/
        //'layui': ['lib/layuiadmin/layui/layui'],

        'layui': 'lib/layui'
    },
    shim: {
        jquery: {
          exports: '$'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        vueX: {
          deps: ['polyfill', 'promise']
        },
        clipboard: {
          exports: 'clipboardJS',
          deps: ['jquery']
        },
        layui: {deps: ['css!lib/layuiadmin/layui/css/layui.css', 'jquery']},
    },
/*      config: {
        text: {
          onXhr: function onXhr(xhr, url) {
            var storage = null;
            var data = null;
            if (window.caniuse) {
              storage = window.localStorage;
              data = JSON.parse(storage.getItem(url));
            }
            if (data && storage) {
              var nowTime = new Date().getTime() - data.time;
              if (nowTime < data.timeout) {
                return base64.tranCode.decode(data.data);
              } else {
                return false;
              }
            } else {
              return false;
            }
          },
          onXhrComplete: function onXhrComplete(xhr, url) {
            var storage = '';
            if (window.caniuse) {
              storage = window.localStorage;
            }
            var data = base64.tranCode.encode(xhr.responseText);
            if (storage) {
              // storage.setItem(url, JSON.stringify({ data: data, timeout: 30 * 24 * 60 * 60 * 1000, time: new Date().getTime() }));
            }
          }
        }
      }*/

  packages: [{
    name: 'component',
    location: 'component'
  }]
});
