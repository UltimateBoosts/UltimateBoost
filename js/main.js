$(function ()
	{
		$(".aniServicios").hover(function(){
			$(this).find("p").show("slide");
		},function(){$(this).find("p").hide("slide");});
	});