 function login(){
	var email = document.forms["loginform"]["email"];
	var pw = document.forms["loginform"]["pw"];

	var email = document.getElementById("email");
	var pw = document.getElementById("pw");
	
	email.addEventListener("blur", emailVerify, true);
	pw.addEventListener("blur", pwVerify, true);
	
	if(email.value != "pejade14"){
		email.style.border = "1px solid red";
		login_error.textContent = "Email Address is not Registered!";
		email.focus();
		return false;
	}
	if(pw.value != "asd123"){
		pw.style.border = "1px solid red";
		pass_error.textContent = "Password is incorrect!";
		pw.focus();
		return false;
	}
	
	else {
		alert("WELCOME!");
	}
	
	function emailVerify(){
		if (email.value =="pejade14") {
			email.style.border = "2px solid grey";
			login_error.innerHTML = "";
			return true;
		}
	}
	function pwVerify(){
		if (pw.value =="asd123") {
			pw.style.border = "2px solid grey";
			pass_error.innerHTML = "";
			return true;
		}
	}
 }
