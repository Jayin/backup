require(["jquery","http://res.wx.qq.com/open/js/jweixin-1.0.0.js","app"],function(e,n,i){var a=function(){i.ajax.post({url:"web/sharing/increaseSharingFriends/54f308fbd4c6505329ee48e7",success:function(e){},error:function(e,n,i){}})},t=function(){i.ajax.post({url:"web/sharing/increaseSharingMoments/54f308fbd4c6505329ee48e7",success:function(e){},error:function(e,n,i){}})},c=location.href.split("#")[0];e(document).ready(function(){i.ajax.post({url:"web/bxn/weixin/signature",data:{url:c},timeout:5e3,error:function(){},success:function(e){n.config({debug:!1,appId:e.data.appId,timestamp:e.data.timestamp,nonceStr:e.data.nonceStr,signature:e.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]}),n.ready(function(){n.onMenuShareTimeline({title:"我为最爱的人奉上了 求婚之舞，快来见证我们的幸福时刻吧！",link:c,imgUrl:G.CDN_ORIGIN+"/static/app/bxn-201502/image/icon_share.jpg",success:function(){t()},cancel:function(){}}),n.onMenuShareAppMessage({title:"奉舞成婚",desc:"我为最爱的人奉上了 求婚之舞，快来见证我们的幸福时刻吧！",link:c,imgUrl:G.CDN_ORIGIN+"/static/app/bxn-201502/image/icon_share.jpg",type:"",dataUrl:"",success:function(){a()},cancel:function(){}})})}})})});