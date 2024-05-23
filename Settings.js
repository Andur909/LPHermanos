window.addEventListener("load", Initial);
window.addEventListener("load", Check);

function Initial()
{

}

function Check()
{
	if (document.getElementById("lbl_new").value == "False")
	{
		name = document.getElementById("lbl_current_name").innerHTML;
		Lname = document.getElementById("lbl_current_Lname").innerHTML;
		AddressL1 = document.getElementById("lbl_current_addressL1").innerHTML;
		AddressL2 = document.getElementById("lbl_current_addressL2").innerHTML;
		City = document.getElementById("lbl_current_city").innerHTML;
		Zipcode = document.getElementById("lbl_current_zipcode").innerHTML;
		
	}
}