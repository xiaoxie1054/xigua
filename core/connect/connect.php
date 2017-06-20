<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>连接数据库</title>
</head>

<body>
<?php
	/*define('HOST','localhost');
	define('DBUSERID','xiaoxie');
	define('PASSWORD','xiaoxie');
	define('DBNAME','db_xigua');*/
	include_once("include.php"); 
	$link=new mysqli(HOST,DBUSERID,PASSWORD,DBNAME);   //1、建立与mysql数据库服务器的连接
	
	
	
	if($link->connect_errno){    
		print "连接数据库失败" . $link->connect_error;                      //2、打印错误信息
		//exit();
	}
	//else{
	//	print "连接数据库成功。<br/>"; 
	//}
	
	$link->query("set names utf8");                                      //3、设置字符编码
	$link->query("set character set 'utf8'");
	
	//$link->close();                                                      //4、关闭与数据库服务器的连接
?>
</body>
</html>