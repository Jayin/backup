/* trace:src/app/illumirun-201501/script/mod/motion/main.coffee */
define(['require', 'exports', 'module', 'react', 'app', 'skateboard', './preview'], function(require, exports, module) {
(function() {
  var Mod, Preview, React, Skateboard, app,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  React = require('react');

  app = require('app');

  Skateboard = require('skateboard');

  Preview = require('./preview');

  Mod = (function(superClass) {
    extend(Mod, superClass);

    function Mod() {
      return Mod.__super__.constructor.apply(this, arguments);
    }

    Mod.prototype.cachable = true;

    Mod.prototype.parentModNames = {
      'home': 1,
      'canvas': 1
    };

    Mod.prototype.render = function() {
      return React.render(React.createElement(Preview, null), this.$('.sb-mod__body')[0]);
    };

    return Mod;

  })(Skateboard.BaseMod);

  module.exports = Mod;

}).call(this);

});

/* trace:src/app/illumirun-201501/script/mod/motion/preview.coffee */
define('./preview', ['require', 'exports', 'module', 'react', './body.scss'], function(require, exports, module) {
(function() {
  var Preview, React, bodyStyle;

  React = require('react');

  bodyStyle = require('./body.scss');

  Preview = React.createClass({
    getInitialState: function() {
      return {
        clipData: 'about:blank'
      };
    },
    componentDidMount: function() {
      return require(['../canvas/main'], (function(_this) {
        return function(CanvasMod) {
          $(CanvasMod).on('clipchange', function(evt, clipData) {
            return _this.setState({
              clipData: clipData
            });
          });
          return _this.setState({
            clipData: CanvasMod.clipData
          });
        };
      })(this));
    },
    render: function() {
      return React.createElement("div", {
        "className": "body-inner"
      }, React.createElement("style", {
        "type": "text/css"
      }, bodyStyle.render()), React.createElement("div", {
        "className": "preview"
      }, React.createElement("img", {
        "src": this.state.clipData
      })));
    }
  });

  module.exports = Preview;

}).call(this);

});

/* trace:src/app/illumirun-201501/script/mod/motion/body.scss */
define('./body.scss', ['require', 'exports', 'module'], function(require, exports, module) {
    exports.render = function() {
        var _$out_ = [];
        /* trace:src/app/illumirun-201501/script/mod/motion/body.scss */
        _$out_.push(".sb-mod--motion .preview { padding: 10px; text-align: center; } .sb-mod--motion .preview img { width: 164px; }");
        return _$out_.join("");
    };
});