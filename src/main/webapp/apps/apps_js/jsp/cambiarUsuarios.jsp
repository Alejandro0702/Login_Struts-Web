<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%
	response.setHeader("Cache-Control", "no-Cache");
	response.setHeader("Pragma", "No-cache");
	String idObjeto = request.getParameter("idObjeto")!=null?request.getParameter("idObjeto"):"";
	
%>

<%@include file="/apps/apps_jsp/incluirInicio.jsp"  %>
	<div class="container-fluid">
				<!-- BEGIN PAGE HEADER-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Cambio de Usuarios
						</h3>
						
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->
				<div id="page" class="dashboard">
                    <form id="datosCambiarRegla" method="post">
					<div class="row-fluid">
                        <div class="span12">
                            <!-- BEGIN Datos Genearles widget-->
                            <div class="widget">
                                <div class="widget-title">
                                    <h4><i class="icon-reorder"></i> Cambio de Usuarios </h4>
                                        <span class="tools">
                                            <a class="icon-chevron-down" href="javascript:;"></a>
                                            <!--  <a class="icon-remove" href="javascript:;"></a>  -->
                                        </span>
                                </div>
                                <div class="widget-body" style="display: block;">
                                	<div class="alert alert-error" style="display: none;">
										<button data-dismiss="alert" class="close">×</button>
										<strong>Error!</strong> <span id="errorAlert"></span>
									</div>
                                  <table style="width:100%">
                                  	<tr>
                                  		<td colspan="3">
		                                	<div class="control-group" style="margin-bottom:0px;position: absolute;visibility: hidden">
				                              <label class="control-label">Id de Usuario: </label>
				                              <div class="controls">
				                                 <input type="text" class="span2"  id="idUsuario" maxlength="20" name="idUsuario" title="Ingresar Id de Usuario v&#225;lido" readonly/>
				                              </div>
				                           </div>                                  		
                                  		</td>
                                  	</tr>
                                  	 <tr>
                                  		<td>
											<div class="control-group" style="margin-bottom:0px;">
				                              <label class="control-label">Usuario:</label>
				                              <div class="controls">
				                                 <input type="text" class="span2" maxlength="10" id="cveUsuario" name="cveUsuario"  title="Ingresar un valor de Usuario v&#225;lido"/>
				                              </div>
				                            </div>	                                  		
                                  		</td>
                                  	</tr>
									<tr>
                                  		<td>
											<div class="control-group" style="margin-bottom:0px;">
				                              <label class="control-label">Nombre: </label>
				                              <div class="controls">
				                                 <input type="text" class="span5" maxlength="50" id="nombre" name="nombre"  title="Ingresar un valor de Descripci&oacute;n v&#225;lido"/>
				                              </div>
				                            </div>	                                  		
                                  		</td>
                                  	</tr>
                                  </table>
                                </div>
                            </div>
                            <!-- END Datos Generales widget-->
                            
                            <div class="form-actions center">
                              <button class="btn cancelar" type="button"><i class="icon-ban-circle icon-white"></i> Cancelar</button>
                              <button class="btn btn-success aceptar" type="submit"><i class="icon-ok icon-white"></i> Aceptar</button>  <!--  -->
                           </div>
                        </div>
                    </div>
					<input type="hidden" id="opcion" name="opcion" value="cambio" />
					<input type="hidden" id="idObjeto" name="idObjeto" value="<%=idObjeto%>"/>
				</form>
		
				</div>
				<!-- END PAGE CONTENT-->
				<div id="dialog-alert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true"></div>
			</div>
	<%@include file="/apps/apps_jsp/incluirFin.jsp"  %>
  	<script src="../../js/catalogos/cambiarUsuarios.js"></script>