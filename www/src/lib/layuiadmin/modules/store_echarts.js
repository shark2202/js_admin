/** layuiAdmin.std-v1.0.0 LPPL License By http://www.layui.com/admin/ */
;layui.define(function (e) {
    layui.use(["admin", "carousel"], function () {
        var e = layui.$, a = (layui.admin, layui.carousel), t = layui.element, i = layui.device();
        e(".layadmin-carousel").each(function () {
            var t = e(this);
            a.render({
                elem: this,
                width: "100%",
                arrow: "none",
                interval: t.data("interval"),
                autoplay: t.data("autoplay") === !0,
                trigger: i.ios || i.android ? "click" : "hover",
                anim: t.data("anim")
            })
        }), t.render("progress")
    }), layui.use(["carousel", "echarts"], function () {
        var e = layui.$, a = (layui.carousel, layui.echarts), t = [], i = storeOption,
            n = e("#LAY-index-normline").children("div"), l = function (e) {
                t[e] = a.init(n[e], layui.echartsTheme), t[e].setOption(i[e]), window.onresize = t[e].resize
            };
        if (n[0]) {
            l(0);
        }
    });
    e("store_echarts", {})
});