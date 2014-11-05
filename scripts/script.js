$(document).ready(function(){
	$(".pull-me").click(function(){
    $(".panel").slideToggle("fast");
  });

  $(".clearfix").mouseenter(function() {
       $(this).animate({
          height: '+=10px'
        });
       $("#right").mouseenter(function(){
		      $(this).fadeTo("fast",1);
       });
      $("#left").mouseenter(function(){
          $(this).fadeTo("fast",1);
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
		      $(this).fadeTo("fast",0);
	     });
	    $("#left").mouseleave(function(){
		      $(this).fadeTo("fast",0);
	     });     
   }); 
});
