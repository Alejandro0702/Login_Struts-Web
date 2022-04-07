<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%
	response.setHeader("Cache-Control", "no-Cache");
	response.setHeader("Pragma", "No-cache");
%>
	<div id="sidebar" class="nav-collapse collapse">
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
			<div class="sidebar-toggler hidden-phone"></div>
			<!-- BEGIN SIDEBAR TOGGLER BUTTON -->

			<!-- BEGIN SIDEBAR MENU -->
			<ul class="sidebar-menu">
				<li class="has-sub active gestionUsuariosM open">
					<a href="javascript:;" class="">
					    <span class="icon-box"> <i class="icon-tasks"></i></span>Gestionar Usuarios
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub gestionUsuarios">
                        <li class="active usuarios"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'usuarios')"><i class="icon-cogs"></i>Usuarios</a></li>
                        <li class="roles"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'roles');"><i class="icon-user"></i>Roles</a></li>
                        <li class="grupos"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'grupos');"><i class="icon-group"></i>Grupos</a></li>
                        <li class="departamentos"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'departamentos');"><i class="icon-sitemap"></i>Departamentos</a></li>
                        <li class="perfiles"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'perfiles');"><i class="icon-user"></i>Perfiles</a></li>
                        <li class="permisos"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'permisos');"><i class="icon-lock"></i>Permisos</a></li>
                        <li class="pantallas"><a class="" href="javascript:cambiaOpcionSoluciona('gestionUsuarios', 'pantallas');"><i class="icon-columns"></i>Pantallas</a></li>
                    </ul>
				</li>
				<li class="has-sub gestionPulsosM">
					<a href="javascript:;" class="">
					    <span class="icon-box"> <i class="icon-tasks"></i></span>Gestionar Pulsos
                        <span class="arrow"></span>
					</a>
                    <ul class="sub gestionPulsos">
                        <li class="pulsos"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'pulsos')"><i class="icon-th-list"></i>Pulsos</a></li>
                        <li class="causas"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'causas')"><i class="icon-list"></i>Causas</a></li>
                        <li class="motivos"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'motivos')"><i class="icon-th-list"></i>Motivos</a></li>
                        <li class="apoyos"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'apoyos')"><i class="icon-list"></i>Apoyos</a></li>
                        <li class="argumentos"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'argumentos')"><i class="icon-th-list"></i>Argumentos</a></li>
                        <li class="modulos"><a href="javascript:cambiaOpcionSoluciona('gestionPulsos', 'modulos')"><i class="icon-list"></i>M&oacute;dulos</a></li>
                    </ul>					
				</li>
				<li class="has-sub gestionSignosVitalesM">
					<a href="javascript:;" class="">
					    <span class="icon-box"> <i class="icon-tasks"></i></span>Signos Vitales
                        <span class="arrow"></span>
					</a>
                    <ul class="sub gestionSignosVitales">
						<li class="active catalogoreglas"><a href="javascript:cambiaOpcionSoluciona('gestionSignosVitales', 'catalogoreglas')"><i class="icon-th-list"></i>Cat&aacute;logo de reglas</a></li>
						<li class="programasVsRecursos"><a href="javascript:cambiaOpcionSoluciona('gestionSignosVitales', 'programasVsRecursos')"><i class="icon-list"></i>Recursos vs Programas</a></li>
						<li class="reglasVsRecursos"><a href="javascript:cambiaOpcionSoluciona('gestionSignosVitales', 'reglasVsRecursos')"><i class="icon-th-list"></i>Reglas vs Recursos</a></li>
						<li class="reglasVsFamilias"><a href="javascript:cambiaOpcionSoluciona('gestionSignosVitales', 'reglasVsFamilias')"><i class="icon-list"></i>Reglas vs Familias</a></li>
						<li class="errorVsApoyo"><a href="javascript:cambiaOpcionSoluciona('gestionSignosVitales', 'errorVsApoyos')"><i class="icon-th-list"></i>Error vs Apoyos</a></li>
                    </ul>					
				</li>
				<li class="has-sub gestionGeneralesM">
					<a href="javascript:;" class="">
					    <span class="icon-box"> <i class="icon-tasks"></i></span>Conf Generales
                        <span class="arrow"></span>
					</a>
                    <ul class="sub gestionGenerales">
						<li class="mosvconfig"><a href="javascript:cambiaOpcionSoluciona('gestionGenerales', 'mosvconfig')"><i class="icon-th-list"></i>mosvconfig</a></li>
                    </ul>					
				</li>				
	<!-- 			<li class="has-sub gestionSondeoM">
					<a href="javascript:;" class="">
					    <span class="icon-box"> <i class="icon-tasks"></i></span>Gestionar Sondeo
                        <span class="arrow"></span>
					</a>
                    <ul class="sub gestionSondeo">
                   		<li class="sondeo"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'sondeo')"><i class="icon-th-list"></i>Sondeo</a></li>
                        <li class="servicio"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'servicio')"><i class="icon-th-list"></i>Servicios</a></li>
                        <li class="diagnostico"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'diagnostico')"><i class="icon-th-list"></i>Diagnosticos</a></li>
                        <li class="escenario"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'escenario')"><i class="icon-th-list"></i>Escenarios</a></li>
                        <li class="workflow"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'workflow')"><i class="icon-th-list"></i>WorkFlow</a></li>
                        <li class="evento"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'evento')"><i class="icon-th-list"></i>Eventos</a></li>
                        <li class="checklist"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'checklist')"><i class="icon-th-list"></i>Checklist</a></li>
                        <li class="accion"><a href="javascript:cambiaOpcionSondeo('gestionSondeo', 'accion')"><i class="icon-th-list"></i>Acciones</a></li>
                    </ul>					
				</li>   -->
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>