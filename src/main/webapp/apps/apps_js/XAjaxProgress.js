AjaxProgressStart = function(idDiv){
	if(!idDiv) idDiv = 'AjaxProgressDiv';
	var objDiv = document.getElementById("AjaxProgressDiv"+idDiv);
	if(objDiv==null){
	    objDiv = document.createElement("div");
	    objDiv.id = "AjaxProgressDiv"+idDiv;
	    objDiv.style.position = "absolute";
	    objDiv.style.right = "2px";
	    objDiv.style.top = document.documentElement.scrollTop + 2 + "px";
	    objDiv.style.width = "200px";
	    objDiv.style.height = "16px";
	    objDiv.style.padding = "2px";
	    objDiv.style.verticalAlign = "bottom";
	    objDiv.style.backgroundColor="#cde4f7";

	    objDiv.innerHTML = "<img style='VERTICAL-ALIGN:top' src='../zntimg/ajax-loader.gif'> Espere un Momento...";
	    document.body.appendChild(objDiv);

		var objDiv = document.getElementById("AjaxProgressDiv"+idDiv);
	    
		if(objDiv.filters && !objDiv.style.filter){
			//objDiv.style.filter="alpha(opacity=60)";
		}else{
			objDiv.style.opacity=0.6;
		}
	}
};

AjaxProgressStop = function(idDiv){
	if(!idDiv) idDiv = 'AjaxProgressDiv';
	var objDiv = document.getElementById("AjaxProgressDiv"+idDiv);
	if(objDiv!=null){
	    objDiv = document.body.removeChild(objDiv);
	}
};