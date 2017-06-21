// JavaScript Document
$(document).ready(function(){

/*固定定位*/
	$(window).scroll(function () {
	  if ($(window).scrollTop()>=1060&&$(window).scrollTop()<=7500) {
		$(".details_content_top1 a").css({"color":"#fff"});
	  	$(".details_content_top1").css({"position":"fixed","bottom":"-1px","background-color":"#0B6FB0","display":"block"});/*rgba(139,186,217,1)*/

	  }else{
		    $(".details_content_top1 a").css({"color":"#333"});
	  		$(".details_content_top1").css({"position":"inherit","background-color":"#fff","display":"none"});
	  }
	});	
	$(".details_content_top .top_info").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_info").css({"background-color":"#005073"});
	});	
	$(".details_content_top .top_pic").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_pic").css({"background-color":"#005073"});
	});
	$(".details_content_top .top_report").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_report").css({"background-color":"#005073"});
	});
	$(".details_content_top .top_parameter").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_parameter").css({"background-color":"#005073"});
	});	
	$(".details_content_top1 .top_info").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_info").css({"background-color":"#005073"});
	});	
	$(".details_content_top1 .top_pic").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_pic").css({"background-color":"#005073"});
	});
	$(".details_content_top1 .top_report").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_report").css({"background-color":"#005073"});
	});
	$(".details_content_top1 .top_parameter").click(function () {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_parameter").css({"background-color":"#005073"});
	});
	
