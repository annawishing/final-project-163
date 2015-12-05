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


