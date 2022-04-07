<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%><%
    response.setHeader("Cache-Control", "no-Cache"); 
	response.setHeader("Pragma", "No-cache"); 
%><%=request.getAttribute("respuesta")%>