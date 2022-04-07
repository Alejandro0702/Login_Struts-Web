/**
 * 
 */
/**
 * @author ishai
 *
 */
package consultas;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;


import javax.servlet.http.HttpServletRequest;


import org.apache.log4j.Logger;
import org.json.simple.JSONObject;

import bd.ConexionMysql;


public class CatUsuariosBean {
	private static final Logger logger = Logger.getLogger(CatUsuariosBean.class.getName());
	private static MessageDigest md;
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public JSONObject consulta(){
		ConexionMysql conMysql = null;
		Connection con = null;
	    StringBuffer sb = new StringBuffer();
	    PreparedStatement st = null;
	    ResultSet rs = null;
	    String esquema = "";
	    ArrayList bResultado = new ArrayList();
		ArrayList row = new ArrayList();
	    JSONObject jsonResultado = new JSONObject();

	    try{
	    	conMysql = new ConexionMysql();
	    	con = conMysql.conectar();
			esquema = "test";
	    	
	    	//sb.append("SELECT ID, PASSWORD, USERNAME FROM ").append(esquema).append(".USUARIOS ");		
			sb.append("SELECT ID, psswrd, USERNAME, FECHA FROM ").append(esquema).append(".USUARIOS ");	
			st = con.prepareStatement(sb.toString());
			
			rs = st.executeQuery();
			
			while (rs.next()) {
				row.add(rs.getString(1).trim());
				row.add(rs.getString(2).trim());
				row.add(rs.getString(3).trim()); 
				row.add(rs.getString(4).trim()); 
			    row.add("");
				
				
			    bResultado.add(row.clone());
	        	row.clear();
			}

	    }catch(Exception e){
	    	e.printStackTrace();
	    	logger.error(e);
	    }finally{
			try{if (rs != null){rs.close();}rs = null;}catch(Exception e){rs = null;}
			try{if (st != null){st.close();}st = null;}catch(Exception e){st = null;}
	    	try{if (con != null){con.close();}con = null;}catch(Exception e){con = null;}
	    		
	    	jsonResultado.put("sEcho",new Integer(1));  
	    	jsonResultado.put("iTotalRecords",new Integer(bResultado.size())); 
	    	jsonResultado.put("iTotalDisplayRecords",new Integer(10)); 
	    	jsonResultado.put("aaData",bResultado);
	    	jsonResultado.put("sEmptyTable", "No se encontraron registros");
	    }
	    
	    System.out.println("jsonResultado.........."+jsonResultado);
		return jsonResultado;
	}
	
	
	@SuppressWarnings("unchecked")
	public JSONObject alta(HttpServletRequest request){
		JSONObject datos = new JSONObject();
		ConexionMysql conMysql = null;
		Connection con = null;
		PreparedStatement pst = null;
		StringBuffer query = null;
		int x = 0;
		String exito="N", mensaje="Error interno de SQL";
		String nombre	= "";
		String usuario = "";
		String contrasena = "";
		String cveUsuario = "";
		Timestamp fecha= null;
		String esquema = "";
		
		try{
			conMysql = new ConexionMysql();
	    	con = conMysql.conectar();
			esquema = "test";
		
			cveUsuario	= request.getParameter("cveUsuario")!=null?request.getParameter("cveUsuario"):"";
			nombre	= request.getParameter("nombre")!=null?request.getParameter("nombre"):"";
			contrasena	= request.getParameter("contrasena")!=null?request.getParameter("contrasena").toString():"";
			usuario 	= request.getRemoteUser()!=null?request.getRemoteUser():"";
			fecha = new Timestamp(System.currentTimeMillis());
			
			query = new StringBuffer("INSERT INTO ").append(esquema).append(".USUARIOS ( ID, USERNAME, PASSWORD, FECHA) ");
			query.append("VALUES (?,?,?,?)");
			pst = con.prepareStatement(query.toString());
			pst.setString(1, cveUsuario);
			pst.setString(2, nombre);
			pst.setString(3, contrasena);

	        pst.setTimestamp(4, new java.sql.Timestamp(new java.util.Date().getTime()));
		    x = pst.executeUpdate();
		    
			exito= x==0?"N":"S";
			mensaje = x==0?"Hubo un error al dar de alta":"El usuario <B>"+nombre+"</B> fue dado de alta correctamente.";

		}catch(SQLException e){
			e.printStackTrace();
			logger.error(e);
			String error = e.getMessage().substring(e.getMessage().indexOf("]")+1);
			mensaje = error;
		}catch(Exception e){
			e.printStackTrace();
			logger.error(e);
		}finally{
			try{if(pst!=null){pst.close(); pst=null;}}catch(Exception ex){ pst=null;}
			try{if(con!=null){con.close(); con=null;}}catch(Exception ex){ con=null;}

			datos.put("mensaje",mensaje);
			datos.put("exito",exito);
		}
		return datos;
	}
	

