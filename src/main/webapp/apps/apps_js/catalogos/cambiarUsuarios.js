/**
 * 
 */
	var validator;


	$('#datosCambiarRegla').submit (function(event) {
		$('input[type=text]').val (function () {
		    return this.value.toUpperCase();
		});
		
		if ($('#datosCambiarRegla').valid()){
			//openBlock();
      
			$.ajax({
	   	        url: '../../../myApp/CatUsuarios.do',
	   	        data: $(this).serialize(),
	   	        contentType: 'application/json; charset=utf-8',
	   	        success: function (response) {
	   	        	$.unblockUI();
	   	        	openDialogAlert(response.mensaje, response.exito);
	   	        },
	   	        error: function (error) {
	   	        	$.unblockUI();
	   	        	openDialogAlert("Hubo un error al tratar de modificar el usuario", "N");
	   	        } 
	    	});  			
		}
		
		event.preventDefault();
	});	
	
	$('.cancelar').click( function () {
		loadUrl('mtto','../catalogos/usuarios.jsp');
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
            }
        });
        

    }; 
	

 jQuery(document).ready(function() {
//   openBlock();
    handleUniform();
	var codigo = $("#idObjeto").val();
	alert(codigo);
	 $.ajax({
   	        url: '../../../myApp/CatUsuarios.do?opcion=consultar',
   	        data: { 
   	        	idObjeto: codigo} ,
   	        contentType: 'application/json; charset=utf-8',
   	        success: function (response) {
   	        		$("#idUsuario").val(response.idUsuario);
        			$("#nombre").val(response.nombre);
        			$("#cveUsuario").val(response.cveUsuario);
   	        	handleToggleButtons();
   	        	$.unblockUI();
   	        },
   	        error: function (error) {
   	        	$.unblockUI();
   	        } 
    	});
	 
	 
	   	validator = $("#datosCambiarRegla").validate({
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
    	
 });
		