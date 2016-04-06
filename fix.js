$(function(){
	;(function(){
		var $nav = $(".nav");

		 $nav.on("click","li",function(){
		    	$(this).addClass("active").siblings().removeClass("active");
		 })
	})();
});



