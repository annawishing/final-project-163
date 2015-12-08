function getData(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4){
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				//renderHotList(xhr.responseText);
				//console.log(xhr.responseText);
				var data = JSON.parse(xhr.responseText);
				
				callback(data);
			}else{
				alert("Request was unsuccessful: " + xhr.status);
			}
		}
	}
	xhr.open("get", url, true);
	xhr.send(null);
}

function getCookie(){
	var cookie = {};
	var all = document.cookie;
	if (all === "") {
		return cookie;
	};
	var list = all.split("; ");
	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var p = item.indexOf("=");
		var name = item.substring(0,p);
		name = decodeURIComponent(name);
		var value = item.substring(p + 1);
		value = decodeURIComponent(value);
		cookie[name] = value;
	};
	return cookie;

}

function setCookie(name,value){
	var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	document.cookie = cookie;
}	

function mask(open){
	var mask = document.getElementById("mask");
	console.log(open);
	open ? 	mask.style.display = "block" : mask.style.display = "none";
}

