/**
 * 
 */
/**
 * @author ishai
 *
 */
package bd;

import java.sql.*;
import javax.swing.JOptionPane;

public class ConexionMysql {

   public String db="test";
   public String url="jdbc:mysql://localhost:3306/"+db;
   public String user="root";
   public String pass="";
   
   /*public String db="test";
   public String url="jdbc:mysql://localhost/"+db;
   public String user="root";
   public String pass="";*/


   public Connection conectar(){

       Connection link=null;
         
       try {
           //Carga el Driver de MySQL
           Class.forName("org.gjt.mm.mysql.Driver");

           //Crea un enlace hacia la base de datos
           link=DriverManager.getConnection(url,user,pass);
           System.out.println("CONECTADO - ConexionMysql");
           
       } catch (Exception ex) {
    	   System.out.println("ERROR DE CONEXION - ConexionMysql" + ex.toString());
           JOptionPane.showMessageDialog(null, "Hola - conectar error.....");
           JOptionPane.showMessageDialog(null, ex);
       }


       return link;

   }//LLAVA METODO

}//CLASE