/*	if ($(window).scrollTop()>=3000&&$(window).scrollTop()<=7200) {
		$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
		$(".details_content_top1 .top_parameter").css({"background-color":"#005073"});

	  }else{
		
	  }*/
	//滚动条滚动时触发
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop>=1200){
			$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
			$(".details_content_top1 .top_pic").css({"background-color":"#005073"});	
		}else{
			$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
			$(".details_content_top1 .top_info").css({"background-color":"#005073"});	
		}
		if(osTop>=4990){
			$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
			$(".details_content_top1 .top_report").css({"background-color":"#005073"});	
		}else{}
		if(osTop>=7120){
			$(".details_content_top1 .top_cart").css({"background-color":"#0B6FB0"});
			$(".details_content_top1 .top_parameter").css({"background-color":"#005073"});	
		}else{}
	}
	/*点击上面的进行选择*/						
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");/*当按下一个dd时给它增加class，然后删除它的siblings()同胞class元素*/
		if ($(this).hasClass("select-all")) {/*当点击select-all（全部）时，hasClass()检查是否包含select-all类*/
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();/*复制按下的这个dd*/
			if ($("#selectA").length > 0) {/*如果按下时，有这个类，那就改变它(a)的html*/
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisA.attr("id", "selectA"));
				/*克隆这个按下的dd添加id属性，然后追加到这个select-result类下的dl    attr属性*/
			}
		}
	});
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				/*$(".select-result dl").append(copyThisB.attr("id", "selectB"));*/
				$(".select-result .select-noo").before(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisC.attr("id", "selectC"));
			}
		}
	});
	
	$("#select4 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectD").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectD").length > 0) {
				$("#selectD a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisC.attr("id", "selectD"));
			}
		}
	});
	
	$("#select5 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectE").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectE").length > 0) {
				$("#selectE a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisC.attr("id", "selectE"));
			}
		}
	});
	
	$("#select6 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectF").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectF").length > 0) {
				$("#selectF a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisC.attr("id", "selectF"));
			}
		}
	});
	
	$("#select7 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectH").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectH").length > 0) {
				$("#selectH a").html($(this).text());
			} else {
				$(".select-result .select-noo").before(copyThisC.attr("id", "selectH"));
			}
		}
	});
	
	/*其他选项*/
	$(".select8_pai1 a").click(function () {
			$(".select8_pai span").text($(this).text());/*替换字体*/
			$(".select8_pai span").css({"color":"#0574BF"});/*改变字体颜色*/
			if ($("#selectJ").length > 0) {
				$("#selectJ a").html($(this).text());
			} else {
				$(".select-result .select-noo").before("<dd id='selectJ'><a href='javascript:void(0)'>"+$(this).text()+"</a></dd>");
			}
	});
	
	$(".select8_bian1 a").click(function () {
			$(".select8_bian span").text($(this).text());/*替换字体*/
			$(".select8_bian span").css({"color":"#0574BF"});/*改变字体颜色*/
			if ($("#selectK").length > 0) {
				$("#selectK a").html($(this).text());
			} else {
				$(".select-result .select-noo").before("<dd id='selectK'><a href='javascript:void(0)'>"+$(this).text()+"</a></dd>");
			}
	});
	
	$(".select8_color1 a").click(function () {
			$(".select8_color span").text($(this).text());/*替换字体*/
			$(".select8_color span").css({"color":"#0574BF"});/*改变字体颜色*/
			if ($("#selectL").length > 0) {
				$("#selectL a").html($(this).text());
			} else {
				$(".select-result .select-noo").before("<dd id='selectL'><a href='javascript:void(0)'>"+$(this).text()+"</a></dd>");
			}
	});
	
	$(".select8_country1 a").click(function () {
			$(".select8_country span").text($(this).text());/*替换字体*/
			$(".select8_country span").css({"color":"#0574BF"});/*改变字体颜色*/
			if ($("#selectM").length > 0) {
				$("#selectM a").html($(this).text());
			} else {
				$(".select-result .select-noo").before("<dd id='selectM'><a href='javascript:void(0)'>"+$(this).text()+"</a></dd>");
			}
	});




	/*点击下面已选的 删除*/
	$("#selectA").live("click", function () {/*.live("click", function ()这样才能点击就删除*/
		$(this).remove();/*如果按下这个分类，那么删除它，*/
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
		/*删除后，然后给（那个全部）增加class让它颜色变，删除它的同胞的selected（class）*/
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectD").live("click", function () {
		$(this).remove();
		$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectE").live("click", function () {
		$(this).remove();
		$("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectF").live("click", function () {
		$(this).remove();
		$("#select6 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectH").live("click", function () {
		$(this).remove();
		$("#select7 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectJ").live("click", function () {
		$(this).remove();
			$(".select8_pai span").text("排量");/*替换字体*/
			$(".select8_pai span").css({"color":"#333333"});/*改变字体颜色*/
	});
	
	$("#selectK").live("click", function () {
		$(this).remove();
			$(".select8_bian span").text("变速箱");/*替换字体*/
			$(".select8_bian span").css({"color":"#333333"});/*改变字体颜色*/
	});
	
	$("#selectL").live("click", function () {
		$(this).remove();
			$(".select8_color span").text("颜色");/*替换字体*/
			$(".select8_color span").css({"color":"#333333"});/*改变字体颜色*/
	});
	
	$("#selectM").live("click", function () {
		$(this).remove();
			$(".select8_country span").text("国别");/*替换字体*/
			$(".select8_country span").css({"color":"#333333"});/*改变字体颜色*/
		/*$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");*/
	});	
	
	
	/*暂时没有选择条件字样是否隐藏的问题*/
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length < 3) {/*点击了隐藏(暂时没有选择条件)，没有点击就显示*/
			$(".select-no").show();
		} else {
			$(".select-no").hide();
		}
	});
	$(".select-list8 a").click(function () {
		if ($(".select-result dd").length < 3) {/*点击了隐藏(暂时没有选择条件)，没有点击就显示*/
			$(".select-no").show();
		} else {
			$(".select-no").hide();
		}
	});
	
	/*点击全部清空时*/
	$(".select-noo").live("click", function () {
		if ($(".select-result dd").length > 2) {/*点击了全部隐藏，就select-no显示*/
			$("#selectA").remove();
			$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectB").remove();
			$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectC").remove();
			$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectD").remove();
			$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectE").remove();
			$("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectF").remove();
			$("#select6 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectH").remove();
			$("#select7 .select-all").addClass("selected").siblings().removeClass("selected");
			$("#selectJ").remove();
			$(".select8_pai span").text("排量");/*替换字体*/
			$(".select8_pai span").css({"color":"#333333"});/*改变字体颜色*/
			$("#selectK").remove();
			$(".select8_bian span").text("变速箱");/*替换字体*/
			$(".select8_bian span").css({"color":"#333333"});/*改变字体颜色*/
			$("#selectL").remove();
			$(".select8_color span").text("颜色");/*替换字体*/
			$(".select8_color span").css({"color":"#333333"});/*改变字体颜色*/
			$("#selectM").remove();
			$(".select8_country span").text("国别");/*替换字体*/
			$(".select8_country span").css({"color":"#333333"});/*改变字体颜色*/
			/*$("#select12 .select-all").addClass("selected").siblings().removeClass("selected");*/
			$(".select-no").show();
		}
	});	
	
	
	
	 /*分类排量*/
	$(".select8_pai").hover(function(){
		$(".select8_pai").css({"border-bottom-style":"none","z-index":"99"});/*定位边框，显示层，三角形的*/
		$(".select8_pai i").css({"background-position":"left -15px"});
		$(".select8_pai1").show();
		},function(){
		 $(".select8_pai").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_pai i").css({"background-position":"left 10px"});
		 $(".select8_pai1").hide();	  
	});
	$(".select8_pai1").hover(function(){
		$(".select8_pai").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_pai i").css({"background-position":"left -15px"});
		$(".select8_pai1").show();
		},function(){
		 $(".select8_pai").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_pai i").css({"background-position":"left 10px"});
		 $(".select8_pai1").hide();	  
	});
	/*变速箱*/
	$(".select8_bian").hover(function(){
		$(".select8_bian").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_bian i").css({"background-position":"left -15px"});
		$(".select8_bian1").show();
		},function(){
		 $(".select8_bian").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_bian i").css({"background-position":"left 10px"});
		 $(".select8_bian1").hide();	  
	});
	$(".select8_bian1").hover(function(){
		$(".select8_bian").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_bian i").css({"background-position":"left -15px"});
		$(".select8_bian1").show();
		},function(){
		 $(".select8_bian").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_bian i").css({"background-position":"left 10px"});
		 $(".select8_bian1").hide();	  
	});
	/*颜色*/
	$(".select8_color").hover(function(){
		$(".select8_color").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_color i").css({"background-position":"left -15px"});
		$(".select8_color1").show();
		},function(){
		 $(".select8_color").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_color i").css({"background-position":"left 10px"});
		 $(".select8_color1").hide();	  
	});
	$(".select8_color1").hover(function(){
		$(".select8_color").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_color i").css({"background-position":"left -15px"});
		$(".select8_color1").show();
		},function(){
		 $(".select8_color").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_color i").css({"background-position":"left 10px"});
		 $(".select8_color1").hide();	  
	});
	/*国别*/
	$(".select8_country").hover(function(){
		$(".select8_country").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_country i").css({"background-position":"left -15px"});
		$(".select8_country1").show();
		},function(){
		 $(".select8_country").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_country i").css({"background-position":"left 10px"});
		 $(".select8_country1").hide();	  
	});
	$(".select8_country1").hover(function(){
		$(".select8_country").css({"border-bottom-style":"none","z-index":"99"});
		$(".select8_country i").css({"background-position":"left -15px"});
		$(".select8_country1").show();
		},function(){
		 $(".select8_country").css({"border":"1px solid #ccc","z-index":"1"});
		 $(".select8_country i").css({"background-position":"left 10px"});
		 $(".select8_country1").hide();	  
	});
});