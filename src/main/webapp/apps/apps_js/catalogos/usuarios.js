var oTable;

	function openAlert(type){
		
		$(".alert-"+type).fadeTo(7000, 3000).slideUp(1000, function(){
		    $(".alert-"+type).slideUp(5000);
		});
		
	}

    function openDialogBorrar(clave, descripcion){
    	$("#clave").val(clave);

   	 	var dialogConfirm =	'<div class="modal-header">'+
   	 						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">�</button>'+
							'<h3 id="myModalLabel3">Eliminar Usuario</h3>'+
							'</div>'+
							'<div class="modal-body">'+
							'<p>Desea eliminar Usuario <b>' + descripcion + '</b>?</p>'+
							'</div>'+
							'<div class="modal-footer">'+
							'<button class="btn" data-dismiss="modal" aria-hidden="true">Cancelar</button>'+
							'<button class="btn btn-primary delete" data-idrol="' + descripcion + '">Aceptar</button>'+
							'</div>';
		dialogConfirm = dialogConfirm.replace(/rolid/g,clave);
		var dialogoMovimientos = $('#dialog-alert').html(dialogConfirm);
		dialogoMovimientos.modal();
	}

    var handleTable = function () {    	
        if (!jQuery().dataTable) {
            return;
        }
        //openBlock();
        oTable = $('#sample_1').dataTable({
        	"retrieve": true,
            "sPaginationType": "bootstrap",
            "sAjaxSource": "../../../myApp/CatUsuarios.do",
            "aaSorting": [[ 3, "asc" ]],
            "fnInitComplete": function(oSettings, json) {
					$.unblockUI();
					
					if($("#btnAgregarRegla").length==0){
						
							$("#sample_1_wrapper > .row-fluid:first-child").append('<button class="btn" id="btnAgregarRegla" style="float:right;"><i class="icon-plus icon-white"></i> Agregar</button>');
							$('#btnAgregarRegla').click( function () {
								loadUrl('mtto','../catalogos/agregarUsuarios.jsp');
							});
						
						
					}
				
      	  	},
           /* "oLanguage": {
                "sUrl": "../../../assets/data-tables/Spanish.json"
            },*/
            "oLanguage": {
                "sUrl": "../../../bibliotecas/data-tables/Spanish.json"
            },
            "aoColumnDefs": [ {
                "targets": 4,
                "bSortable": false,
                "searchable": false,
                "sClass": "alingCenter",             
                "render": function ( data, type, row ) {
                	
               	 		return '<div class="center"><button class="btn btn-mini btn-primary" onclick="loadUrl(\'mtto\',\'../catalogos/cambiarUsuarios.jsp?idObjeto='+row[0]+'\');"><i class="icon-pencil icon-white"></i> Cambiar</button>&nbsp;<button class="btn btn-mini btn-danger" onclick="openDialogBorrar(\''+row[0]+'\',\''+row[1]+'\');"><i class="icon-remove icon-white"></i> Borrar</button></div>';
                		return '<div class="center"><button class="btn btn-mini btn-danger" onclick="openDialogBorrar(\''+row[0]+'\',\''+row[1]+'\');"><i class="icon-remove icon-white"></i> Borrar</button></div>';
                }
            },
            	{
            		"targets": [ 0 ],
                	"visible": false,
                	"searchable": false
            	}
               ],
	      	"fnServerParams": function ( aoData ) {
	      		  aoData.push( { "name": "opcion", "value": "getRows" } );
	         } 
        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("input-medium"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("input-mini"); // modify table per page dropdown  

    };
    
    jQuery(document).ready(function() {
    	handleTable();
    	$('#dialog-alert').on('show.bs.modal', function (event) {
			$(".delete").on("click", function(){
				var descri = $("#clave").val();
				$("#dialog-alert").modal('hide');
				//openBlock();

				$.ajax({
	       	        url: '../../../myApp/CatUsuarios.do',
	       	        data: { opcion:'eliminar', idUsuario: descri} ,
	       	        contentType: 'application/json; charset=utf-8',
	       	        success: function (response) {
	       	        	$.unblockUI();
	       	        	
	       	        	if(response.exito=="S"){
	       	        		oTable.DataTable().ajax.reload();
	       	        		$("#successAlert").html(response.mensaje);
	       	        		openAlert("success");
	       	        	}else{
	       	        		$("#errorAlert").html(response.mensaje);
	       	        		openAlert("error");
	       	        	}
	       	        	
	       	        },
	       	        error: function (error) {
	       	        	$.unblockUI();
	       	        	$("#errorAlert").html("Hubo un error al tratar de borrar el usuario");
	       	        	//$(".alert-error").css("display", "block");
	       	        	openAlert("error");
	       	        } 
	        	});				
				
			});
		        	
		});
    });