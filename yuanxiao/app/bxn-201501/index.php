
<!DOCTYPE html>
<html lang="ch">
<head>
<meta charset="utf-8" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache, must-revalidate" />
<meta http-equiv="expires" content="0">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="format-detection" content="telephone=no" />

<meta name="keywords" content="报喜鸟" />
<meta name="description" content="元宵－原来一笑" />
<title>元宵－原来一笑</title>
<link rel="stylesheet" href="style/basic.css">
<script src="scripts/jquery-1.7.1.min.js" type="text/javascript"></script>
<script src="scripts/load.js" type="text/javascript"></script>
</head>
<body>
<!-- trace:src/app/bxn-201501/index.html -->
<!-- trace:src/html/layout/layout.base.html -->
<script type="text/javascript">
var G = G || {
	DOMAIN: document.domain,
	ORIGIN: location.protocol + '//' + location.host,
	CGI_ORIGIN: location.protocol + '//' + location.host,
	CDN_ORIGIN: location.protocol + '//' + location.host,
	
	MD5_MAP: {"lib/async/main.js":"ab8c2ec0ca201f3365eb0c5fe7900919","lib/iscroll/main.js":"a7c22c38fa0b2b2a71586166c52f72b4","lib/jquery-2.1.3/main.js":"b17f6501a2401525a4f1547816aa5407","lib/parallax/main.js":"8dda6fef92ca334a501e9ac5ba937b27","lib/turn/main.js":"c2ab08cd1fe8e45735952b3cec0911da","lib/zepto-1.1.4/main.js":"b278405b6d022135da08f8444164614d"},

	IS_PROTOTYPE: false,
	
	pageTime: [new Date()]
};


</script>

<script type="text/javascript">
document.write([
	'<link rel="stylesheet" href="' + G.CDN_ORIGIN + '/yuanxiao/style/app/main.css?v=0aa791ccad71c394a03101d985262130" />'
].join(''));
</script>

<script type="text/javascript">
document.write([
	'<script type="text/javascript" src="' + G.CDN_ORIGIN + '/yuanxiao/script/lib/fastclick/fastclick.js?v=4504535a515ce269a8f3325225d81ff8"></s', 'cript>',
	'<script type="text/javascript" src="' + G.CDN_ORIGIN + '/yuanxiao/script/lib/yom/require-lite.js?v=264196d2fba0d537fc879eea896719c2"></s', 'cript>'
].join(''));
</script>

<script type="text/javascript">
FastClick.attach(document.body);
window.addEventListener('load', function() {
	document.body.className = document.body.className + ' loaded';
}, false);
</script>


<script type="text/javascript">
document.write([
	'<link rel="stylesheet" href="' + G.CDN_ORIGIN + '/yuanxiao/app/bxn-201501/style/' + (document.documentElement.clientWidth > 320 ? 'large' : 'small') + '/main.css" />'
].join(''));
</script>

<script type="text/javascript">
            $(document).ready(function() {
                    $.ajax({
                        url: "http://www.createcdigital.com:8080/wechat/sharing/54f308fbd4c6505329ee48e6.json",
                        type: "get",
                        success: function(response) {
							var joson = JSON.parse(JSON.stringify(response));
							$('#friendsCountIdentify').text(joson.data.friendsCount);
							$('#momentsCountIdentify').text(joson.data.momentsCount);
                            //$('.content').text(JSON.stringify(response));
                        }
                });

            });
			var friendsCountIncrease = function() {
                    $.ajax({
                        url:"http://www.createcdigital.com:8080/wechat/sharing/increaseSharingFriends/54f308fbd4c6505329ee48e6.json",
                        type: "post",
                        success: function(response) {
                            
                            //$(".content").text("put success");
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            //$(".content").text(textStatus);
                        }
                    });
                };
			var momentsCountIncrease = function() {
                    $.ajax({
                        url:"http://www.createcdigital.com:8080/wechat/sharing/increaseSharingMoments/54f308fbd4c6505329ee48e6.json",
                        type: "post",
                        success: function(response) {
                            
                            //$(".content").text("put success");
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            //$(".content").text(textStatus);
                        }
                    });
                };                
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?6b0968f2d2aa7fdf6841f57ec705bbda";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

<textarea class="content" id="friendsCountIdentify" style="display:none;"></textarea>
<textarea class="content1" id="momentsCountIdentify" style="display:none;"></textarea>
<div class="wrapper now-1">
	<div class="slides">
		<div class="slide slide-01">
			<div class="dl dl-5 dl-5-1"></div>
			<div class="dl dl-5 dl-5-2"></div>
			<div class="dl dl-5 dl-5-3"></div>
			<div class="dl dl-4 dl-4-1"></div>
			<div class="dl dl-4 dl-4-2"></div>
			<div class="dl dl-4 dl-4-3"></div>
			<div class="dl dl-3 dl-3-1"></div>
			<div class="dl dl-3 dl-3-2"></div>
			<div class="dl dl-3 dl-3-3"></div>
			<div class="dl dl-2 dl-2-1"></div>
			<div class="dl dl-2 dl-2-2"></div>
			<div class="dl dl-2 dl-2-3"></div>
			<div class="dl dl-2 dl-2-4"></div>
			<div class="dl dl-l"></div>
			<div class="dl dl-r"></div>
			<div class="dl"></div>
			<button class="img-btn open-btn" onclick="$('.slides').turn('next');">Open</button>
		</div>
		<div class="slide slide-02">
			<div class="head"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-03">
			<div class="bird-1"></div>
			<div class="bird-2"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-04">
			<div class="bird-1-1"></div>
			<div class="bird-1-2"></div>
			<div class="bird-2-1"></div>
			<div class="bird-2-2"></div>
			<div class="hand-1"></div>
			<div class="hand-2"></div>
			<div class="boy"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-05">
			<div class="man-1"></div>
			<div class="man-2"></div>
			<div class="qi"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-06">
			<div class="bird-1"></div>
			<div class="bird-2"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-07">
			<div class="deng-1"></div>
			<div class="deng-2"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-08">
			<div class="yun"></div>
			<div class="bird-1"></div>
			<div class="bird-2"></div>
			<div class="text"></div>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
			<button class="img-btn next-btn" onclick="$('.slides').turn('next');">next</button>
		</div>
		<div class="slide slide-09">
			<div class="card hide"></div>
			<div class="cover"></div>
			<div class="btn"></div>
			<button class="img-btn share-btn" onclick="$('.share-layer').show();">Share</button>
			<button class="img-btn replay-btn" onclick="$('.slides').turn('page', 1);">Replay</button>
			<button class="img-btn prev-btn" onclick="$('.slides').turn('previous');">previous</button>
		</div>
	</div>
