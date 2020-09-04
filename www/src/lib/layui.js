define(function (require) {
    require('./lib/layuiadmin/layui/layui');

    var layui =  window.layui;
    layui.config({
        base: 'src/lib/layuiadmin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
    })/*.use(['index', 'autocomplete', 'element', 'laytpl','form','layer','table'], function(){
        return;
    })*/;

    return layui;
});