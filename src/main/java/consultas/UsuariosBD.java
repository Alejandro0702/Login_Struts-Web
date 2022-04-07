package consultas;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.json.simple.JSONObject;

import bd.ConexionMysql;

public class UsuariosBD {
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public JSONObject consulta(String usuario, String password){
		JSONObject datos = new JSONObject();
		String exito="N", mensaje="El Usuario o la contrase�a son Incorrectos";
		ArrayList datosUsuario = new ArrayList();
		String pwdUsr = "";
		String idUsuario = "";
		Connection con = null;
		String esquema = "";
		String nomUsuario = "";
		try{
			ConexionMysql conMysql = new ConexionMysql();
			con = conMysql.conectar();
			esquema = "test";
			
			datosUsuario = getDatosUsuario(usuario, con, esquema);
			if(datosUsuario.size()>0){
				
				idUsuario  = datosUsuario.get(0).toString().trim();
				nomUsuario = datosUsuario.get(1).toString().trim();
				pwdUsr = datosUsuario.get(2).toString().trim();
				
				datos.put("mensaje","El Usuario y Contrase�a Correctos");
	   			datos.put("exito","S");
	   			datos.put("password", pwdUsr.toString().trim());
	   			datos.put("nomUsuario", nomUsuario.toString().trim());
	   			datos.put("idUsuario", idUsuario.toString().trim());
	   			
			}else{
		   			datos.put("mensaje", "El Usuario o la contrase�a son Incorrectos");
					datos.put("exito","N");
		   		}
		   		

					
		}catch(Exception e){
			e.printStackTrace();
			datos.put("mensaje",mensaje);
			datos.put("exito",exito);
		}finally{
			try{if (con != null){con.close();}con = null;}catch(Exception e){con = null;}
		}
		return datos;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	static ArrayList getDatosUsuario(String usuario, Connection con, String esquema ){
		String pwd = "";
		String idUsuario = "";
		String nombreUsuario = "";
		PreparedStatement st = null;
		ResultSet rs = null;
		ArrayList datosUsuario = new ArrayList();
		
		try {
			
				String query = new StringBuffer("select ID, username, psswrd from ")// 
					.append(esquema).append(".USUARIOS ").append(" where username = ? ").toString();
				st = con.prepareStatement(query);
				System.out.println("query ="+query);
				st.setString(1, usuario);			
				rs = st.executeQuery();
				if(rs.next()){
					idUsuario = rs.getString(1) == null ? "" : rs.getString(1).toString();
					nombreUsuario = rs.getString(2) == null ? "" : rs.getString(2).toString();
					pwd = rs.getString(3) == null ? "" : rs.getString(3).toString();
					
					datosUsuario.add(idUsuario.trim());
					datosUsuario.add(nombreUsuario.trim());
					datosUsuario.add(pwd.trim());
				}
				
				datosUsuario = (ArrayList) datosUsuario.clone();
				System.out.println("datosDelUsuario........"+datosUsuario);
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try{if (rs != null){rs.close();}rs = null;}catch(Exception e){rs = null;}
			try{if (st != null){st.close();}st = null;}catch(Exception e){st = null;}
	    		
		}
		return datosUsuario;
	}
	
	

}
