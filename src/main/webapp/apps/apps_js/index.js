var oTable;
	
	function openAlert(type){
		
		$(".alert-"+type).fadeTo(7000, 3000).slideUp(1000, function(){
		    $(".alert-"+type).slideUp(5000);
		});
		
	}

	function loadUrl(div, url){
		$('#'+div).load(url);

	}
    	 $('#fmaLogin').submit (function(event) {
    		
    			openBlock();
    			$('input[type=text]').val (function () {
    			    return this.value.toUpperCase();
    			});
    			if ($('#fmaLogin').valid()){
    				$.ajax({
    		   	        url: '../myApp/usuario.do?opcion=consulta',
    		   	        data: $(this).serialize(),
    		   	        contentType: 'application/json; charset=utf-8',
    		   	        success: function (response) {
    		   	        	if(response.exito=="S"){
    		   	        		$.unblockUI();
    		       	        		//oTable.DataTable().ajax.reload();
    		       	        	//	$("#successAlert").html(response.mensaje);
    		       	        		modal.style.display = "none";
    		       	        		openAlert("success");
    		       	        		//loadUrl('login','portal.jsp');

    		       	        	}else{
    		       	        		$.unblockUI();
    		       	        		$("#errorAlert").html(response.mensaje);
    		       	        		openAlert("error");
    		       	        	}
    		   	        },
    		   	        error: function (error) {
	
						//alert("El Usuario o Contraseña son Icorrectos", "N");
						//let f = document.getElementById("E").style.display = "block";
						//document.getElementById("errorAlert").innerHTML = "El Usuario o Contraseña son Icorrectos";
    		   	        	$.unblockUI();
    		   	        	openDialogAlert("El Usuario o Contraseña son Icorrectos", "N");
    		   	        } 
    		    	});  			
    			}
    			
    			event.preventDefault();
    		});	