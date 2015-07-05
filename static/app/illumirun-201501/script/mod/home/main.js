/* trace:src/app/illumirun-201501/script/mod/home/main.coffee */
define(['require', 'exports', 'module', 'app', 'skateboard', 'jquery', './body.tpl.html'], function(require, exports, module) {
(function() {
  var $, Mod, Skateboard, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  app = require('app');

  Skateboard = require('skateboard');

  $ = require('jquery');

  Mod = (function(superClass) {
    extend(Mod, superClass);

    function Mod() {
      this.showRules = bind(this.showRules, this);
      this.fileChange = bind(this.fileChange, this);
      return Mod.__super__.constructor.apply(this, arguments);
    }

    Mod.prototype.cachable = true;

    Mod.prototype.events = {
      'change .upload-btn': 'fileChange',
      'click .btn-rules': 'showRules'
    };

    Mod.prototype._bodyTpl = require('./body.tpl.html');

    Mod.prototype.resetFileInput = function() {
      $('.upload-btn input').remove();
      return $('<input type="file" capture="camera" accept="image/*" />').appendTo($('.upload-btn'));
    };

    Mod.prototype.fileChange = function(evt) {
      var URL, file, img, imgUrl;
      $('#audio1')[0].pause();
      $('#audio1')[0].play();
      URL = window.URL || window.webkitURL;
      file = evt.originalEvent.srcElement.files[0];
      imgUrl = URL.createObjectURL(file);
      img = new Image();
      img.onload = (function(_this) {
        return function() {
          var newImg;
          newImg = {
            file: file,
            url: imgUrl,
            width: img.naturalWidth,
            height: img.naturalHeight
          };
          Mod.img = newImg;
          $(Mod).trigger('imgchange', newImg);
          _this.resetFileInput();
          return Skateboard.core.view('/view/canvas');
        };
      })(this);
      return img.src = imgUrl;
    };

    Mod.prototype.showRules = function() {
      return require(['./dialog-main'], function(dialog) {
        return dialog.show();
      });
    };

    return Mod;

  })(Skateboard.BaseMod);

  module.exports = Mod;

}).call(this);

});

/* trace:src/app/illumirun-201501/script/mod/home/body.tpl.html */
define('./body.tpl.html', ['require', 'exports', 'module', "jquery", "app"], function(require, exports, module) {
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
            /* trace:src/app/illumirun-201501/script/mod/home/body.tpl.html */
            var $ = require("jquery");
            var app = require("app");
            /* trace:src/app/illumirun-201501/script/mod/home/body.scss */
            _$out_.push('<style type="text/css">.sb-mod.sb-mod--home { background-image: url(../../../image/bg-01.png); background-position: left top; background-repeat: no-repeat; background-size: cover; } .sb-mod.sb-mod--home .upload-btn { width: 33%; height: 21%; left: 34%; top: 60%; position: absolute; overflow: hidden; } .sb-mod.sb-mod--home .upload-btn input { position: absolute; left: 0; top: 0; width: 4000px; height: 4000px; margin: 0; padding: 0; overflow: hidden; opacity: 0; } .sb-mod.sb-mod--home .btn-rules { width: 33%; height: 6%; left: 34%; top: 84%; position: absolute; }</style><div class="body-inner"> &nbsp; <div class="upload-btn"> <input type="file" capture="camera" accept="image/*" /> </div> <button class="img-btn btn-rules">活动规则</button></div>');
        }
        return _$out_.join("");
    };
});