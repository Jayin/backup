define(["require","exports","module","react","app","skateboard","./preview"],function(e,t,r){(function(){var t,n,o,a,c,i=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},s={}.hasOwnProperty;o=e("react"),c=e("app"),a=e("skateboard"),n=e("./preview"),t=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return i(t,e),t.prototype.cachable=!0,t.prototype.parentModNames={home:1,canvas:1},t.prototype.render=function(){return o.render(o.createElement(n,null),this.$(".sb-mod__body")[0])},t}(a.BaseMod),r.exports=t}).call(this)}),define("./preview",["require","exports","module","react","./body.css"],function(e,t,r){(function(){var t,n,o;n=e("react"),o=e("./body.css"),t=n.createClass({getInitialState:function(){return{clipData:"about:blank"}},componentDidMount:function(){return e(["../canvas/main"],function(e){return function(t){return $(t).on("clipchange",function(t,r){return e.setState({clipData:r})}),e.setState({clipData:t.clipData})}}(this))},render:function(){return n.createElement("div",{className:"body-inner"},n.createElement("style",{type:"text/css"},o.render()),n.createElement("div",{className:"preview"},n.createElement("img",{src:this.state.clipData})))}}),r.exports=t}).call(this)}),define("./body.css",["require","exports","module"],function(e,t,r){t.render=function(){var e=[];return e.push(".sb-mod--motion .preview { padding: 10px; text-align: center}"),e.join("")}});