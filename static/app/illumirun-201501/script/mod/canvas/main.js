/* trace:src/app/illumirun-201501/script/mod/canvas/main.coffee */
define(['require', 'exports', 'module', 'app', 'skateboard', 'mega-pix-image', 'exif', 'hammer', 'jquery', './body.tpl.html'], function(require, exports, module) {
(function() {
  var $, EXIF, Hammer, MegaPixImage, Mod, Skateboard, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  app = require('app');

  Skateboard = require('skateboard');

  MegaPixImage = require('mega-pix-image');

  EXIF = require('exif');

  Hammer = require('hammer');

  $ = require('jquery');

  Mod = (function(superClass) {
    extend(Mod, superClass);

    function Mod() {
      this.confirm = bind(this.confirm, this);
      this.changeFrame = bind(this.changeFrame, this);
      this.imgChange = bind(this.imgChange, this);
      this.touchEnd = bind(this.touchEnd, this);
      this.touchMove = bind(this.touchMove, this);
      this.touchStart = bind(this.touchStart, this);
      return Mod.__super__.constructor.apply(this, arguments);
    }

    Mod.prototype.cachable = true;

    Mod.prototype.events = {
      'touchstart canvas': 'touchStart',
      'touchmove canvas': 'touchMove',
      'touchend canvas': 'touchEnd',
      'click .btn-confirm': 'confirm',
      'click .frame-btns__btn': 'changeFrame'
    };

    Mod.prototype._bodyTpl = require('./body.tpl.html');

    Mod.prototype.CONTEXT_W = 640;

    Mod.prototype.CONTEXT_H = 960;

    Mod.prototype.ENABLE_ROTATE = false;

    Mod.prototype.frame = 'shidai';

    Mod.prototype.selectTemplateCode = 'sd';

    Mod.prototype._afterFadeIn = function() {
      return require(['../home/main'], (function(_this) {
        return function(HomeMod) {
          if (!HomeMod.img) {
            return Skateboard.core.view('/view/home', {
              replaceState: true
            });
          }
        };
      })(this));
    };

    Mod.prototype.render = function() {
      Mod.__super__.render.apply(this, arguments);
      $('#audio1')[0].pause();
      $('#audio1')[0].play();
      this.canvas = this.$('canvas')[0];
      this.context = this.canvas.getContext('2d');
      return require(['../home/main'], (function(_this) {
        return function(HomeMod) {
          if (HomeMod.img) {
            _this.resetImg(HomeMod.img);
          } else {
            Skateboard.core.view('/view/home', {
              replaceState: true
            });
          }
          $(HomeMod).on('imgchange', _this.imgChange);
          return _this.initPinch();
        };
      })(this));
    };

    Mod.prototype.initPinch = function() {
      var mc, pinch, preDeg, rotate, toRef, tp1, tr1;
      toRef = null;
      tp1 = null;
      tr1 = null;
      mc = new Hammer.Manager(this.canvas);
      pinch = new Hammer.Pinch();
      rotate = new Hammer.Rotate();
      if (this.ENABLE_ROTATE) {
        pinch.recognizeWith(rotate);
      }
      mc.add([pinch, rotate]);
      mc.on('pinchstart', (function(_this) {
        return function(evt) {
          _this.imgWhPinch = {
            w: _this.imgWh.w,
            h: _this.imgWh.h
          };
          _this.poPinch = {
            x: _this.po.x,
            y: _this.po.y
          };
          return tp1 = new Date().getTime();
        };
      })(this));
      mc.on('pinchmove', (function(_this) {
        return function(evt) {
          var tp2;
          tp2 = new Date().getTime();
          if (tp2 - tp1 > 300) {
            tp1 = tp2;
            return _this.pinchDraw(evt.scale);
          }
        };
      })(this));
      mc.on('pinchend', (function(_this) {
        return function(evt) {
          return _this.pinchDraw(evt.scale);
        };
      })(this));
      preDeg = 0;
      mc.on('pinchstart', (function(_this) {
        return function(evt) {
          _this.rotateDeg = _this.deg;
          tr1 = new Date().getTime();
          return preDeg = 0;
        };
      })(this));
      mc.on('rotatemove', (function(_this) {
        return function(evt) {
          var tr2;
          tr2 = new Date().getTime();
          if (tr2 - tr1 > 300 && Math.abs(evt.rotation - preDeg) < 90) {
            tr1 = tr2;
            preDeg = evt.rotation;
            _this.deg = (_this.rotateDeg + evt.rotation) % 360;
            return _this.draw();
          }
        };
      })(this));
      return mc.on('rotateend', (function(_this) {
        return function(evt) {
          if (Math.abs(evt.rotation - preDeg) < 90) {
            _this.deg = (_this.rotateDeg + evt.rotation) % 360;
            return _this.draw();
          }
        };
      })(this));
    };

    Mod.prototype.pinchDraw = function(scale) {
      this.imgWh = {
        w: this.imgWhPinch.w * scale,
        h: this.imgWhPinch.h * scale
      };
      this.po = {
        x: this.CONTEXT_W / 2 + (this.poPinch.x - this.CONTEXT_W / 2) * scale,
        y: this.CONTEXT_H / 2 + (this.poPinch.y - this.CONTEXT_H / 2) * scale
      };
      return this.draw();
    };

    Mod.prototype.touchStart = function(evt) {
      var touch, touches;
      touches = evt.originalEvent.targetTouches;
      if (touches.length === 1) {
        touch = touches[0];
        return this.movePt = {
          x: touch.clientX,
          y: touch.clientY
        };
      } else {
        return this.movePt = null;
      }
    };

    Mod.prototype.touchMove = function(evt) {
      var touch, touches;
      touches = evt.originalEvent.targetTouches;
      if (touches.length === 1 && this.movePt) {
        evt.preventDefault();
        touch = touches[0];
        this.po.x = this.po.x + touch.clientX - this.movePt.x;
        this.po.y = this.po.y + touch.clientY - this.movePt.y;
        this.movePt = {
          x: touch.clientX,
          y: touch.clientY
        };
        return this.draw();
      } else {
        return this.movePt = null;
      }
    };

    Mod.prototype.touchEnd = function(evt) {
      return this.movePt = null;
    };

    Mod.prototype.imgChange = function(evt, newImg) {
      return this.resetImg(newImg);
    };

    Mod.prototype.changeFrame = function(evt) {
      this.frame = $(evt.target).data('frame');
      this.selectTemplateCode = $(evt.target).data('value');
      return this.draw();
    };

    Mod.prototype.resetImg = function(newImg) {
      app.ajax.showLoading();
      this.context.clearRect(0, 0, this.CONTEXT_W, this.CONTEXT_H);
      return setTimeout((function(_this) {
        return function() {
          app.ajax.showLoading();
          _this.rawImg = newImg;
          _this.po = {
            x: _this.CONTEXT_W / 2,
            y: _this.CONTEXT_H / 2
          };
          _this.img = new Image();
          _this.imgWh = {
            w: newImg.width * _this.CONTEXT_H / newImg.height,
            h: _this.CONTEXT_H
          };
          _this.img.onload = function() {
            return EXIF.getData(_this.img, function() {
              var URL, orientation;
              URL = window.URL || window.webkitURL;
              URL.revokeObjectURL(_this.rawImg.url);
              orientation = EXIF.getTag(_this.img, 'Orientation');
              if (orientation === 3) {
                _this.deg = 180;
              } else if (orientation === 6) {
                _this.deg = 90;
              } else if (orientation === 8) {
                _this.deg = -90;
              } else {
                _this.deg = 0;
              }
              _this.draw();
              return app.ajax.hideLoading();
            });
          };
          return _this.img.src = newImg.url;
        };
      })(this), 500);
    };

    Mod.prototype.drawImg = function() {
      var context;
      context = this.context;
      context.save();
      context.translate(this.po.x, this.po.y);
      if (this.deg) {
        context.rotate(this.deg * Math.PI / 180);
      }
      MegaPixImage.renderImageToCanvasContext(this.img, context, {
        x: -this.imgWh.w / 2,
        y: -this.imgWh.h / 2,
        width: this.imgWh.w,
        height: this.imgWh.h,
        doSquash: this.rawImg.file.type === 'image/jpeg'
      });
      return context.restore();
    };

    Mod.prototype.drawFrame = function() {
      var context, maskImg;
      context = this.context;
      context.save();
      context.globalAlpha = 1;
      maskImg = $('#frame-' + this.frame)[0];
      context.drawImage(maskImg, 0, 0, this.CONTEXT_W, this.CONTEXT_H);
      return context.restore();
    };

    Mod.prototype.drawQRCode = function() {
      var context, img_qr_code;
      context = this.context;
      context.save();
      img_qr_code = $('#qr_code')[0];
      context.drawImage(img_qr_code, 0, 0, img_qr_code.width, img_qr_code.height, this.CONTEXT_W - 100, this.CONTEXT_H - 100, 100, 100);
      return context.restore();
    };

    Mod.prototype.draw = function() {
      this.context.clearRect(0, 0, this.CONTEXT_W, this.CONTEXT_H);
      this.drawImg();
      this.drawFrame();
      return this.drawQRCode();
    };

    Mod.prototype.confirm = function() {
      Mod.clipData = this.canvas.toDataURL();
      $(Mod).trigger('clipchange', Mod.clipData);
      return app.ajax.post({
        url: 'web/run/design',
        data: {
          imgData: Mod.clipData,
          templateCode: this.selectTemplateCode
        },
        success: (function(_this) {
          return function(res) {
            if (res.code === 0) {
              return location.href = "/static/app/illumirun-201501/share.html?designId=" + res.data.designId + "&templateCode=" + _this.selectTemplateCode;
            } else {
              return alert(res.code + ': ' + res.msg);
            }
          };
        })(this),
        error: function() {
          return alert('系统繁忙，请您稍后重试。');
        }
      });
    };

    Mod.prototype.destroy = function() {
      Mod.__super__.destroy.apply(this, arguments);
      return require(['../home/main'], (function(_this) {
        return function(HomeMod) {
          return $(HomeMod).off('imgchange', _this.imgChange);
        };
      })(this));
    };

    return Mod;

  })(Skateboard.BaseMod);

  module.exports = Mod;

}).call(this);

});

