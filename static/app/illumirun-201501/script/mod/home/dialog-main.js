/* trace:src/app/illumirun-201501/script/mod/home/dialog-main.coffee */
define(['require', 'exports', 'module', 'app', 'skateboard', './dialog.tpl.html'], function(require, exports, module) {
(function() {
  var Skateboard, app, dialog, dialogTpl;

  app = require('app');

  Skateboard = require('skateboard');

  dialogTpl = require('./dialog.tpl.html');

  dialog = {
    show: function() {
      var el;
      el = $('.dialog');
      if (!el.length) {
        el = $(dialogTpl.render()).appendTo(document.body);
        $('.dialog__close', el).on('click', dialog.hide);
      }
      return el.fadeIn();
    },
    hide: function() {
      return $('.dialog').hide();
    }
  };

  module.exports = dialog;

}).call(this);

});

/* trace:src/app/illumirun-201501/script/mod/home/dialog.tpl.html */
define('./dialog.tpl.html', ['require', 'exports', 'module', "jquery", "app"], function(require, exports, module) {
    function $encodeHtml(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`/g, "&#96;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    }
    exports.render = function($data, $opt) {
        $data = $data || {};
        var _$out_ = [];
        var $print = function(str) {
            _$out_.push(str);
        };
        with ($data) {
            /* trace:src/app/illumirun-201501/script/mod/home/dialog.tpl.html */
            var $ = require("jquery");
            var app = require("app");
            /* trace:src/app/illumirun-201501/script/mod/home/dialog.scss */
            _$out_.push('<style type="text/css">.dialog { background-image: url(../../../image/dialog-bg.png); background-position: left top; background-repeat: no-repeat; background-size: cover; position: absolute; width: 288px; height: 270px; top: 25%; left: 50%; margin-left: -144px; } .dialog .dialog__close { width: 27px; height: 27px; position: absolute; bottom: 11px; right: 14px; }</style><div class="dialog"><button class="img-btn dialog__close">close</button></div>');
        }
        return _$out_.join("");
    };
});