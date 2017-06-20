// JavaScript Document
$(document).ready(function(){
	/*关于西瓜，加入我们，联系我们*/
	
	
	$(".txt_pic .pic_pic a").hover(function(){
		$(".txt_pic .pic_t").css({"display":"block"});
		
	  },function(){
		$(".txt_pic .pic_t").css({"display":"none"});
  	 });
	/*点击显示*/
	
	
	
	$(".nav_about .li1 a").on('click', function() {
		  $(".content_position .pos").text('售后政策');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li1").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top1").show();
		  $(".user_content_con_c .about_top1").siblings().hide();
	});
	$(".nav_about .li2 a").on('click', function() {
		$(".content_position .pos").text('退款说明');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li2").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top2").show();
		  $(".user_content_con_c .about_top2").siblings().hide();
	});
	$(".nav_about .li3 a").on('click', function() {
		$(".content_position .pos").text('取消订单');
		  $(this).css('background','#8BBAD9');
		  $(".nav_about .li3").siblings().children('a').css('background','rgba(139,186,217,0.4)');
		  $(".user_content_con_c .about_top3").show();
		  $(".user_content_con_c .about_top3").siblings().hide();
	});
});	