$(function (){

$(window).scroll(function() {
  		
  		
	var scrolltop =$(this).scrollTop();

	if( scrolltop < $(".contactenos").offset().top -1)
  				{
  					$(".lservicios").addClass("current-link");
  					$(".lcontac").removeClass("current-link");
  				}
  	if( scrolltop >= $(".contactenos").offset().top -1)
  				{
  					$(".lservicios").removeClass("current-link");
  					$(".lcontac").addClass("current-link");
  				}

  	});

	$('.aniscroll').click(function(e) {
						e.preventDefault();
						pag= $(this).attr("href");

                        $('body,html').animate({scrollTop: $(pag).offset().top },"slow");
                    });
	});