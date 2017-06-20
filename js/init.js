/**
 * Created by woodenfi5h on 16-8-3.
 */
$(function () {
  //初始化导航条，实现响应式
  $('#nav-button').on('click', function () {
    var $navMobile=$('#nav-mobile');
    var $body=$('body');
    $navMobile.addClass('in');
    $body.css('overflow','hidden');
    var overlay=$('<div id="sidenav-overlay" style="opacity: 1;" class=""></div>');
    overlay.on('click',function(){
      $navMobile.removeClass('in');
      overlay.remove();
      $body.css('overflow','auto');
    });
    $body.append(overlay);
  })

});
