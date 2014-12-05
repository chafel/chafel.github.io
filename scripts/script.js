$(document).ready(function(){
	/*首部下拉*/
  $(".pull-me").click(function(){
    $(".panel").slideToggle("fast");
  });
  /*左右动画及透明*/
  $(".clearfix").mouseenter(function() {
       $(this).animate({
          height: '+=10px'
        });
       
       $("#right").mouseenter(function(){
		      $(this).fadeTo("fast",0.8);
       });
      $("#left").mouseenter(function(){
          $(this).fadeTo("fast",0.8);
       });  

	/*$("#right","#left").mouseenter(function(){
		$(this).fadeTo("fast",0);
	});*/
  });
   $(".clearfix").mouseleave(function() {
      $(this).animate({
           height: '-=10px'
       }); 
     $("#right").mouseleave(function(){
		      $(this).fadeTo("fast",0.2);
	     });
	    $("#left").mouseleave(function(){
		      $(this).fadeTo("fast",0.2);
	     });     
  }); 
  /*左边标签页切换*/  
    $("#css").css("display","block");
    $("#left ol li").click(function(){
        var a=$(this).index();
        $("#left ol li").css("border-bottom","5px dotted #ccc");
        $(this).css("border-bottom","none");
        
        $("#left ul").hide();
        $("#left ul").eq(a).show();
    });
});
