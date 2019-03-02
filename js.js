 function validation(){
	var fname = document.forms["vform"]["fname"];
	var lname = document.forms["vform"]["lname"];
	var email = document.forms["vform"]["email"];
	var pw = document.forms["vform"]["pw"];
	var cpw = document.forms["vform"]["cpw"];
	
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var email = document.getElementById("email");
	var pw = document.getElementById("pw");
	var cpw = document.getElementById("cpw");
	
	fname.addEventListener("blur", fnameVerify, true);
	lname.addEventListener("blur", lnameVerify, true);
	email.addEventListener("blur", emailVerify, true);
	pw.addEventListener("blur", pwVerify, true);
	cpw.addEventListener("blur", cpwVerify, true);
	
 if(fname.value =="" && fname.value !="/^[a-zA-Z]+$/"){
		fname.style.border = "1px solid red";
		fname_error.textContent = "Invalid First Name!";
		fname.focus();
		return false;
	}
	if(lname.value =="" && lname.value !="/^[a-zA-Z]+$/"){
		lname.style.border = "1px solid red";
		lname_error.textContent = "Invalid Last Name!";
		lname.focus();
		return false;
	}
	if(email.value =="" && email.value !="/\S+@\S+/"){
		email.style.border = "1px solid red";
		email_error.textContent = "Invalid Email Address!";
		email.focus();
		return false;
	}
	if(pw.value =="" && pw.value !="/^[a-zA-Z]+$/"){
		pw.style.border = "1px solid red";
		pw_error.textContent = "Invalid Password!";
		pw.focus();
		return false;
	}
	if(cpw.value != pw.value){
		cpw.style.border = "1px solid red";
		cpw_error.textContent = "Password did not matched!";
		cpw.focus();
		return false;
	}
	
	else {
		alert("Congratulations, you are now registered!");
	}
	
	function fnameVerify(){
	if (fname.value !="" ) {
			fname.style.border = "2px solid grey";
			fname_error.innerHTML = "";
			return true;
		}
	}
	function lnameVerify(){
		if (lname.value !="") {
			lname.style.border = "2px solid grey";
			lname_error.innerHTML = "";
			return true;
		}
	}
	function emailVerify(){
		if (email.value !="") {
			email.style.border = "2px solid grey";
			email_error.innerHTML = "";
			return true;
		}
	}
	function pwVerify(){
		if (pw.value !="") {
			pw.style.border = "2px solid grey";
			pw_error.innerHTML = "";
			return true;
		}
	}
	function cpwVerify(){
		if (cpw.value == pw.value) {
			cpw.style.border = "2px solid grey";
			cpw_error.innerHTML = "";
			return true;
		}
	}
 }
