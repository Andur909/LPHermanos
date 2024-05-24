window.addEventListener("load", Initial);
window.addEventListener("load", Check);

function Initial()
{
	document.getElementById("txt_setting_name").addEventListener("keypress", Change_Check);
	document.getElementById("txt_setting_Lname").addEventListener("keypress", Change_Check);
	document.getElementById("txt_setting_addressL1").addEventListener("keypress", Change_Check);
	document.getElementById("txt_setting_city").addEventListener("keypress", Change_Check);
	document.getElementById("txt_setting_zipcode").addEventListener("keypress", Change_Check);
	document.getElementById("cmb_state").addEventListener("click", Change_Check);

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
		
	}
}

function Change_Check()
{
	New_State_num = document,getElementById("cmb_state").selectedIndex;
	switch(New_State_num)
	{
		case 0:
			New_State = "N/A";
			break;
		case 1:
			New_State = "AL";
			break;
		case 2:
			New_State = "AZ";
			break;
		case 3:
			New_State = "AR";
			break;
		case 4:
			New_State = "CA";
			break;
		case 5:
			New_State = "CO";
			break;
		case 6:
			New_State = "CT";
			break;
		case 7:
			New_State = "DE";
			break;
		case 8:
			New_State = "DC";
			break;
		case 9:
			New_State = "FL";
			break;
		case 10:
			New_State = "GA";
			break;
		case 11:
			New_State = "ID";
			break;
		case 12:
			New_State = "IL";
			break;
}