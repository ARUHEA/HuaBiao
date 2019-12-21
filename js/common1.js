$(function () {
	//加载公用头尾部
	$(document).ready(function () {
		$('.xq-header').load('header.html');
		$('.xq-footer').load('footer.html');
	});

	$('.floatbar-top').click(function () {
		function scrollTo(ele, speed) {
			if (!speed) speed = 800;
			if (!ele) {
				$("html,body").animate({
					scrollTop: 0
				}, speed);
			} else {
				if (ele.length > 0) $("html,body").animate({
					scrollTop: $(ele).offset().top - 76
				}, speed);
			}
			return false;
		};
		scrollTo();
	});

	(function () {
		var btn = document.getElementById('testOpen');
		btn.onclick = function () {
			window.open('http://p.qiao.baidu.com/cps/chat?siteId=14076724&userId=29269835',
				'windowForBridgeIM',
				'left=100,top=200,width=480,height=580,location= no, resizable = yes, status = no, toolbar = no, menubar =no')
		}
	}())
});






