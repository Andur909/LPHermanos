window.addEventListener("load", Initial);
window.addEventListener("load", checker);

function Initial()
{
	
	document.getElementById("btn_newacc").addEventListener("click", New_acc);
	document.getElementById("btn_login").addEventListener("click", log_in);
	
	document.getElementById("txt_login_username").addEventListener("keypress", loginenable);
	document.getElementById("txt_login_password").addEventListener("keypress", loginenable);
	
	document.getElementById("txt_signin_username").addEventListener("keypress", signupenable);
	document.getElementById("txt_signin_password").addEventListener("keypress", signupenable);





}

function checker()
{
	if (document.getElementById("lbl_starter").innerHTML == "Log_In")
	{
		document.getElementById("div_register").style.display = "none";
		document.getElementById("div_login").style.display = "block";
		document.getElementById("btn_submit_LogIn").disabled = true;
		document.getElementById("btn_submit_SignUp").disabled = true;
		document.getElementById("txt_login_username").focus();
	} else 
	{
		document.getElementById("div_login").style.display = "none";
		document.getElementById("div_register").style.display = "block";
		document.getElementById("btn_submit_SignUp").disabled = true;
		document.getElementById("btn_submit_LogIn").disabled = true;
		document.getElementById("txt_signin_username").focus();
	}
	document.getElementById("lbl_starter").style.display = "none";
}

function New_acc()
{
	document.getElementById("div_login").style.display = "none";
	document.getElementById("div_register").style.display = "block";
	document.getElementById("btn_submit_SignUp").disabled = true;
	document.getElementById("btn_submit_LogIn").disabled = true;
	document.getElementById("txt_signin_username").focus();
}

function log_in()
{
	document.getElementById("div_register").style.display = "none";
	document.getElementById("div_login").style.display = "block";
	document.getElementById("btn_submit_LogIn").disabled = true;
	document.getElementById("btn_submit_SignUp").disabled = true;
	document.getElementById("txt_login_username").focus();
}

function loginenable()
{
	if (document.getElementById("txt_login_username").value != "" && document.getElementById("txt_login_password").value != "")
	{
		document.getElementById("btn_submit_LogIn").disabled = false;
	}
}

function signupenable()
{
	if (document.getElementById("txt_signin_username").value != "" && document.getElementById("txt_signin_password").value != "")
	{
		document.getElementById("btn_submit_SignUp").disabled = false;
	}
}

