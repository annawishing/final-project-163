if( getCookie()["followSuc"] ){
	showFollowed();
}

var followBtn = document.getElementById("follow-btn");
followBtn.addEventListener("click",function(){
	if ( getCookie()["loginSuc"] ){
		follow( showFollowed );
	}else{
		showLogin();
	}
},false);

var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
	var inputAccount = document.getElementById("inputAccount"); 
	//var inputAccount = {value: "studyOnline"}
	var inputPassword = document.getElementById("inputPassword");
	//var inputPassword = {value: "study.163.com"}
	var loginFal = document.getElementById("loginFal");

	login( inputAccount.value, inputPassword.value, function(){
		hideLogin();
		follow( showFollowed );
	}, function(){
		loginFal.innerHTML = "账户名或密码不正确";	
	});
},false);

function showLogin(){
	var mLogin = document.getElementById("m-login");
	mLogin.style.display = "block";
	mask(true);
}

function hideLogin(){
	var mLogin = document.getElementById("m-login");
	mLogin.style.display = "none";
	mask(false);
}

function showFollowed(){
	var followBtn = document.getElementById("follow-btn");
	followBtn.style.display = "none";
	var followed = document.getElementById("followed");
	followed.style.display = "inline-block";
}

function follow(success){
	getData("http://study.163.com/webDev/attention.htm", function(data){
		if (data == 1){
			setCookie("followSuc",1);
			success();			
		}
	});	
}

function login(userName, password, success, fails){
	getData("http://study.163.com/webDev/login.htm?userName="+md5(userName)+"&password="+md5(password), function(data){
		if(data == 1){
			setCookie("loginSuc",1);
			success();
		}else{
			fails();
		}
	});
}

