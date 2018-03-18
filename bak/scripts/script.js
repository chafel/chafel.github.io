$(document).ready(function(){
  /*首部下拉*/
  $(".pull-me").click(function(){
    $(".panel").slideToggle("fast");
    $("p.hide").toggleClass("hide");
  });
  /*左右动画及透明*/
  $(".clearfix").mouseenter(function() {
       // $(this).animate({
       //    height: '+=10px'
       //  });
       
       $("#right").mouseenter(function(){
		      $(this).fadeTo("fast",0.99);
       });
      $("#left").mouseenter(function(){
          $(this).fadeTo("fast",0.99);
       });  

	/*$("#right","#left").mouseenter(function(){
		$(this).fadeTo("fast",0);
	});*/
  });
   $(".clearfix").mouseleave(function() {
      // $(this).animate({
      //      height: '-=10px'
      //  }); 
     $("#right").mouseleave(function(){
		      $(this).fadeTo("fast",0.5);
	     });
	    $("#left").mouseleave(function(){
		      $(this).fadeTo("fast",0.5);
	     });     
  }); 
  /*左边标签页切换*/  
    $("#css").css("display","block");
    $("#left ol li").click(function(){
        var a=$(this).index();
        $("#left ol li").css("border-bottom","5px solid #ccc");
        $(this).css("border-bottom-color","transparent");
        
        $("#left ul").hide();
        $("#left ul").eq(a).show();
    });
  // 显示Codecademy图片
  $("#codeInfo").hover(function(e) {
    if(e.pageX>650){
      $("#codeImg").css('display', 'block');
    }else{
      $("#codeInfo").attr('href', 'http://www.codecademy.com');
      $("#codeImg").css('display','none');
    }
    
  }, function() {
    $("#codeImg").css('display', 'none');
  });
  //检测窗口变化
  // var sinaChange=function(){
  //   var width=$(window).width();
  //   var sinaWidget='<iframe width="350" height="600" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=1&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=1825990963&verifier=c03fa372&dpc=1"></iframe>';

  //   if(width>768){
  //     $("body").append(sinaWidget);
  //   }else{
  //     $("iframe").remove();  
  //   }
  // };
  // sinaChange();
  // $(window).resize(sinaChange);
});
