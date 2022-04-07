package action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.Action;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.json.simple.JSONObject;

public class UsuariosAction extends Action{
	
	public ActionForward execute(final ActionMapping mapping, final ActionForm form, final HttpServletRequest request, final HttpServletResponse response) throws Exception {
		
		JSONObject jsonObject = new JSONObject();
		String usuario = request.getParameter("usuario")!=null?request.getParameter("usuario").toString():"";
		String contrasena = request.getParameter("contrasena")!=null?request.getParameter("contrasena").toString():"";
		System.out.println("contrasena.........."+contrasena);
		System.out.println("usuario.........."+usuario);
		jsonObject = new consultas.UsuariosBD().consulta(usuario,contrasena);
		System.out.println(jsonObject);
		
		request.setAttribute("respuesta", jsonObject);
		return mapping.findForward("json");
	}
}