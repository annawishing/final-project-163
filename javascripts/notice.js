function hideNotice(){
	noticeElem.style.display = "none";
	setCookie();
}

function getCookie(name){
	var all = document.cookie;
	return all.indexOf(name) != -1;
}

function setCookie(){
	document.cookie = "clickNotice=1";
}	

var noticeElem = document.getElementById("notice");
var noticeCloseElem = document.getElementById("notice-close");

noticeCloseElem.addEventListener("click", hideNotice, false);

if ( getCookie("clickNotice") ){
	noticeElem.style.display = "none";
}