</div>
<div class="share-layer">
	<div class="cover"></div>
	<div class="text">
		点击右上角<br />
		分享给好友<br />
		有机会赢得衬衫
	</div>
	<button class="img-btn close-btn" onclick="$('.share-layer').hide();">close</button>
</div>
<script type="text/javascript">
document.write([
	'<audio id="audio1" src="' + G.CDN_ORIGIN + '/yuanxiao/app/bxn-201501/image/bg.mp3" loop autoplay></audio>'
].join(''));
</script>
<button class="img-btn audio-btn" onclick="if($(this).hasClass('on')) {$('#audio1')[0].pause(); $(this).removeClass('on')} else {$('#audio1')[0].play(); $(this).addClass('on')}"></button>

<script type="text/javascript">
require(['jquery', 'turn'], function($, turn) {
	var wrapper = $('.wrapper');
	wh = $(window).height();
	bh = wrapper.height();
	//centralize the book
	if(wh > bh) {
		wrapper.css('marginTop', ((wh - bh) / 2) + 'px');
	}
	wrapper.show();

	//init the book slides
	$('.slides').turn({
		elevation: 10,
		duration: 1000,
		gradients: true,
		autoCenter: true,
		display: 'single'
	}).bind('turned', function(evt, page, view) {
		$('.wrapper').removeClass('now-1 now-2 now-3 now-4 now-5 now-6 now-7 now-8 now-9').addClass('now-' + page);
		//show the card
		if(page == 9) {
			$('.slide-09 .card').removeClass('hide');
		}
	});

	//loop frame
	(function loop(i, j) {
		if(i % j === 0) {
			var arr = [];
			for(var k = 1; k < j; k++) {
				arr.push('frame-' + k);
			}
			$('.slides').removeClass(arr.join(' '));
		} else {
			$('.slides').addClass('frame-' + i % j);
		}
		setTimeout(function() {
			loop(i + 1, j);
		}, 300);
	})(0, 8);

	//TODO: loading scene
}, function() {

});
</script>


<script>
require(['http://res.wx.qq.com/open/js/jweixin-1.0.0.js'], function(wx) {
	//var shareUrl = 'http://www.createcdigital.com/yuanxiao/app/bxn-201501/index.php'.split('#')[0]
	var shareUrl = location.href.split('#')[0];
	$(document).ready(function() {
		$.ajax({
				url:'http://www.createcdigital.com:8080/wechat/sharing/signWxshare/54f1b82a58f24d7d16c11e16.json',
				type:'post',
				data:JSON.stringify({url: shareUrl}),
				dataType:'json',
				contentType: "application/json;charset=utf-8",
				timeout:1000,
				error:function(){alert('Error');},
				success:function(result) {
					  wx.config({
					    debug: true,
					    appId: result.data.appId,
							timestamp: result.data.timestamp,
							nonceStr: result.data.nonceStr,
							signature: result.data.signature,
					    jsApiList: [
					      'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'
					    ]
					  });
					  wx.ready(function () {
					    // 在这里调用 API
					    wx.onMenuShareTimeline({
					        title: '888元报喜鸟衬衫时常出没,第'+document.getElementById('momentsCountIdentify').value+'个参与者友情提示!', // 分享标题        
					        link: shareUrl, // 分享链接
					        imgUrl: 'http://www.createcdigital.com/yuanxiao/app/bxn-201501/share.jpg', // 分享图标
					        success: function () { 
					            // 用户确认分享后执行的回调函数
					           momentsCountIncrease();
					        },
					        cancel: function () { 
					            // 用户取消分享后执行的回调函数
					           // $('.close-bt').click();
					        }
					    });
					    wx.onMenuShareAppMessage({
							
					        title: '元宵·原来一笑', // 分享标题        
					        desc: '元宵报喜!我是第'+document.getElementById('friendsCountIdentify').value+'个参与活动的人,价值888报喜鸟衬衫快点砸向我!',
					        link: shareUrl, // 分享链接
					        imgUrl: 'http://www.createcdigital.com/yuanxiao/app/bxn-201501/share.jpg', // 分享图标
					        type: '', // 分享类型,music、video或link，不填默认为link
					        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					        success: function () { 
					            // 用户确认分享后执行的回调函数
					           friendsCountIncrease();
					        },
					        cancel: function () { 
					            // 用户取消分享后执行的回调函数
					            
					        }
					    });
					  });
				}
			})
		  });
	});	
</script>
</body>
</html>
