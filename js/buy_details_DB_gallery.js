/*********************************************************************************
�÷����� : jquery.DB_gallery.js
������ : Copyright �� 2012 by �����κ�(http://designblack.com) 
���̼��� : �����ζ��̼���
��Ÿ : �� �÷����� ������ ����(�ּ�)�� ������ �� �����ϴ�.
       Ȩ�������� ���� �̿뵵������ ���� �޾ƾ� �մϴ�.
*********************************************************************************/
;(function($){
$.fn.DB_gallery=function(options){
	var opt={
		thumWidth:110,              //����ϰ���
		thumGap:8,                  //����ϰ���
		thumMoveStep:5,             //������̵�����
		moveSpeed:200,              //�̵��ӵ�
		fadeSpeed:300,              //ȭ����ȯ�ӵ�
		end:''
	}
	$.extend(opt,options);
	return this.each(function(){
		var $this=$(this);
		var $imgSet=$this.find('.DB_imgSet');
		var $imgWin=$imgSet.find('.DB_imgWin');
		var $page=$this.find('.DB_page');
		var $pageCurrent=$page.find('.DB_current');
		var $pageTotal=$page.find('.DB_total');
		var $thumSet=$this.find('.DB_thumSet');
		var $thumMove=$thumSet.find('.DB_thumMove');
		var $thumList=$thumMove.find('li');
		var $thumLine=$this.find('.DB_thumLine');
		var $nextBtn=$this.find('.DB_nextBtn');
		var $prevBtn=$this.find('.DB_prevBtn');
		var $nextPageBtn=$this.find('.DB_nextPageBtn');
		var $prevPageBtn=$this.find('.DB_prevPageBtn');
		var objNum=$thumList.length;
		var currentObj=0;
		var fixObj=0;
		var currentPage=0;
		var totalPage=Math.floor(objNum/opt.thumMoveStep);
		var oldImg;

		init();

		function init(){
			setInit();
			setMouseEvent();
			changeImg();
		}
         
		function setInit(){
			//����� ���� ��ġ����
			$thumMove.append($thumLine.get());
			
		}

		//���ε�
		function setMouseEvent(){
			$thumList.bind('click',function(e){
				e.preventDefault();
				currentObj=$(this).index();
				changeImg();
			});
			$nextBtn.bind('click',function(){
				currentObj++;
				if(currentObj==objNum){currentObj=0;}
				changeImg();
				currentPage=Math.floor(currentObj/opt.thumMoveStep);
				moveThum();

			});
			$prevBtn.bind('click',function(){
				currentObj--;
				if(currentObj==-1){currentObj=objNum-1;}
				changeImg();
				currentPage=Math.floor(currentObj/opt.thumMoveStep);
				moveThum();
			});
			$nextPageBtn.bind('click',function(){
				currentPage++;
				moveThum();
			});
			$prevPageBtn.bind('click',function(){
				currentPage--;
				moveThum();
			});
		
		}
		
		//����� �̵�
		function moveThum(){
			var pos=((opt.thumWidth+opt.thumGap)*opt.thumMoveStep)*currentPage
			$thumMove.animate({'left':-pos},opt.moveSpeed);
			//
			setVisibleBtn();
		}

		//�̹������濡 ���� ��ưó��
		function setVisibleBtn(){
			$prevBtn.hide();$nextBtn.hide(); 
			$(".DB_imgSet img").hover(function(){
			$prevBtn.show();$nextBtn.show();
			},function(){
			$prevBtn.hide();$nextBtn.hide();                       
			});
			$prevBtn.click(function() {
			$prevBtn.show();
			});
			$nextBtn.click(function() {
			$nextBtn.show();
			});
			$prevPageBtn.show();
			$nextPageBtn.show();
			
			
			if(currentPage==0)$prevPageBtn.hide();
			if(currentPage==totalPage-1)$nextPageBtn.hide();
			/*if(currentObj==0)$prevBtn.hide();
			if(currentObj==objNum-1)$nextBtn.hide();*/
		}

		//�̹�������
		function changeImg(){
			if(oldImg!=null){
				//�ε巯�� ��ȯ�� ���� ��濡 �����̹����� ��ġ
				$imgWin.css('background','url('+oldImg+') no-repeat');
			}
			//Ŭ���̹���
			var $thum=$thumList.eq(currentObj)
			var _src=oldImg=$thum.find('a').attr('href');
			$imgWin.find('img').hide().attr('src',_src).fadeIn(opt.fadeSpeed);
			oldImg=_src

			//����϶��� ��ġ����
			$thumLine.css({'left':$thum.position().left})

			//����������
			$pageCurrent.text(currentObj+1);
			$pageTotal.text(objNum);
			
			setVisibleBtn();
		}
	})
}
})(jQuery)
$(document).ready(function(){
/*var DB_thumLine=$('.DB_thumSet .DB_thumLine1').clone();
$(".DB_thumMove img").mouseover(function(){
  $(this).after(DB_thumLine);
  });
$('.DB_thumMove img').mouseout(function(){
              
});*/
});