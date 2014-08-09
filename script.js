$(document).ready(function(){
	$(".pull-me").click(function(){
    $(".panel").slideToggle("slow");
    });





   $(".clearfix").mouseenter(function() {
       $(this).animate({
           height: '+=10px';
       });
       $(".right",".left").mouseenter(function(){
		$(this).fadeTo("fast",1);
	});
	$(".right",".left").mouseenter(function(){
		$(this).fadeTo("fast",1);
	});
   });
   $(".clearfix").mouseleave(function() {
       $(this).animate({
           height: '-=10px';
       }); 
       $(".right",".left").mouseenter(function(){
		$(this).fadeTo("fast",1);
	});
	$(".right",".left").mouseenter(function(){
		$(this).fadeTo("fast",1);
	});
   });



});
