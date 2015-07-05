$(function(){
	var beforeDate = new Date();
	//页面加载
	var wwindow = $(window),
		$doc = $(document),
		$body = $("body"),
	    winWidth = wwindow.width(),
		docWidth = $doc.width(),
		docHeight = $doc.height(),
		winHeight = wwindow.height(),	
		speed = 0;
	$body.append("<div  id=\"pageLoad\" style=\"width:"+ docWidth +"px;height:"+ docHeight +"px;\"><div style=\"left:"+ (winWidth-250)*0.5 +"px;top:"+ (winHeight-196)*0.5 +"px;\"><a></a><samp><em></em></samp></div></div>");

	var afterDate = new Date(),
	    pagePreLoad = (afterDate - beforeDate),
	    time = 40/pagePreLoad,
		preImgLen = 35/pagePreLoad,
		n = 0,
		m = 0,
		play = setInterval(function(){
			if(Number(n) >= 100 && Number(m) >= 230) {
				clearInterval(play); 
				n = 0;
				m = 230;			
				//页面加载完毕后执行(主线)
				setTimeout(function(){
					$("#pageLoad").fadeOut(200,function(){
						$(this).remove();
					});		
			
				},200);
			};		
			$("#pageLoad").find("samp").css("width",m);		
			
			n += time;
			m += preImgLen;
		},100);
});