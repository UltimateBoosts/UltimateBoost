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
  			if( scrolltop == $("body").offset().top )
  				{
  					$(".lservicios").removeClass("current-link");
  					$(".lbody").addClass("current-link");
  					$(".lproyec").removeClass("current-link");
  					$(".lequipo").removeClass("current-link");
  					$(".lcontac").removeClass("current-link");
  				}
  			if( scrolltop >= $(".Contenedor-lema").offset().top -1)
  				{
  					$(".lservicios").addClass("current-link");
  					$(".lbody").removeClass("current-link");
  					$(".lproyec").removeClass("current-link");
  					$(".lequipo").removeClass("current-link");
  					$(".lcontac").removeClass("current-link");

  				}
  			if( scrolltop >= $("#proyectos").offset().top -1)
  				{
  					$(".lservicios").removeClass("current-link");
  					$(".lbody").removeClass("current-link");
  					$(".lproyec").addClass("current-link");
  					$(".lequipo").removeClass("current-link");
  					$(".lcontac").removeClass("current-link");
  				}
  			if( scrolltop >= $("#equipo").offset().top -1)
  				{
  					$(".lservicios").removeClass("current-link");
  					$(".lbody").removeClass("current-link");
  					$(".lproyec").removeClass("current-link");
  					$(".lequipo").addClass("current-link");
  					$(".lcontac").removeClass("current-link");
  				}
  			if( scrolltop >= $(".contactenos").offset().top -1)
  				{
  					$(".lservicios").removeClass("current-link");
  					$(".lbody").removeClass("current-link");
  					$(".lproyec").removeClass("current-link");
  					$(".lequipo").removeClass("current-link");
  					$(".lcontac").addClass("current-link");
  				}

  		
  		})

  	$('.Menu-link').click(function(e) {
						e.preventDefault();
						pag= $(this).attr("href");

                        $('body,html').animate({scrollTop: $(pag).offset().top },"slow");
                    });
	});