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
	
	document.getElementById("btn_submit_Info").disabled = true;
    document.getElementById("lbl_current_name").style.display = "none";
    document.getElementById("lbl_current_Lname").style.display = "none";
    document.getElementById("lbl_current_addressL1").style.display = "none";
    document.getElementById("lbl_current_city").style.display = "none";
    document.getElementById("lbl_current_zipcode").style.display = "none";
    document.getElementById("lbl_state").style.display = "none";
    
}

function Check()
{
	//If User already has Address on
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
	}
}

function Change_Check()
{
	//If User changed anything
	New_State_num = document.getElementById("cmb_state").selectedIndex;
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
		case 13:
			New_State = "IN";
			break;
		case 14:
			New_State = "IA";
			break;
		case 15:
			New_State = "KS";
			break;
		case 16:
			New_State = "KY";
			break;
		case 17:
			New_State = "LA";
			break;
		case 18:
			New_State = "ME";
			break;
		case 19:
			New_State = "MD";
			break;
		case 20:
			New_State = "MA";
			break;
		case 21:
			New_State = "MI";
			break;
		case 22:
			New_State = "MN";
			break;
		case 23:
			New_State = "MS";
			break;
		case 24:
			New_State = "MO";
			break;
		case 25:
			New_State = "MT";
			break;
		case 26:
			New_State = "NE";
			break;
		case 27:
			New_State = "NV";
			break;
		case 28:
			New_State = "NH";
			break;
		case 29:
			New_State = "NJ";
			break;
		case 30:
			New_State = "NM";
			break;
		case 31:
			New_State = "NY";
			break;
		case 32:
			New_State = "NC";
			break;
		case 33:
			New_State = "ND";
			break;
		case 34:
			New_State = "OH";
			break;
		case 35:
			New_State = "OK";
			break;
		case 36:
			New_State = "OR";
			break;
		case 37:
			New_State = "PA";
			break;
		case 38:
			New_State = "RI";
			break;
		case 39:
			New_State = "SC";
			break;
		case 40:
			New_State = "SD";
			break;
		case 41:
			New_State = "TN";
			break;
		case 42:
			New_State = "TX";
			break;
		case 43:
			New_State = "UT";
			break;
		case 44:
			New_State = "VT";
			break;
		case 45:
			New_State = "VA";
			break;
		case 46:
			New_State = "WA";
			break;
		case 47:
			New_State = "WV";
			break;
		case 48:
			New_State = "WI";
			break;
		case 49:
			New_State = "WY";
			break;
	}
	
	Ac_Name = document.getElementById("txt_setting_name").value;
	Ac_Lname = document.getElementById("txt_setting_Lname").value;
	Ac_AddressL1 = document.getElementById("txt_setting_addressL1").value;
	Ac_City = document.getElementById("txt_setting_city").value;
	Ac_Zipcode = document.getElementById("txt_setting_zipcode").value;
	
	if (document.getElementById("lbl_new").value == "False")
	{
		if (Ac_Name != name && Ac_Lname != Lname && Ac_AddressL1 != AddressL1 && Ac_City != City && Ac_Zipcode != Zipcode && State != New_State && New_State != "N/A")
		{
			document.getElementById("btn_submit_Info").disabled = false;
		}
	} else {
		if (Ac_Name != "" && Ac_Lname != "" && Ac_AddressL1 != "" && Ac_City != "" && Ac_Zipcode != "" && New_State != "N/A")
		{
			document.getElementById("cmb_state").value = New_State;
			document.getElementById("btn_submit_Info").disabled = false;
		}
	}
}