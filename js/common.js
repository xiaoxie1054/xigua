// JavaScript Document
function getLength(str){
	 if (str == null) return 0;
	 /*if (typeof str != "string"){  
        str += "";  
     } */ 
	 return str.replace(/[^\x00-\xff]/g,"01").length;
}
$(document).ready(function(){
	
/*点击加号车辆弹出*/	
$(".change_car").on('click',function(){
	alert('仅有一辆二手车');
});
$(".change_car_va").on('change',function(){
	  
	  alert('仅有一辆二手车');$(this).val('1');
});	
	
/*单选*/	
	var check_one=$(".check_one");
	check_one.click(function() {
		$("input[name='check_revsern']").attr("checked",false);
	});
/*全选*/	
	var check_all=$(".check_all");
	check_all.click(function() {
		if(check_all.is(":checked")){
	  		$("input[name='items']").attr("checked",true);
			$(".check_all_va").attr("checked",true);
		}else{
			$("input[name='items']").attr("checked",false);
			$(".check_all_va").attr("checked",false);
		}
		$("input[name='check_revsern']").attr("checked",false);	  
	});
	/*2*/
	var check_all_va=$(".check_all_va");
	check_all_va.click(function() {
		if(check_all_va.is(":checked")){
	  		$("input[name='items']").attr("checked",true);
			$(".check_all").attr("checked",true);
		}else{
			$("input[name='items']").attr("checked",false);
			$(".check_all").attr("checked",false);
		}
		$("input[name='check_revsern']").attr("checked",false);	  
	});
		

/*反选*/	
	var check_revsern=$(".check_revsern");
	check_revsern.click(function() {
		if(check_revsern.is(":checked")){
			$(".check_revsern_va").attr("checked",true);
	  		$("input[name='items']").each(function(){ 
        		$(this).attr("checked", !$(this).attr("checked"));
				 
       		});
		}else{
			$(".check_revsern_va").attr("checked",false);
			$("input[name='items']").each(function(){ 
        		$(this).attr("checked", !$(this).attr("checked")); 
       		});
		}
	});	
	/*2*/
	var check_revsern_va=$(".check_revsern_va");
	check_revsern_va.click(function() {
		if(check_revsern_va.is(":checked")){
			$(".check_revsern").attr("checked",true);
	  		$("input[name='items']").each(function(){ 
        		$(this).attr("checked", !$(this).attr("checked"));
				 
       		});
		}else{
			$(".check_revsern").attr("checked",false);
			$("input[name='items']").each(function(){ 
        		$(this).attr("checked", !$(this).attr("checked")); 
       		});
		}
	});	
 
	
/*用户名账号*/
	var user_name=$(".user_name_");
	user_name.focus(function(){
		$('.user_name_ms').html('<i class="show_sh"></i>字母开头，允许6-25字节，允许字母数字下划线。');
	});
	user_name.blur(function(){
		
		var len=getLength(this.value);
		var reg=/^[a-zA-Z][a-zA-Z0-9_]{5,24}$/;
		//不能为空
		if(this.value==""){
			
			$('.user_name_ms').html('<i class="fail_fa"></i>用户名不能为空。');
		
		}
		//长度小于5个字符
		else if(len<6){
			$('.user_name_ms').html('<i class="fail_fa"></i>长度小6个字符。');
		}
		//长度超过25个字符
		else if(len>25){
			$('.user_name_ms').html('<i class="fail_fa"></i>长度超过25个字符。');
		}
		//含有非法字符
		else if(!reg.test(this.value)){
			$('.user_name_ms').html('<i class="fail_fa"></i>用户名格式不对。');
		}
		//验证成功
		else{
			$('.user_name_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});
	
	
/*密码*/
	var user_ps=$(".user_ps_");
	user_ps.focus(function(){
		$('.user_ps_ms').html('<i class="show_sh"></i>请输入密码，只能是6到18位数字、下划线、字母组成。');
	});
	user_ps.blur(function(){
		//含有非法字符
		/*var len=getLength(this.value);
		var reg=user_ps.val().match(/^\w+$/);*/
		
		if(this.value==""){
			$('.user_ps_ms').html('<i class="fail_fa"></i>密码不能为空。');
		}else if(!(/^[A-Za-z0-9_]{6,18}$/).test(this.value)){
			$('.user_ps_ms').html('<i class="fail_fa"></i>密码只能是6到18位数字、下划线、字母。');
		}
		//验证成功
		else{
			$('.user_ps_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});

/*确认密码*/
	var user_ps1=$(".user_ps1_");
	user_ps1.focus(function(){
		$('.user_ps1_ms').html('<i class="show_sh"></i>请重新输入密码，只能是6到18位数字、下划线、字母组成。');
	});
	user_ps1.blur(function(){
		if(this.value==""){
			$('.user_ps1_ms').html('<i class="fail_fa"></i>新密码不能为空。');
		}else if(this.value!=user_ps.val()){
			$('.user_ps1_ms').html('<i class="fail_fa"></i>密码不一致。');
		}else{
			$('.user_ps1_ms').html('<i class="succeed_su"></i>验证成功。');	
		}
		
	});
		
		
/*姓名*/
	var name=$(".name_")
	name.focus(function(){
		$('.name_ms').html('<i class="show_sh"></i>请输入2-4个汉字');
	});
	name.blur(function(){
		//不能为空
		var reg=/^([\u4e00-\u9fa5]{2,4})$/g;
		if(this.value==""){
			$('.name_ms').html('<i class="fail_fa"></i>姓名不能为空。');
		}
		//含有非法字符
		else if(!reg.test(this.value)){
			
			$('.name_ms').html('<i class="fail_fa"></i>只能输入2-4个汉字。');
		}
		//验证成功
		else{
			$('.name_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});
	 
/*昵称*/
	var nick_name=$(".nick_name_");
	nick_name.focus(function(){
		$('.nick_name_ms').html('<i class="show_sh"></i>4-25个字符，一个汉字为两个字符。');
	});
	nick_name.blur(function(){
		
		var len=getLength(this.value);
		var reg=/[^\w\u4e00-\u9fa5]/g;
		//不能为空
		if(this.value==""){
			$('.nick_name_ms').html('<i class="fail_fa"></i>昵称不能为空。');
		}
		//长度超过25个字符
		else if(len>25){
			$('.nick_name_ms').html('<i class="fail_fa"></i>长度超过25个字符。');
		}
		//长度小于5个字符
		else if(len<4){
			$('.nick_name_ms').html('<i class="fail_fa"></i>长度小4个字符。');
		}
		//含有非法字符
		else if(reg.test(this.value)){
			
			$('.nick_name_ms').html('<i class="fail_fa"></i>含有非法字符。');
		}
		//验证成功
		else{
			$('.nick_name_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	
	
/*手机号、邮箱*/	
	var mobile_email=$(".mobile_email_");
	mobile_email.focus(function(){
		$('.mobile_email_ms').html('<i class="show_sh"></i>请输入正确的手机号或邮箱地址');
	});
	mobile_email.blur(function(){
		//含有非法字符
		/*var emai=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		var phon=/^1[3|4|5|8][0-9]\d{4,8}$/;
		if(!emai.test(this.value)||!phon.test(this.value))*//*这样不可以*/
		var pho=/^1[3|4|5|8][0-9]\d{4,8}|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		if(this.value==""){
			$('.mobile_email_ms').html('<i class="fail_fa"></i>不能为空。');
		}else if(!pho.test(this.value)){
			$('.mobile_email_ms').html('<i class="fail_fa"></i>手机号格式或邮箱格式不正确。');
		//验证成功
		}else{
			$('.mobile_email_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	


/*手机号、邮箱、用户名*/	
	var mobile_email_name=$(".mobile_email_name");
	mobile_email_name.focus(function(){
		$('.mobile_email_name_ms').html('<i class="show_sh"></i>请输入正确的用户名或手机号或邮箱地址');
	});
	mobile_email_name.blur(function(){
		var len=getLength(this.value);
		//含有非法字符
		/*var emai=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		var phon=/^1[3|4|5|8][0-9]\d{4,8}$/;
		if(!emai.test(this.value)||!phon.test(this.value))*//*这样不可以*/
		var pho=/^[a-zA-Z][a-zA-Z0-9_]{5,24}|^1[3|4|5|8][0-9]\d{4,8}|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		
		if(this.value==""){
			$('.mobile_email_name_ms').html('<i class="fail_fa"></i>不能为空。');
		}
		//长度小于5个字符
		else if(len<6){
			$('.mobile_email_name_ms').html('<i class="fail_fa"></i>长度小6个字符。');
		}
		//长度超过25个字符
		else if(len>25){
			$('.mobile_email_name_ms').html('<i class="fail_fa"></i>长度超过25个字符。');
		}else if(!pho.test(this.value)){
			$('.mobile_email_name_ms').html('<i class="fail_fa"></i>用户名或手机号格式或邮箱格式不正确。');
		//验证成功
		}else{
			$('.mobile_email_name_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	
		
/*手机号*/	
	var mobile=$(".mobile_");
	mobile.focus(function(){
		$('.mobile_ms').html('<i class="show_sh"></i>请输入正确的手机号');
	});
	mobile.blur(function(){
		//含有非法字符
		/*var emai=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		var phon=/^1[3|4|5|8][0-9]\d{4,8}$/;
		if(!emai.test(this.value)||!phon.test(this.value))*//*这样不可以*/
		var pho=/^1[3|4|5|8][0-9]\d{4,8}$/;
		if(this.value==""){
			$('.mobile_ms').html('<i class="fail_fa"></i>手机号不能为空。');
		}else if(!pho.test(this.value)){
			$('.mobile_ms').html('<i class="fail_fa"></i>手机号格式不正确。');
		//验证成功
		}else{
			$('.mobile_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	
	
/*电话号码*/	
	var phone=$(".phone_");
	phone.focus(function(){
		$('.phone_ms').html('<i class="show_sh"></i>请输入正确的电话号码');
	});
	phone.blur(function(){
		//含有非法字符
		var pho=/\d{3}-\d{8}|\d{4}-\{7,8}$/;
		if(this.value==""){
			$('.phone_ms').html('');
		}else if(pho.test(this.value)){
			$('.phone_ms').html('<i class="fail_fa"></i>电话号码格式不正确。');
		//验证成功
		}else{
			$('.phone_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	
	
/*邮箱*/
	var email=$(".email_");
	email.focus(function(){
		$('.email_ms').html('<i class="show_sh"></i>请填写正确的邮箱地址');
	});
	email.blur(function(){
		//含有非法字符
		var emai=email.val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
		if(this.value==""){
			$('.email_ms').html('<i class="fail_fa"></i>邮箱地址不能为空。');
		}else if(!emai){
			$('.email_ms').html('<i class="fail_fa"></i>邮箱格式不正确。');
		}
		//不能为空
		else if(this.value==""){
			$('.email_ms').html('<i class="fail_fa"></i>邮箱地址不能为空。');
		}
		//验证成功
		else{
			$('.email_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});	
	
/*QQ*/
	var qq=$(".qq_")
	qq.focus(function(){
		$('.qq_ms').html('<i class="show_sh"></i>请输入正确的QQ号。');
	});
	qq.blur(function(){
		//含有非法字符
		
		 var p =/[1-9][0-9]{4,}/; 
		if(this.value==""){
			$('.qq_ms').html('<i class="fail_fa"></i>QQ号不能为空');
		}
		else if(!p.test(this.value)){
			$('.qq_ms').html('<i class="fail_fa"></i>QQ号格式不对。');
		}else{
			$('.qq_ms').html('<i class="succeed_su"></i>验证成功。');
		}
	});
	


/*微信号*/
	var weixin=$(".weixin_")
	weixin.focus(function(){
		$('.weixin_ms').html('<i class="show_sh"></i>请输入正确的微信号,如手机号、或字母、数字、下划线组成。');
	});
	weixin.blur(function(){
		//含有非法字符
		
		 var p =/^1[3|4|5|8][0-9]\d{4,8}|^\w+$/; /*^[A-Za-z0-9_]{5,25}*//*^\w{6,25}*/
		if(this.value==""){
			$('.weixin_ms').html('<i class="fail_fa"></i>微信号不能为空');
		}
		else if(!p.test(this.value)){
			$('.weixin_ms').html('<i class="fail_fa"></i>微信号格式不对。');
		}else{
			$('.weixin_ms').html('<i class="succeed_su"></i>验证成功。');
		}
	});
	
/*邮政编码*/
	var post_code=$(".post_code_")
	post_code.focus(function(){
		$('.post_code_ms').html('<i class="show_sh"></i>请输入正确的邮政编码。');
	});
	post_code.blur(function(){
		//含有非法字符
		
		 var p =/[1-9]\d{5}(?!\d)$/; 
		if(this.value==""){
			$('.post_code_ms').html('<i class="fail_fa"></i>邮政编码不能为空');
		}
		else if(!p.test(this.value)){
			$('.post_code_ms').html('<i class="fail_fa"></i>邮政编码格式不对。');
		}else{
			$('.post_code_ms').html('<i class="succeed_su"></i>验证成功。');
		}
	});	

/*身份证号*/
	var id_number=$(".id_number_")
	id_number.focus(function(){
		$('.id_number_ms').html('<i class="show_sh"></i>请输入正确的身份证号,X为大写。');
	});
	id_number.blur(function(){
		//含有非法字符
		
		 var p =/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/; 
		if(this.value==""){
			$('.id_number_ms').html('<i class="fail_fa"></i>身份证号不能为空');
		}
		else if(!p.test(this.value)){
			$('.id_number_ms').html('<i class="fail_fa"></i>身份证号格式不对。');
		}else{
			$('.id_number_ms').html('<i class="succeed_su"></i>验证成功。');
		}
	});	

/*公里验证*/
	var mile=$(".mile_")
	mile.focus(function(){
		$('.mile_ms').html('<i class="show_sh"></i>请输入数字或最多两位小数。');
	});
	mile.blur(function(){
		//含有非法字符
		/*小数两位的验证/^[0-9]+([.]{1}[0-9]{1,2})?$/*//*小数的验证/[0-9](\.\d{1,2})?$/*//*小数一位的验证/(^\d{1,2}|(\.\d)){1}$/*/
		 var p =/(\d+$)/; 
	     var p1=/^[0-9]+([.]{1}[0-9]{1,2})?$/;
		if(this.value==""){
			$('.mile_ms').html('<i class="fail_fa"></i>请输入公里数');
		}
		else if(!p.test(mile.val())||!p1.test(mile.val())){
			$('.mile_ms').html('<i class="fail_fa"></i>只能输入数字或最多两位小数。');
		}else{
			$('.mile_ms').html('');
		}
	});	
		
	
/*价格万元*/
	var price=$(".price_")
	price.focus(function(){
		$('.price_ms').html('<i class="show_sh"></i>请输入数字或最多两位小数。');
	});
	price.blur(function(){
		//含有非法字符
		/*小数两位的验证/^[0-9]+([.]{1}[0-9]{1,2})?$/*//*小数的验证/[0-9](\.\d{1,2})?$/*//*小数一位的验证/(^\d{1,2}|(\.\d)){1}$/*/
		 var p =/(\d+$)/; 
	     var p1=/^[0-9]+([.]{1}[0-9]{1,2})?$/;
		if(this.value==""){
			$('.price_ms').html('<i class="fail_fa"></i>请输入公里数');
		}
		else if(!p.test(price.val())||!p1.test(price.val())){
			$('.price_ms').html('<i class="fail_fa"></i>只能输入数字或最多两位小数。');
		}else{
			$('.price_ms').html('');
		}
	});
	
/*验证码*/
	var catcha=$(".catcha_");	
	catcha.focus(function(){
		$('.catcha_ms').html('<i class="show_sh"></i>请输入验证码，点击图换一张');
	});
	catcha.blur(function(){
		if(this.value==""){
			$('.catcha_ms').html('<i class="fail_fa"></i>验证码不能为空。');
		}else{
			$('.catcha_ms').html('<i class="succeed_su"></i>验证成功。');	
		}
		
	});	
	
	
	
	
	
	
	
	
	
	
	
	/*顶部的用户三角形*/	/*顶部是否显示用户的头像*/
	$(".index_top .index_top_user .span11 a").hover(function(){
		$(".index_top .index_top_user a .span2").css({"background-position":"left -22px"});/*定位三角形两个数加起来25的*/
		if($(".index_top .index_top_user .span11 a").is(":visible")){/*判断用户是否登录*/
			$(".index_top .index_top_user .span11 a").css({"background-color":"#0B6FB0"});
			$(".index_top .index_top_user .user_info").css({"display":"block"});
			
		}
		},function(){
		 $(".index_top .index_top_user a .span2").css({"background-position":"left 3px"});/*定位三角形的*/
		 $(".index_top .index_top_user .user_info").css({"display":"none"});
		 $(".index_top .index_top_user .span11 a").css({"background-color":"#005073"});
	});
	
	$(".index_top .index_top_user .user_info").hover(function(){
		$(".index_top .index_top_user a .span2").css({"background-position":"left -22px"});/*定位三角形两个数加起来25的*/
		$(".index_top .index_top_user .span11 a").css({"background-color":"#0B6FB0"});
		$(".index_top .index_top_user .user_info").css({"display":"block"});
	},function(){
		$(".index_top .index_top_user a .span2").css({"background-position":"left 3px"});/*定位三角形的*/
		$(".index_top .index_top_user .user_info").css({"display":"none"});
		$(".index_top .index_top_user .span11 a").css({"background-color":"#005073"});	
		
	});
	
	
	/*客户服务*/
	
	$(".index_top .index_top_serve .serve a").hover(function(){
		$(this).css({"background-color":"#0B6FB0"});
		$(".index_top_serve .serve_problem").css({"display":"block"});
		},function(){
		 $(".index_top_serve .serve_problem").css({"display":"none"});
		 $(this).css({"background-color":"#005073"});
	});
	
	$(".index_top_serve .serve_problem").hover(function(){
		$(".index_top .index_top_serve .serve a").css({"background-color":"#0B6FB0"});
		$(this).css({"display":"block"});
	},function(){
		$(this).css({"display":"none"});
		$(".index_top .index_top_serve .serve a").css({"background-color":"#005073"});	
		
	});
	
	
	






  /*logo区域城市选区*/
	$(".show_hide_city").hover(function(){
		$(".show_hide_city").css({"border":"1px solid #0099FF","border-bottom-style":"none","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","background-color":"#0B6FB0"});
		$(".index_logo_city .show_hide_city_a a .span2").css({"background-position":"left -21px"})
		$(".index_logo_city_").show(100);
		},function(){
		 $(".show_hide_city").css({"border":"1px solid #0B6FB0","border-bottom-left-radius":"5px","border-bottom-right-radius":"5px","background-color":"#0B6FB0"});
		 $(".index_logo_city .show_hide_city_a a .span2").css({"background-position":"left 4px"});
		 $(".index_logo_city_").hide();	  
	});
	$(".index_logo_city_").hover(function(){
		$(".show_hide_city").css({"border":"1px solid #0099FF","border-bottom-style":"none","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px","background-color":"#0B6FB0"});
		$(".index_logo_city .show_hide_city_a a .span2").css({"background-position":"left -21px"});
		$(".index_logo_city_").show();
		},function(){
		 $(".show_hide_city").css({"border":"1px solid #0B6FB0","border-bottom-left-radius":"5px","border-bottom-right-radius":"5px","background-color":"#0B6FB0"});
		  $(".index_logo_city .show_hide_city_a a .span2").css({"background-position":"left 4px"});
		 $(".index_logo_city_").hide();	  
	});
 

/*index_content_con内容车的遇到边框,怎么在jQuery代码中使用each循环*/
  /*index*/
  $("div[class^='index_content_con_c']").each(function(i){
	  $(".index_content_con_c"+i).hover(function(){
		$(".index_content_con_c"+i).css("border","2px solid #0B6FB0");
		},function(){
		 $(".index_content_con_c"+i).css("border","2px solid rgba(11,111,176,0)");                          
	});
  });
  /*buy*/
  $("div[class^='buy_content_con_c']").each(function(i){
	  $(".buy_content_con_c"+i).hover(function(){
		$(".buy_content_con_c"+i).css("border","2px solid #0B6FB0");
		},function(){
		 $(".buy_content_con_c"+i).css("border","2px solid rgba(11,111,176,0)");                          
	});
  });



/*回到顶部*/
/*window.onload=function(){*/
	var obtn3=document.getElementById("btn3");
	var obtn=document.getElementById("btn");
	var osTop=document.documentElement.scrollTop || document.body.scrollTop;
	//获取页面可视区的高度
	var clientHeight=(document.documentElement.clientHeight)/3;
	var timea1=null;
	var isTop=true;
	if(osTop>=1040){
			obtn.style.position='absolute';
			obtn.style.bottom='290px';
	}else{
			obtn.style.position='fixed';
			obtn.style.bottom='10px';
	}
	if(osTop>=clientHeight){
			obtn3.style.display='block';	
	}else{
			obtn3.style.display='none';
	}
	//滚动条滚动时触发
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop>=clientHeight){
			obtn3.style.display='block';	
		}else{
			obtn3.style.display='none';
		}
		if(osTop>=1040){
			obtn.style.position='absolute';
			obtn.style.bottom='290px';
		}else{
			obtn.style.position='fixed';
			obtn.style.bottom='10px';
		}
		if(!isTop){
			clearInterval(timea1);
		}
		isTop= false;
	}
	obtn3.onclick=function(){
		timea1=setInterval(function(){
			var osTop=document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 7);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
			isTop = true;
			console.log(osTop -ispeed);
			if (osTop == 0){
				clearInterval(timea1);
			}
		},30);
	}
}); 