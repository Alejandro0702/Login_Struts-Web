// XAjax.js
	if((typeof includeJS)=='function'){
		includeJS('XAjaxWindow');
	}
	
	function Browser(){
		if(window.XMLHttpRequest){
			navegador=new XMLHttpRequest();
		}else{
			navegador=new ActiveXObject("Microsoft.XMLHTTP");
		}
		return navegador;
	}
	
	function encode( uri ) {
	    if (encodeURIComponent) {
	        return encodeURIComponent(uri);
	    }
	
	    if (escape) {
	        return escape(uri);
	    }
	}

	function getFileds(form) {
	    var result = "";
	    for (var i = 0; i < form.elements.length; i++) {
	        var el = form.elements[i];
	        if (el.tagName.toLowerCase() == "select") {
	            for (var j = 0; j < el.options.length; j++) {
	                var op = el.options[j];
	                if (op.selected)
	                    result += "&" + encode(el.name) + "=" + encode(op.value);
	            }
	        } else if (el.tagName.toLowerCase() == "textarea") {
	            result += "&" + encode(el.name) + "=" + encode(el.value);
	        } else if (el.tagName.toLowerCase() == "input") {
	            if (el.type.toLowerCase() == "checkbox" || el.type.toLowerCase() == "radio") {
	                if (el.checked)
	                    result += "&" + encode(el.name) + "=" + encode(el.value);
	            } else if (el.type.toLowerCase() != "button" || el.type.toLowerCase() == "submit") {
	                result += "&" + encode(el.name) + "=" + encode(el.value);
	            }
	        }
	    }
	    if(result.length>0)
	    	result = result.substring(1, result.length);
	    return result;
	}

	function AjaxUrlAndParams(url, form) {
		if(form){
			var params = getFileds(form);
			if(params!=""){
				if(url.indexOf("?")>=0)
					url= url+"&";
				else
					url= url+"?";
				url= url+params;
			}
		}
		return url;
	}

	function HtmlInject(url, ajax, params){
    	if(params['idDiv'] && params['htmlInject']){
   			if(params['inWindow']){
   				AjaxWindowOpen(ajax.responseText, params['idDiv'] , false, params['inWindow']);
    		}else{
	    		var objDiv = document.getElementById(params['idDiv']);
	    		if(objDiv)
	    			objDiv.innerHTML = ajax.responseText;
	    	}
   	    	if(params['EvalDiv']){
   	    		AJAXEvalDiv(params['idDiv']);
   	    	}
    	}
	}
	
	function EjectEvent(url, ajax, params){
		if(params['event']){
	   		try{
	   			params['event'](params['idDiv'], ajax.responseText, params);
	       	}catch(e){
	       		alert("Problema al ejecutar el evento asignado: "+e.message);
	       	}
        }
	}
	
    function AjaxProcessResult(url, ajax, params){
    	if(params['idDiv'] && params['htmlInject']){
	    	HtmlInject(url, ajax, params);
   			EjectEvent(url, ajax, params);
	        if(params['idDivOut'])
   				includeJS('effectFader', Fader2Obj(params['idDiv'], params['idDivOut']));
		        
    	} else
   			EjectEvent(url, ajax, params);
	}
	
	//readyState:
	//0 = sin inicializar
	//1 = cargando
	//2 = cargado
	//3 = interactivo
	//4 = completo
	function AJAXRequest(url, processEvent, params) {
		if(!params) params = {};
		
		if(params['mostrarProcesando']==true){
			AjaxProgressStart(params['idDiv']);
		}
		
		var ajax=new Browser();
		ajax.open("GET",url,true);
		ajax.onreadystatechange=function(){
			if (ajax.readyState == 4) {
		    	if (ajax.status == 200) {
		    		try{
						if(processEvent)
	    					processEvent(url, ajax, params);
		        	}catch(e){
		        		alert("Error al asignar el contenido HTML: "+e.message);
		        	}
		        } else {
		            //alert('Existe un problema con la respuesta');
		        }
				if(params['mostrarProcesando']==true){
					AjaxProgressStop(params['idDiv']);
				}
			}
    	};
	    ajax.send(null);
	}
	
	function AppendParams(map1, map2){
		if(!map1 && !map2)
			return {};
		else if(!map1 && map2)
			return map2;
		else if(map1 && !map2)
			return map1;
		else{
			for(var x in map2)
				map1[x] = map2[x];
			return map1;
		}
	}

	function AJAXRequestHtml( url, idDiv, evento, params) {
		params = AppendParams({'idDiv':idDiv, 'event':evento, 'htmlInject':true}, params);
		if(params['form'])
			url = AjaxUrlAndParams(url, params['form']);
		AJAXRequest(url, AjaxProcessResult, params);
	}

	function AJAXSubmitHtml(url, idDiv, form, evento, params) {
		if(form)
			params = AppendParams({'form':form}, params);
		AJAXRequestHtml(url, idDiv, evento, params);
	}
	
	function AJAXEvalDiv(idDiv){
		AJAXEvalDivObj(document.getElementById(idDiv));
	}

	function AJAXEvalDivObj(objDiv){
		var scripts = objDiv.getElementsByTagName("SCRIPT");

		if(scripts.length>0){

			for(var x=0 ; x<scripts.length ; x++)

				if(!scripts[x].src)

					eval(scripts[x].innerHTML);

		}
	}	