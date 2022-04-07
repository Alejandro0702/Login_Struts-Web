/**
 *  img/loader.gif
 */

function loadUrl(div, url){
	$('#'+div).load(url);
	
//	App.reloadTable(); 
}
	var msg = '<div style="height:50px;margin-top:20px;"><img src="../assets/pre-loader/Sun.gif" align="absmiddle">&nbsp;&nbsp;Por favor espere, procesando...</div>';

	function openBlock(){
		$.blockUI({ 
			message: msg, 
			baseZ: 2000
		});  
	
	}

    var handleWidgetTools = function () {
        jQuery('.widget .tools .icon-remove').click(function () {
            jQuery(this).parents(".widget").parent().remove();
        });

        jQuery('.widget .tools .icon-refresh').click(function () {
            var el = jQuery(this).parents(".widget");
            App.blockUI(el);
            window.setTimeout(function () {
                App.unblockUI(el);
            }, 1000);
        });

        jQuery('.widget .tools .icon-chevron-down, .widget .tools .icon-chevron-up').click(function () {
            var el = jQuery(this).parents(".widget").children(".widget-body");
            if (jQuery(this).hasClass("icon-chevron-down")) {
                jQuery(this).removeClass("icon-chevron-down").addClass("icon-chevron-up");
                el.slideUp(200);
            } else {
                jQuery(this).removeClass("icon-chevron-up").addClass("icon-chevron-down");
                el.slideDown(200);
            }
        });
    };
    
    
    function validaCaracter(element, tipo){
    	if(tipo=='num')
    		$("#"+element).limitkeypress({ rexp: /^[+]?\d*$/ });
    	else if(tipo=='let')
    		$("#"+element).limitkeypress({ rexp: /^[A-Z\u00f1]*$/i });
    	else if(tipo=='letS')
    		$("#"+element).limitkeypress({ rexp: /^[A-Z\u00f1\s]+$/i });
    	else if(tipo == 'numLet')
    		$("#"+element).limitkeypress({ rexp: /^[a-z0-9_\-\/\"\n\&\=\%\;\:\.\,\¿\?\ \[\]\(\)\u00f1\u00e1\u00ed\u00e1\u00e9\u00f3\u00e1\u00fa\u00bf]+$/i });
    	else if(tipo == 'numLetS')
    		$("#"+element).limitkeypress({ rexp: /^[a-z0-9_]+$/i });
    	else if(tipo == 'decimal')
    		$("#"+element).limitkeypress({ rexp: /^[-+]?\d*\.?\d*$/ });
    	else if(tipo == 'url')
    		$("#"+element).limitkeypress({ rexp: /^[a-z0-9_\-\/\"\|\&\=\%\:\.\,\?\ \u00f1\u00e1\u00ed\u00e1\u00e9\u00f3\u00e1\u00fa\u00bf]+$/i });
    	
    }
    

	function openDialogAlert(mensaje, tipo){
		var dialogConfirm =	'<div class="modal-header">'+
								'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
								'<h3 id="myModalLabel3">Mensaje</h3>'+
							'</div>'+
							'<div class="modal-body">'+
							'<p> msg </p>'+
							'</div>'+
							'<div class="modal-footer">'+
							'<button class="btn btn-primary cerrar"  name ="btnAceptar" id="btnAceptar" data-exito="tipo" data-mensaje="msg">Aceptar</button>'+
							'</div>';
	
		

		 dialogConfirm = dialogConfirm.replace(/msg/g,mensaje);
		dialogConfirm = dialogConfirm.replace(/tipo/g,tipo);
		
		var dialogoMovimientos = $('#dialog-alert').html(dialogConfirm);
		dialogoMovimientos.modal();
	
		setTimeout(function() {
			$("#btnAceptar").focus();
        }, 500);
	}    
    
    jQuery(document).ready(function() {
    	handleWidgetTools();

    });