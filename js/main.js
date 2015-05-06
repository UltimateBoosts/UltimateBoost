$(function ()
	{
				
		$(window).scroll(function() {
  		
	  		var scrolltop =$(this).scrollTop();
	  	
  			if(scrolltop >= $(".Contenedor-lema").offset().top ){

  				$("#fixed").addClass("fixmenu-stick");

  			}
  			if(scrolltop < $(".Contenedor-lema").offset().top ){

  				$("#fixed").removeClass("fixmenu-stick");

  			}
  	
  		})

	});