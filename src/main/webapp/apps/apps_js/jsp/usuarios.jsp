
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%
	response.setHeader("Cache-Control", "no-Cache");
	response.setHeader("Pragma", "No-cache");
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>ABC Usuarios</title>

<%@include file="/apps/apps_jsp/incluirInicio.jsp"  %>

</head>

<body class="fixed-top">
	<div class="container-fluid">
	
				<div id="mtto" class="dashboard">
					<div class="row-fluid">
                        <div class="span12">
                            <!-- BEGIN EXAMPLE TABLE widget-->
                            <div class="span12">
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Catálogo de Usuarios
						</h3>
						
					</div>
                            <div class="widget">
                                <div class="widget-title">
                                    <h4><i class="icon-reorder"></i> Usuarios</h4>
                                        <span class="tools">
                                            <a class="icon-chevron-down" href="javascript:;"></a>
                                        </span>
                                </div>
                                <div class="widget-body" >
                                	<div class="alert alert-success" style="display: none;">
										<button data-dismiss="alert" class="close">×</button>
										<strong>Movimiento Exitoso!</strong> <span id="successAlert"></span>
									</div>
									<div class="alert alert-error" style="display: none;">
										<button data-dismiss="alert" class="close">×</button>
										<strong>Error!</strong> <span id="errorAlert"></span>
									</div>									
                                	
                                    <div role="grid" class="dataTables_wrapper form-inline" id="sample_1_wrapper" style="margin-top:10px;">
                                    <table width="100%"  id="sample_1" class="table table-striped table-striped table-bordered table-hover">
                                        <thead>
                                        <tr role="row">
                                        	<th class="hidden-phone sorting" role="columnheader" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 1%;">Id de Usuario</th>
                                        	<th class="hidden-phone sorting" role="columnheader" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 15%;">Usuario</th>
                                        	<th class="hidden-phone sorting" role="columnheader" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 30%;">Nombre</th>
                                        	<th class="hidden-phone" role="columnheader" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 15%;">Fecha</th>
                                        	<th class="hidden-phone" role="columnheader" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 15%;">Opciones</th>
                                        	</tr>
                                        </thead>
                                        
                                    	<tbody role="alert" aria-live="polite" aria-relevant="all">
                                    	</tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                            <!-- END EXAMPLE TABLE widget-->
                        </div>
                    </div>
                    <div id="dialog-alert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true"></div>
				</div>
				<!-- END PAGE CONTENT-->
			</div>
            <input type="hidden" id="clave" name="clave"/>
        </body>  
   
	<%@include file="/apps/apps_jsp/incluirFin.jsp"  %>
	<script src="/apps/apps_js/catalogos/usuarios.js"></script>
 </html>  
	
	