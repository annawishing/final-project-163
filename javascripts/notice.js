function hideNotice(){
	noticeElem.style.display = "none";
	setCookie();
}

var noticeElem = document.getElementById("notice");
var noticeCloseElem = document.getElementById("notice-close");

noticeCloseElem.addEventListener("click", hideNotice, false);

if ( getCookie() ){
	noticeElem.style.display = "none";
}

