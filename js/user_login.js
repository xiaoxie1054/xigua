// JavaScript Document

window.onload=function(){

	/*点击选项，同意注册协议*/
	var $reg11=$(".register_content_con .reg11");
	var $reg_ms=$(".reg_ms");
	$reg11.click(function() {
	  if($reg11.is(":checked")){
		$reg_ms.html('<i class="succeed_su"></i>验证成功</span>');
		
	  }else{
		 $reg_ms.html('<i class="fail_fa"></i>验证失败</span>');
		  
	  }
	});
	
			
	


}