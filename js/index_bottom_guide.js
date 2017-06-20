// JavaScript Document
$(document).ready(function(){
	/*购物流程，交易条例，过户流程，联系客服*/
	
	
	$(".txt_pic .pic_pic a").hover(function(){
		$(".txt_pic .pic_t").css({"display":"block"});
		
	  },function(){
		$(".txt_pic .pic_t").css({"display":"none"});
  	 });
	/*点击显示*/
	$(".nav_about .li1 a").on('click', function() {
		  $(".content_position .pos").text('购物流程');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li1").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top1").show();
		  $(".user_content_con_c .about_top1").siblings().hide();
	});
	$(".nav_about .li2 a").on('click', function() {
		$(".content_position .pos").text('交易条例');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li2").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top2").show();
		  $(".user_content_con_c .about_top2").siblings().hide();
	});
	$(".nav_about .li3 a").on('click', function() {
		$(".content_position .pos").text('过户流程');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li3").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top3").show();
		  $(".user_content_con_c .about_top3").siblings().hide();
	});
	
	$(".nav_about .li4 a").on('click', function() {
		$(".content_position .pos").text('常见问题');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li4").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top4").show();
		  $(".user_content_con_c .about_top4").siblings().hide();
	});
});	