// JavaScript Document
/*主体内容部分车型选区*/
$(document).ready(function(){
  $(".index_main_car_type").on('click', function() {
		  $(".index_main_car_list").show(100);
	});
	/*按下任何地方隐藏*/
	$("body").on('click', function() {
		  $(".index_main_car_list").hide();
	});
/*主体内容部分品牌更多显示*/	
	var timeout = '';
    $('.index_main_cate2').mouseover(function(){  //鼠标悬停400ms就显示,
        timeout = setTimeout(function(){
           $(".index_main_csign_more").show();                              
        },400);                  
    }); 
	// 
	 $('.index_main_cate2').mouseout(function(){
		  clearTimeout(timeout);    //鼠标不悬停,就清除                   
	  });
	  
	  $(".index_main_csign_xting_jingguo").hover(function(){
			$(".index_main_csign_more").show();//从右边更过列别到左边时，经过这个右边还显示 
		  },function(){
		   	  
		 });   
	//
	 $(".index_main_cate2").hover(function(){
		//移过不显示，上面显示
	  },function(){
	   $(".index_main_csign_more").hide();
	   $(".index_main_csign_xting_jingguo").hide();  
  	 });
	//
  $(".index_main_csign_more").hover(function(){
	  $(".index_main_csign_more").show();
	   $(".index_main_csign_xting_jingguo").show();//从右边更过列别到左边时，经过这个右边还显示
	  },function(){
           $(".index_main_csign_more").hide();
		   $(".index_main_csign_xting_jingguo").hide(); //可以设置为离开右边，进左边它不隐藏                            
  });
														 /*$(".index_main_csign_xting_jingguo").hover(function(){
															$(".index_main_csign_xting_jingguo").show(); 
														  },function(){
															  
														 });
														 $(".index_main_csign_xting_jingguo").hide(); */ 
   /*index_content_con内容车的遇到边框*/
   /*怎么在jQuery代码中使用each循环*/
  $("div[class^='index_content_con_c']").each(function(i){
	  $(".index_content_con_c"+i).hover(function(){
		$(".index_content_con_c"+i).css("border","2px solid #0B6FB0");
		},function(){
		 $(".index_content_con_c"+i).css("border","2px solid rgba(11,111,176,0)");                          
	});
  });
   /*}*/
   
   
   /*index_content_con__猜你喜欢*/
	var con1=$(".index_content_con1");
	$(".index_content_nav_like a").hover(function(){
	 con1.show();con2.hide();con3.hide();
	  $(".index_content_nav_like a").css({"background-color":"#0A6089"});
	  $(".index_content_nav_newest a").css({"background-color":"#0B6FB0"});
	  $(".index_content_nav_new a").css({"background-color":"#0B6FB0"});
	  },function(){
	   con2.hide();con3.hide();
	   $(".index_content_nav_like a").css({"background-color":"#0A6089"});
  	 });
	var con2=$(".index_content_con2");
	$(".index_content_nav_newest a").hover(function(){
	 con2.show();con1.hide();con3.hide();
	 $(".index_content_nav_like a").css({"background-color":"#0B6FB0"});
	 $(".index_content_nav_newest a").css({"background-color":"#0A6089"});
	  $(".index_content_nav_new a").css({"background-color":"#0B6FB0"});
	  },function(){
	   con1.hide();con3.hide();
	   $(".index_content_nav_newest a").css({"background-color":"#0A6089"});
  	 });
	 var con3=$(".index_content_con3");
	$(".index_content_nav_new a").hover(function(){
	 con3.show();con1.hide();con2.hide();
	 $(".index_content_nav_like a").css({"background-color":"#0B6FB0"});
	  $(".index_content_nav_newest a").css({"background-color":"#0B6FB0"});
	  $(".index_content_nav_new a").css({"background-color":"#0A6089"});
	  },function(){
	   con1.hide();con2.hide();
	    $(".index_content_nav_new a").css({"background-color":"#0A6089"});
  	 });
	
});

