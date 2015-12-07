var followBtn = document.getElementById("follow-btn");
followBtn.addEventListener("click",function(){
	if ( getCookie()["loginSuc"] ){
		getData("http://study.163.com/webDev/attention.htm", function(data){
			if (data == 1){
				setCookie("followSuc",1);				
			}
		});		
	}else{
		var mLogin = document.getElementById("m-login");
		mLogin.style.display = "block";
		mask(true);
	}
},false);

var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
	var inputAccount = document.getElementById("inputAccount");
	var inputPassword = document.getElementById("inputPassword");
	var loginFal = document.getElementById("loginFal");
	getData("http://study.163.com/webDev/login.htm?userName="+inputAccount.value+"&password="+inputPassword.value, function(data){
		if(data == 1){
			setCookie("loginSuc",1);
			followBtn.style.display = "none";
			var followed = document.getElementById("followed");
			followed.style.display = "inline-block";
		}else{
			loginFal.innerHTML = "账户名或密码不正确";	
		}
		
	});
},false);

