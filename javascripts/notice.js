function hideNotice(){
	noticeElem.style.display = "none";
	setCookie("noticeSuc", 1);
}

var noticeElem = document.getElementById("notice");
var noticeCloseElem = document.getElementById("notice-close");

noticeCloseElem.addEventListener("click", hideNotice, false);

if ( getCookie()["noticeSuc"] ){
	noticeElem.style.display = "none";
}

