var agencyElem = document.getElementById("agencyphoto");
// var parent = document.body;

var iconCloseElem = document.getElementById("icon-close");
var agencyVideo = document.getElementById("m-video");

agencyElem.addEventListener("click", playVideo, false);
iconCloseElem.addEventListener("click", closeVideo, false);




function playVideo () {
	agencyVideo.style.display = "block";
	mask(true);
}

function closeVideo(){
	agencyVideo.style.display = "none";		
	mask(false);
}