$(function ()
	{
			
		var altoPantalla =screen.height;
		var altoMenu=altoPantalla-125;
		var calculoAltoServicios = (altoPantalla*53)/100;
		var altoServicios=calculoAltoServicios+altoPantalla-600;
	
		
		$(window).scroll(function() {
  		
  		
	  		var scrolltop =$(this).scrollTop();
	  	
  			if(scrolltop > altoMenu){

  				$("#fixed").addClass("fixmenu-stick");

  			}
  			if(scrolltop < altoMenu){

  				$("#fixed").removeClass("fixmenu-stick");

  			}
  		
  		})

  	$('.Menu-link').click(function(e) {
						e.preventDefault();
						pag= $(this).attr("href");
						
                        $('body,html').animate({scrollTop: $(pag).offset().top },"slow");
                    });
	});