	var validator;

	$('.cancelar').click( function () {
		loadUrl('mtto','../catalogos/usuarios.jsp');
	});
	
	
	$('#datosRol').submit (function(event) {

		$('input[type=text],[type=checkbox]').val (function () {
		    return this.value.toUpperCase();
		});
		
		if ($('#datosRol').valid()){
			openBlock();
			
			$.ajax({
	   	        url: '../../../myApp/CatUsuarios.do',
	   	        data: $(this).serialize(),
	   	        contentType: 'application/json; charset=utf-8',
	   	        success: function (response) {
	   	        	$.unblockUI();
	   	        	console.log(response);
	   	        	
	   	        	openDialogAlert(response.mensaje, response.exito);
	   	        },
	   	        error: function (error) {
	   	        	$.unblockUI();
	   	        	openDialogAlert("Hubo un error al tratar de borrar el usuario", "N");
	   	        } 
	    	});  			
		}
		
		event.preventDefault();
	});

    var handleUniform = function () {
        if (!jQuery().uniform) {
            return;
        }
        if (test = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle)")) {
            test.uniform();
        }
    };
    
    var handleToggleButtons = function () {
        if (!jQuery().toggleButtons) {
            return;
        }
        
        $('#habilitarCheckbox').toggleButtons({
            width: 100,
            label: {
                enabled: "SI",
                disabled: "NO"
            }/*,
            style: {
                enabled: "info",
                disabled: ""
            } */
        });
        

    };    

	
    jQuery(document).ready(function() {
    	handleToggleButtons();
    	handleUniform();
    	
    	validaCaracter('idRegla', 'numLetS');
        validaCaracter('idDescripcion', 'numLet');
        validaCaracter('idPrioridad', 'num');
        validaCaracter('idEcuacion', 'numLet');
        validaCaracter('idInterface', 'numLet');

    	validator = $("#datosRol").validate({
    		debug: false,
    		errorClass: 'error',
    		errorElement: "span",
    		errorContainer: $(".controls-group"),
    		errorPlacement: function(error, element) {
    		   error.appendTo(element.parent("div"));
    		},  
    		success: function(label) {
    			label.remove();
    		},
    		rules: {
    			idRol: {
    				required: true,
    				maxlength: 15
    			},

    			descripcion: {
    				required: true,
    				maxlength: 50
    			}
    		}
    	});    	
    	
    	$('#dialog-alert').on('show.bs.modal', function (event) {
			$(".cerrar").on("click", function(){
				var exito = $(this).attr("data-exito");
				
				$("#dialog-alert").modal('hide');
				if(exito=='S'){
					loadUrl('mtto','../catalogos/usuarios.jsp');
				}
				
			});
    	});
    	
    	
    	$('#idRol').focus();    	
    });
    