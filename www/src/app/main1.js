define(/*['require','jquery','backbone','underscore','css!view/main1/index.css','text!view/main1/index.tpl'],*/function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1'),
        backbone = require('backbone'),
        underscore = require('underscore'),
        css = require('css!view/main1/index.css'),
        tpl = require('text!view/main1/index.tpl');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());

        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>')
            .append(tpl);
    });
});