	public static String encriptaMD5(String pass){
	    try {
	    	int i=0; 
	        md = MessageDigest.getInstance("MD5");
	        byte[] passBytes = pass.getBytes();
	        md.reset();
	        byte[] digested = md.digest(passBytes);
	        StringBuffer sb = new StringBuffer();
	        for(i=0;i<digested.length;i++){
	            sb.append(Integer.toHexString(0xff & digested[i]));
	        }
	        return sb.toString();
	    }
	    catch (NoSuchAlgorithmException e) {
	    	e.printStackTrace();
	    }
	        return null;
	 }
	
	
	@SuppressWarnings("unchecked")
	public JSONObject eliminar(HttpServletRequest request) {
		JSONObject datos = new JSONObject();
		ConexionMysql conMysql = null;
		Connection con = null;
		PreparedStatement pst = null;
		StringBuffer query = null;
		int x = 0;
		String exito="N", mensaje="Error interno de SQL";
		String idUsuario = "";
		String esquema = "";
		
		try{
			conMysql = new ConexionMysql();
	    	con = conMysql.conectar();
			esquema = "test";
			
			idUsuario 	= request.getParameter("idUsuario")!=null?request.getParameter("idUsuario"):"";
			query = new StringBuffer("DELETE FROM ").append(esquema).append(".USUARIOS WHERE ID = ? ");
			pst = con.prepareStatement(query.toString());
			pst.setString(1, idUsuario);
			
		    x = pst.executeUpdate();
		    
		    exito= x==0?"N":"S";
			mensaje = x==0?"No existe Id de Usuario":"El Id de Usuario <B>"+idUsuario+"</B> fue eliminado correctamente";				

		}catch(Exception e){
			e.printStackTrace();
			logger.error(e);
		}finally{
			try{if(pst!=null){pst.close(); pst=null;}}catch(Exception ex){ pst=null;}
			try{if(con!=null){con.close(); con=null;}}catch(Exception ex){ con=null;}

			datos.put("mensaje",mensaje);
			datos.put("exito",exito);
		}
		return datos;
	}	
	
	@SuppressWarnings("unchecked")
	public JSONObject consultaParaCambio(String regla){
		ConexionMysql conMysql = null;
		Connection con = null;
	    StringBuffer sb = new StringBuffer();
	    PreparedStatement st = null;
	    ResultSet rs = null;
	    String esquema = "";
	    JSONObject rol = new JSONObject();
	    
	    try{
	    	
	    	conMysql = new ConexionMysql();
	    	con = conMysql.conectar();
			esquema = "gestiona_citas";
	    	
	    	sb.append("SELECT ID, PASSWORD, USERNAME FROM ").append(esquema).append(".USUARIOS WHERE ID = ? ");
			st = con.prepareStatement(sb.toString());
			st.setInt(1, Integer.parseInt(regla));
			
			rs = st.executeQuery();
			
			if(rs.next()) {
				rol.put("idUsuario", rs.getString(1).trim());
				rol.put("cveUsuario",	rs.getString(2).trim());
				rol.put("nombre",	rs.getString(3).trim());
			}
	    	
	    }catch(Exception e){
	    	e.printStackTrace();
	    	logger.error(e);
	    }finally{
				try{if (rs != null){rs.close();}rs = null;}catch(Exception e){rs = null;}
				try{if (st != null){st.close();}st = null;}catch(Exception e){st = null;}
	    		try{if (con != null){con.close();}con = null;}catch(Exception e){con = null;}
	    }
		return rol;
	}	

	
	@SuppressWarnings("unchecked")
	public JSONObject actualiza(HttpServletRequest request){
		JSONObject datos = new JSONObject();
		ConexionMysql conMysql = null;
		Connection con = null;
		PreparedStatement pst = null;
		StringBuffer query = null;
		int x = 0;
		String exito="N", mensaje="Error interno de SQL";
		String idUsuario		= "";
		String nombre	= "";
		String cveUsuario = "";
		String esquema = "";
		try{
			conMysql = new ConexionMysql();
	    	con = conMysql.conectar();
			esquema = "gestiona_citas";
			
			idUsuario = request.getParameter("idUsuario")!=null?request.getParameter("idUsuario"):"";
			nombre	= request.getParameter("nombre")!=null?request.getParameter("nombre"):"";
			cveUsuario	= request.getParameter("cveUsuario")!=null?request.getParameter("cveUsuario"):"";
			
			if(!idUsuario.equals("")){
				try{		
					query = new StringBuffer("UPDATE ").append(esquema).append(".USUARIOS SET  PASSWORD = ?, USERNAME = ? WHERE ID = ? ");
					pst = con.prepareStatement(query.toString());
					pst.setString(1, cveUsuario);
					pst.setString(2, nombre);
					pst.setString(3, idUsuario);
					
				    x = pst.executeUpdate();
				}catch(Exception ex){
					ex.printStackTrace();
					logger.error(ex);
				}finally{
					try{if(pst!=null){pst.close(); pst=null;}}catch(Exception ex){ pst=null;}
				}
			}
			exito= x==0?"N":"S";
			mensaje = x==0?"Hubo un error al realizar el cambio":" El usuario <B>"+nombre+"</B> fue modificada correctamente.";
		}catch(Exception e){
			e.printStackTrace();
			logger.error(e);
		}finally{
			try{if(con!=null){con.close(); con=null;}}catch(Exception ex){ con=null;}
			datos.put("mensaje",mensaje);
			datos.put("exito",exito);
		}
		return datos;
	}
	
	
}
