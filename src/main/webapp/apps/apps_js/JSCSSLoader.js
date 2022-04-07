// JSCSSLoader.js
var jsAddList = {};
function addJS(src, event){
	if(!jsAddList[src]){
	    var html_doc = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.setAttribute('type', 'text/javascript');
	    script.setAttribute('src', src);
	    html_doc.appendChild(script);
		jsAddList[src] = script;
	    if(event){
			script.onreadystatechange = function () {
		        if (script.readyState == 'complete' || script.readyState == 'loaded') {
			        eval(event);
		        }
		    }
			script.onload = function () {
				eval(event);
			}
		}
	}else{
		if(event) eval(event);
	}
	return jsAddList[src];
}
function includeJS(src, event){
	addJS('../zntjs/'+src+'.js', event);
}

var cssAddList = {};
function addCSS(href, event){
	if(!cssAddList[href]){
		var bandprog = false;
		try{
			//if(AjaxProgressStart)
			//	AjaxProgressStart();
			bandprog = true;
		}catch(e){
		}
		var script = document.createElement("link");
		script.setAttribute("type","text/css");
		script.setAttribute("rel","stylesheet");
		script.setAttribute("href", href);
		script.setAttribute("media","screen");
		document.getElementsByTagName("head")[0].appendChild(script);
		cssAddList[href] = script;
	    if(event){
			script.onreadystatechange = function () {
		        if (script.readyState == 'complete' || script.readyState == 'loaded') {
			        eval(event);
					try{
						if(bandprog)
					        AjaxProgressStop();
					}catch(e){
					}
		        }
		    }
			script.onload = function () {
				eval(event);
				try{
					if(bandprog)
					    AjaxProgressStop();
				}catch(e){
				}
			}
			if(navigator.appName.indexOf('Microsoft')<0)
				setTimeout(event, 2000);
		}
	}else{ 
		//document.getElementsByTagName("head")[0].appendChild(cssAddList[href]);
		if(event) eval(event);
	}
	return cssAddList[href];
}
function includeCSS(href, event){
	addCSS('../zntcss/'+href+'.css', event);
}
