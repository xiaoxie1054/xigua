// JavaScript Document
$(document).ready(function(){
	/*好车推荐,车辆知识人车故事*/
	var recom=$(".content_goods_cart_top .top_recommend");
	var know=$(".content_goods_cart_top .top_know");
	var story=$(".content_goods_cart_top .top_story");
	
	var li_list1=$(".user_content .buy_content_li_list1");
	var li_list2=$(".user_content .buy_content_li_list2");
	var li_list3=$(".user_content .buy_content_li_list3");
	recom.hover(function(){
	 li_list1.show();
	  $(this).css({"border-bottom":"3px solid #005073"});
	  know.css({"border-bottom":"3px solid #8BBAD9"});
	  story.css({"border-bottom":"3px solid #8BBAD9"});
	  },function(){
	  li_list2.hide();li_list3.hide();
	   $(this).css({"border-bottom":"3px solid #005073"});
  	 });
		
	know.hover(function(){
		li_list2.show();li_list1.hide();li_list3.hide();
		recom.css({"border-bottom":"3px solid #8BBAD9"});
		$(this).css({"border-bottom":"3px solid #005073"});
		story.css({"border-bottom":"3px solid #8BBAD9"});
	  },function(){
		  li_list1.hide();li_list3.hide();
	   $(this).css({"border-bottom":"3px solid #005073"});
  	 });
	
	story.hover(function(){
		li_list3.show();li_list1.hide();li_list2.hide();
		recom.css({"border-bottom":"3px solid #8BBAD9"});
		know.css({"border-bottom":"3px solid #8BBAD9"});
		$(this).css({"border-bottom":"3px solid #005073"});
	  },function(){
	 li_list1.hide();li_list2.hide();
	   $(this).css({"border-bottom":"3px solid #005073"});
  	 });
	
	
	
	
	
	
	
});	