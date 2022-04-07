function loadUrl(div, url){
	$('#'+div).load(url);
}
function cambiaOpcionSondeo(tipo, opcion){
	
		$(".has-sub").removeClass("active");
		$(".has-sub ul li").removeClass("active");
		
		loadUrl('main-content','sondeo/jsp/'+opcion+'.jsp');
		
		$("."+tipo+"M").addClass("active");
		$("."+opcion).addClass("active");
	}

jQuery(document).ready(function() {
	App.init();
});


