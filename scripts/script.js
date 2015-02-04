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
});
