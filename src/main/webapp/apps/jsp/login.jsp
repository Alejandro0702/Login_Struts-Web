<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	response.setHeader("Cache-Control", "no-Cache");
	response.setHeader("Pragma", "No-cache");
%>    
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title> Login de Usuario</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
 	<link href="../bibliotecas/bootstrap/css/bootstrap.min.css" rel="stylesheet" />     	
	<link href="../bibliotecas/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" />
	<link href="../bibliotecas/data-tables/DT_bootstrap.css" rel="stylesheet" />
	<link href="../bibliotecas/data-tables/jquery.dataTables.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="../bibliotecas/bootstrap-toggle-buttons/static/stylesheets/bootstrap-toggle-buttons.css" />
	<link rel="stylesheet" type="text/css" href="../bibliotecas/chosen-bootstrap/chosen/chosen.css" />
	<link href="../bibliotecas/font-awesome/css/font-awesome.css" rel="stylesheet" />
	<link href="css/styles.css" rel="stylesheet" />
	<link type="text/css" rel="stylesheet" href="../bibliotecas/jquery-ui-1.9.2/base/jquery-ui.css" />
	<link href="../css/style_responsive.css" rel="stylesheet" />
	<link href="../css/style_navy-blue.css" rel="stylesheet" id="style_color" />
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <link href="font-awesome.min.css" rel="stylesheet" />
    <script src="../bibliotecas/bootstrap/js/bootstrap.min.js"></script>
    <link href="../css/login.css" rel="stylesheet" />

</head>
<!-- END HEAD -->


<body class="">

<div id="id01" class="modalLogin">
	
  <form id="fmaLogin" class="modalLogin-content animate" action="" style="width: 350px">
  <div class="alert alert-success" style="display: none;">
		<strong>Movimiento Exitoso!</strong> <span id="successAlert"></span>
	</div>
	<div class="alert alert-error" style="display: none;">
		<strong>Error!</strong> <span id="errorAlert"></span>
	</div>		
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="../img/user.png" alt="Avatar" class="avatar">
    </div>

    <div class="containerLg">
      <label><b>Usuario</b></label>
      <input type="text" placeholder="Ingrese su Usuario" name="usuario" required>

      <label><b>Contraseña</b></label>
      <input type="password" placeholder="Ingrese su Contraseña" name="contrasena" required>
        
      <button type="submit" >Login</button>
      <input type="checkbox" > Guardar Usuario y Contraseña
    </div>

    <div class="containerLg" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancelar</button>
    <!--   <span class="psw">Forgot <a href="#">password?</a></span>--> 
    </div>
     
    
  </form>
</div>

	
	
	<!-- END FOOTER -->
	<!-- BEGIN JAVASCRIPTS -->
	<!-- Load javascripts at bottom, this will reduce page load time -->
	<script src="../js/jquery-1.8.3.min.js"></script>
	<script src="../js/jquery.js"></script>
	<script src="../js/jquery-ui.js"></script>
	<script src="../bibliotecas/jquery-slimscroll/jquery-ui-1.9.2.custom.min.js"></script>
	<script src="../bibliotecas/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="../bibliotecas/fullcalendar/fullcalendar/fullcalendar.min.js"></script>
	<script src="../bibliotecas/bootstrap/js/bootstrap.min.js"></script>
	<script src="../js/jquery.blockui.js"></script>
	<script src="../js/jquery.cookie.js"></script>
	<script src="../bibliotecas/jquery-knob/js/jquery.knob.js"></script>
	<script src="../bibliotecas/flot/jquery.flot.js"></script>
	<script src="../bibliotecas/flot/jquery.flot.resize.js"></script>
    <script src="../bibliotecas/flot/jquery.flot.pie.js"></script>
    <script src="../bibliotecas/flot/jquery.flot.stack.js"></script>
    <script src="../bibliotecas/flot/jquery.flot.crosshair.js"></script>
	<script src="../js/jquery.peity.min.js"></script>
	<script type="text/javascript" src="../bibliotecas/chosen/chosen.jquery.min.js"></script>
	<script type="text/javascript" src="../bibliotecas/uniform/jquery.uniform.min.js"></script>
    <script type="text/javascript" src="../bibliotecas/data-tables/jquery.dataTables.min.js"></script>   
    <script src="../bibliotecas/fancybox/source/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="../bibliotecas/data-tables/dataTables.rowsGroup.js"></script>
    <script type="text/javascript" src="../bibliotecas/data-tables/DT_bootstrap.js"></script>
    <script type="text/javascript" src="../bibliotecas/bootstrap-toggle-buttons/static/js/jquery.toggle.buttons.js"></script>
    <script src="../js/jquery.blockui.js"></script>
   	<script type="text/javascript" src="../bibliotecas/uniform/jquery.uniform.min.js"></script>	
    <script src="../js/basicScript.js"></script>
	<script src="../js/scripts.js"></script>
    <script type="text/javascript" src="../../js/plugins/charts/sparkline.min.js"></script>	
	<script type="text/javascript" src="js/plugins/forms/select2.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/inputmask.js"></script>
    <script type="text/javascript" src="js/plugins/forms/autosize.js"></script>
    <script type="text/javascript" src="js/plugins/forms/inputlimit.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/listbox.js"></script>
    <script type="text/javascript" src="js/plugins/forms/multiselect.js"></script>
    <script type="text/javascript" src="js/plugins/forms/validate.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/tags.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/switch.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/uploader/plupload.full.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/uploader/plupload.queue.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/wysihtml5/wysihtml5.min.js"></script>
    <script type="text/javascript" src="js/plugins/forms/wysihtml5/toolbar.js"></script>
    <script type="text/javascript" src="js/plugins/interface/daterangepicker.js"></script>
    <script type="text/javascript" src="js/plugins/interface/fancybox.min.js"></script>
    <script type="text/javascript" src="js/plugins/interface/moment.js"></script>
    <script type="text/javascript" src="js/plugins/interface/jgrowl.min.js"></script>
    <script type="text/javascript" src="js/plugins/interface/datatables.min.js"></script>
    <script type="text/javascript" src="js/plugins/interface/colorpicker.js"></script>
    <script type="text/javascript" src="js/plugins/interface/fullcalendar.min.js"></script>
    <script type="text/javascript" src="/js/plugins/interface/timepicker.min.js"></script>	
	<script src="js/index.js"></script>
	
    <script type="text/javascript">
    	
		var modal = document.getElementById('id01');
		document.getElementById('id01').style.display='block';
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		
		    if (event.target == modal) {
		    	
		        modal.style.display = "none";
		       
		    }
		};
		
		
	
    </script>	
	
</body>
<!-- END BODY -->
</html>