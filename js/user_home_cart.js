// JavaScript Document
$(document).ready(function(){
	
	
	
	/*点击选项，同意注册协议*/
	$(window).scroll(function () {
	  if ($(window).scrollTop()<=1000) {
	  $(".content_goods_cart_con_money").css({"position":"fixed","bottom":"-1px"});
	  }else{
	  
	  $(".content_goods_cart_con_money").css({"position":"inherit"});
	  }
	});	
	
	
	
	
	
	
	
	
});	