/* trace:src/app/illumirun-201501/script/mod/canvas/body.tpl.html */
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
            /* trace:src/app/illumirun-201501/script/mod/canvas/body.tpl.html */
            var $ = require("jquery");
            var app = require("app");
            /* trace:src/app/illumirun-201501/script/mod/canvas/body.scss */
            _$out_.push('<style type="text/css">body.sb-mod--canvas { background-color: #ff0082; }.sb-mod.sb-mod--canvas { background-image: url(../../../image/bg-02.png); background-position: left top; background-repeat: no-repeat; background-size: cover; } .sb-mod.sb-mod--canvas canvas { position: absolute; top: 14%; left: 21%; width: 62%; height: 58%; } .sb-mod.sb-mod--canvas .btn-reset { width: 20%; height: 12.4%; left: 0; top: 0; position: absolute; } .sb-mod.sb-mod--canvas .btn-confirm { width: 20%; height: 12.4%; right: 0; top: 0; position: absolute; } .sb-mod.sb-mod--canvas .frame-btns { text-align: center; position: absolute; left: 0; bottom: 8%; height: 10%; width: 100%; } .sb-mod.sb-mod--canvas .frame-btns__btn { width: 20%; height: 100%; }</style><div class="body-inner"><canvas width="640" height="960">Your browser does not support HTML5 Canvas.</canvas><a class="img-btn btn-reset" href="/view/home">重新选图</a> <button class="img-btn btn-confirm">确定使用</button> <div class="frame-btns"><button class="img-btn frame-btns__btn" data-frame="shidai" data-value="sd">时代</button><button class="img-btn frame-btns__btn" data-frame="zuanshi" data-value="zs">钻石</button><button class="img-btn frame-btns__btn" data-frame="modeng" data-value="md">摩登</button><button class="img-btn frame-btns__btn" data-frame="haiyang" data-value="hy">海洋</button><button class="img-btn frame-btns__btn" data-frame="jiqing" data-value="jq">激情</button></div><div style="display:none"><img id="qr_code" src="../../../image/Illumirun_wechat_QR_code.jpg" height="258" width="258"></div></div>');
        }
        return _$out_.join("");
    };
});