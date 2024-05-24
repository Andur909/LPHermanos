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
		City = document.getElementById("lbl_current_city").innerHTML;
		Zipcode = document.getElementById("lbl_current_zipcode").innerHTML;
		State = document.getElementById("lbl_state").innerHTML;
		
		document.getElementById("txt_setting_name").value = name;
		document.getElementById("txt_setting_Lname").value = Lname;
		document.getElementById("txt_setting_addressL1").value = AddressL1;
		document.getElementById("txt_setting_city").value = City;
		document.getElementById("txt_setting_zipcode").value = Zipcode;
		document.getElementById("cmb_state").value = State;
		
	} else {
		document.getElementById("cmb_state").value = "NY";
	}
}