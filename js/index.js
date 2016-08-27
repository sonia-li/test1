/* 
* @Author: Administrator
* @Date:   2015-07-13 10:07:37
* @Last Modified by:   Administrator
* @Last Modified time: 2016-01-21 14:58:05
*/

$(document).ready(function() {
	/*直通车下拉框*/
	$(".top ul.fr li.top-more-game").hover(function() {
		$(this).children('.more-game-pop').stop().fadeIn(500);
	}, function() {
		$(this).children('.more-game-pop').stop().fadeOut(500);
	});
	/*直通车下拉框Tab切换*/
	$(".more-game-cont .more-game-hd ol li").click(function(event) {
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents(".more-game-hd").siblings('.more-game-bd').children('li').eq($(this).index()).show().siblings('li').hide();
	});
	/*论坛首页导航*/
	/*$(".nav-wrap ul.nav li").click(function(event) {
		$(this).addClass('cur').siblings('li').removeClass('cur');
	});*/
	/*搜索下拉框*/
	$(".header-wrap .search-wrap .search .type").hover(function() {
		$(this).children('.type-drop').show();
	}, function() {
		$(this).children('.type-drop').hide();
	});
	$(".header-wrap .search-wrap .search .type .type-drop ul li a.post").click(function(event) {
		$(this).parents(".type-drop").hide();
		$(this).parents(".type-drop").siblings('.game-txt').text("帖子");
	});
	$(".header-wrap .search-wrap .search .type .type-drop ul li a.user").click(function(event) {
		$(this).parents(".type-drop").hide();
		$(this).parents(".type-drop").siblings('.game-txt').text("用户");
	});
	/*搜索中文本框输入的效果*/
	function search_keyword(){
		if($(".header-wrap .search-wrap .search input.intxt").val()==null||$(".header-wrap .search-wrap .search input.intxt").val()==""){
			$(".header-wrap .search-wrap .search .keyword-drop").hide();
		}else{
			$(".header-wrap .search-wrap .search .keyword-drop").show();
		}
	}
	$(".header-wrap .search-wrap .search input.intxt").keyup(function(event) {
		search_keyword();
	});
	$(".header-wrap .search-wrap .search input.intxt").on('blur change', function(event) {
		event.preventDefault();
		search_keyword();
	});
	/*下拉框*/
	$(".header-wrap dl.header dd ul.header-ul li .head-box").hover(function() {
		$(this).children('.my-wrap').show();
	}, function() {
		$(this).children('.my-wrap').hide();
	});
	$(".header-wrap dl.header dd ul.header-ul li .head-box2").hover(function() {
		$(this).addClass('hov').children('.my-wrap2').show();
	}, function() {
		$(this).removeClass('hov').children('.my-wrap2').hide();
	});
	/*按钮变色*/
	$("table tr td input.btn").hover(function() {
		$(this).css("background","#f8841d");
	}, function() {
		$(this).css("background","#fa7600");
	});
	/*banner*/
	bbs_lunboleft(1000,3000);
	var $key=0;
	function bbs_lunboleft(picspeed,timerspeed){
		$(".notice-wrap .bbs-banner ul.bbs-banner-ul li:first").clone().appendTo($(".notice-wrap .bbs-banner ul.bbs-banner-ul"));
				var timer = setInterval(autoplay,timerspeed);
				function autoplay(){
					if(!$(".notice-wrap .bbs-banner ul.bbs-banner-ul").is(":animated")){
						if($key < $(".notice-wrap .bbs-banner ul.bbs-banner-ul li").length-2){
							$key++;
							num = -$key*$(".notice-wrap .bbs-banner ul.bbs-banner-ul li").width();
							$(".notice-wrap .bbs-banner ul.bbs-banner-ul").stop().animate({"left":num},picspeed);
						}else{
							$key = 0;
							$(".notice-wrap .bbs-banner ul.bbs-banner-ul").stop().animate({"left":-($(".notice-wrap .bbs-banner ul.bbs-banner-ul li").length-1)*$(".notice-wrap .bbs-banner ul.bbs-banner-ul li").width()},picspeed,function(){
								$(".notice-wrap .bbs-banner ul.bbs-banner-ul").css("left",0);
							});
						}
						$(".notice-wrap .bbs-banner ol.bbs-banner-ol li").eq($key).addClass("cur").siblings().removeClass("cur");
					}
				}
				/*左右箭头显示隐藏*/
				$(".notice-wrap .bbs-banner").hover(function() {
					clearInterval(timer);
					timer = null;
				}, function() {
					clearInterval(timer);
					timer = setInterval(autoplay,timerspeed);
				});
				/*小圆点业务*/
				$(".notice-wrap .bbs-banner ol.bbs-banner-ol li").mouseenter(function(event) {
					$key=$(this).index();
					num = -$key*$(".notice-wrap .bbs-banner ul.bbs-banner-ul li").width();
					$(".notice-wrap .bbs-banner ul.bbs-banner-ul").stop().animate({"left":num},picspeed);
					$(".notice-wrap .bbs-banner ol.bbs-banner-ol li").eq($key).addClass("cur").siblings().removeClass("cur");
				});
	}
	/*游戏专区*/
	$(".bbs-game-wrap ul.bbs-game-ul li").hover(function() {
		$(this).css({
			"padding": "0",
			"border": "1px solid #ccc"
		});
	}, function() {
		$(this).css({"border":"0","padding":"1px"});
	});
	/*最新开服*/
	$(".bbs-newserv-wrap .bbs-game-body table.bbs-game-tab tbody tr").hover(function() {
		$(this).addClass('bg-gray').siblings().removeClass('bg-gray');
	}, function() {
		$(".bbs-newserv-wrap .bbs-game-body table.bbs-game-tab tbody tr").removeClass('bg-gray');
	});

});