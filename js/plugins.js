// JavaScript Document
/*global $, document, window*/

$(document).ready(function (){

	

	$('.carousel').carousel({
		interval:3000
		
		
	});

	var scrollButton = $("#scroll-top");
	var navbar1 = $(".navbar");
	$(window).scroll(function ()
	{
		
		if($(this).scrollTop()>=700)
			{
				scrollButton.show();
			
			}else{
				scrollButton.hide();
			}
			});
			// $(window).scroll(function ()
			// {
					
			// if($(this).scrollTop()>=50)
			// {
			// 	navbar1.addClass('fixed-top');
			// }else{
			// 	navbar1.removeClass('fixed-top');
			// }
			// });
	scrollButton.click(function (){
			$("html,body").animate({ scrollTop : 0 }, 600 );
		});


	
	

});

