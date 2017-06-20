	// JavaScript Document
/* Create a new XMLHttpRequest object to talk to the Web server */
/*设置输入框为空时，请输入字样的显示与不显示*/
  function submita(){
	  var txtName = document.getElementById("txtName").value;
	  var txtPwd =document.getElementById("txtPwd").value;
	  var txtVc =document.getElementById("txtVc").value;
	  var warn=document.getElementById("warn");
	  var warn2=document.getElementById("warn2");
	  var warn3=document.getElementById("warn3");
		  if(txtName == "" || txtName == undefined || txtName == null) {
				  if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
						  if(txtVc== "" || txtVc == undefined || txtVc == null) {
							  warn.innerHTML="*请输入";
							  warn2.innerHTML="*请输入";
							  warn3.innerHTML="*请输入";
						  }
						  else {
							  warn.innerHTML="*请输入";
							  warn2.innerHTML="*请输入";
							  warn2.innerHTML="";
						  }
				  }
				  else {
					  if(txtVc=="" || txtVc == undefined || txtVc == null) {
						  warn.innerHTML="*请输入";
						  warn2.innerHTML="";
						  warn3.innerHTML="*请输入";
					  }
					  else {
						  warn.innerHTML="*请输入";
						  warn2.innerHTML="";
						  warn3.innerHTML="";
					  }
				  }
			  }
			  else{
				  if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
					  if(txtVc=="" || txtVc == undefined || txtVc == null) {
							  warn.innerHTML="";
							  warn2.innerHTML="*请输入";
							  warn3.innerHTML="*请输入";
					  }
					  else{
						  warn.innerHTML="";
						  warn2.innerHTML="*请输入";
						  warn3.innerHTML="";
					  }
				  }
				  else{
					  if(txtVc=="" || txtVc == undefined || txtVc == null) {
						warn.innerHTML="";
						warn2.innerHTML="";
						warn3.innerHTML="*请输入";
					  }
					  else{
					   warn.innerHTML="";
					   warn2.innerHTML="";
					   warn3.innerHTML="";
					  }
				}
		  }
  }
/*鼠标点击在输入框上时，“请输入”字样不显示，清空图片显示*//*点击进去时显示清空图片*/
  function messagea(){
	  var warn=document.getElementById("warn");
	  warn.innerHTML="";
	  var idmin_dl_page_image_yhm1=document.getElementById("idmin_dl_page_image_yhm1");
	  idmin_dl_page_image_yhm1.style.display="block";
  }
  function messageb(){
	  var warn2=document.getElementById("warn2");
	  warn2.innerHTML="";
	  var idmin_dl_page_image_yhm3=document.getElementById("idmin_dl_page_image_yhm3");
	  idmin_dl_page_image_yhm3.style.display="block";
  }
  function  messagec(){
	  var warn3=document.getElementById("warn3");
	  warn3.innerHTML="";
	  var idmin_dl_page_image_yhm5=document.getElementById("idmin_dl_page_image_yhm5");
	  idmin_dl_page_image_yhm5.style.display="block";
  }
  
  
 /* function idmin_dl_page_image_yhma(){
	  var idmin_dl_page_image_yhm2=document.getElementById("idmin_dl_page_image_yhm2");
	  idmin_dl_page_image_yhm2.style.display="block";
  }
  function idmin_dl_page_image_yhmb(){
		  var idmin_dl_page_image_yhm4=document.getElementById("idmin_dl_page_image_yhm4");
		  idmin_dl_page_image_yhm4.style.display="block";
  }
  function idmin_dl_page_image_yhmc(){
		  var idmin_dl_page_image_yhm6=document.getElementById("idmin_dl_page_image_yhm6");
		  idmin_dl_page_image_yhm6.style.display="block";	
  }*/
  
/*点击清除符号时，文本框的值为空，而且光标聚集在文本框中*/	

  function onMouseDown1(){
	  var txtName = document.getElementById("txtName");   
	  txtName.value="";
  }
  function onMouseDown2(){
	  var txtPwd =document.getElementById("txtPwd");
	  txtPwd.value="";
  }
  function onMouseDown3(){
	  var txtVc =document.getElementById("txtVc");
	  txtVc.value="";
  }
/*当光标离开输入框时，判断输入框的值，为空时，显示“请输入”字样*/
  function message(){
	  var txtName = document.getElementById("txtName").value;
	  var txtPwd =document.getElementById("txtPwd").value;
	  var txtVc =document.getElementById("txtVc").value;
	  var warn=document.getElementById("warn");
	  var warn2=document.getElementById("warn2");
	  var warn3=document.getElementById("warn3");
	  var idmin_dl_page_image_yhm1=document.getElementById("idmin_dl_page_image_yhm1");
	  var idmin_dl_page_image_yhm2=document.getElementById("idmin_dl_page_image_yhm2");
	  var idmin_dl_page_image_yhm3=document.getElementById("idmin_dl_page_image_yhm3");
	  var idmin_dl_page_image_yhm4=document.getElementById("idmin_dl_page_image_yhm4");
	  var idmin_dl_page_image_yhm5=document.getElementById("idmin_dl_page_image_yhm5");
	  var idmin_dl_page_image_yhm6=document.getElementById("idmin_dl_page_image_yhm6");
	  
			  if (txtName == "" || txtName == undefined || txtName == null) {
				  warn.innerHTML="*请输入";
				  idmin_dl_page_image_yhm1.style.display="none";
			  }
			  else {
				  warn.innerHTML="";
				  
				  
			  }
			  if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
				  warn2.innerHTML="*请输入";
				  idmin_dl_page_image_yhm3.style.display="none";
			  }
			  else {
				  warn2.innerHTML="";
			  }
			  if (txtVc == "" || txtVc == undefined || txtVc == null) {
				  warn3.innerHTML="*请输入";
				  idmin_dl_page_image_yhm5.style.display="none";
			  }
			  else {
				  warn3.innerHTML="";
			  }
  }
$(document).ready(function(){  
/*手机号、邮箱*/	
	/*var mobile_email_a=$(".mobile_email_a");
	
	mobile_email_a.blur(function(){
		//含有非法字符
		var pho=/^1[3|4|5|8][0-9]\d{4,8}|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		if(this.value==""){
		
		}else if(!pho.test(this.value)){
			alert('用户名格式不正确');
		//验证成功
		}else{
			
		}
		
		
	});	*/

/*手机号、邮箱、用户名*/	
	var mobile_email_name=$(".mobile_email_name");
	mobile_email_name.blur(function(){

		var pho=/^[a-zA-Z][a-zA-Z0-9_]{5,24}|^1[3|4|5|8][0-9]\d{4,8}|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		
		if(this.value==""){
			
		}else if(!pho.test(this.value)){
			alert('用户名格式不正确');
		mobile_email_name.focus();
			
		//验证成功
		}else{
			$('.mobile_email_name_ms').html('<i class="succeed_su"></i>验证成功。');
		}
		
		
	});		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});