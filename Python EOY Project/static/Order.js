window.addEventListener("load", Sensor);
window.addEventListener("load", Setter);

///All the Senors for the Combos
function Sensor()
{
		document.getElementById("cmb_chicken").addEventListener("click", Chicken_Change);
		document.getElementById("cmb_Drink").addEventListener("click", Drink_Change);
		document.getElementById("cmb_rice").addEventListener("click", Rice_Change);
		document.getElementById("cmb_Tortilla").addEventListener("click", Tortilla_Change);
		document.getElementById("div_Combo").addEventListener("click", Combo_Change);
		
		document.getElementById("btn_Order_Submit").addEventListener("click", Next);
}

///Sets and hides/Prepares all the information
function Setter()
{
	document.getElementById("div_hidden").style.display = "none";
	document.getElementById("div_order_submit").style.display = "none";
	
	///Chicken
	document.getElementById("div_Chicken_Raw").style.display = "none";
	document.getElementById("div_Chicken_HotHoney").style.display = "none";
	document.getElementById("div_Chicken_LemonPepper").style.display = "none";
	document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
	document.getElementById("div_Chicken_Buffalo").style.display = "none";
	document.getElementById("div_Chicken_Cajun").style.display = "none";
	document.getElementById("div_Chicken_Amount").style.display = "none";
	
	///Rice
	document.getElementById("div_Rice_Brown").style.display = "none";
	document.getElementById("div_Rice_White").style.display = "none";
	document.getElementById("div_Rice_Black").style.display = "none";
	document.getElementById("div_Rice_Bastami").style.display = "none";
	document.getElementById("div_Rice_Fried").style.display = "none";
	document.getElementById("div_Rice_Egg").style.display = "none";
	document.getElementById("div_Rice_Amount").style.display = "none";
	
	///Tortilla
	document.getElementById("div_Tortilla_Corn").style.display = "none";
	document.getElementById("div_Tortilla_Flour").style.display = "none";
	document.getElementById("div_Tortilla_Amount").style.display = "none";
	
	///Drink
	document.getElementById("div_Drink_BocaCola").style.display = "none";
	document.getElementById("div_Drink_HermanoSprint").style.display = "none";
	document.getElementById("div_Drink_DrHermano").style.display = "none";
	document.getElementById("div_Drink_MountainPollo").style.display = "none";
	document.getElementById("div_Drink_WalterSpecial").style.display = "none";
	document.getElementById("div_Drink_Amount").style.display = "none";
	
	///Combos
	document.getElementById("div_Combo_EggFried").style.display = "none";
	document.getElementById("div_Combo_RawChicken").style.display = "none";
	document.getElementById("div_Combo_MineralWater").style.display = "none";
	document.getElementById("div_Combo_Amount").style.display = "none";
	
	//Hidden
	document.getElementById("lbl_Chicken_Type").value = "N/A";
	document.getElementById("lbl_Rice_Type").value = "N/A";
	document.getElementById("lbl_Tortilla_Type").value = "N/A";
	document.getElementById("lbl_Drink_Type").value = "N/A";
	document.getElementById("lbl_Combo_Type").value = "N/A";
	
	document.getElementById("txt_Chicken_amount").value = 0;
	document.getElementById("txt_Rice_amount").value = 0;
	document.getElementById("txt_Tortilla_amount").value = 0;
	document.getElementById("txt_Drink_amount").value = 0;
	document.getElementById("txt_Combo_amount").value = 0;
	
}

//Chicken
function Chicken_Change()
{
		chicken_choice = document.getElementById("cmb_chicken").selectedIndex;
		switch(chicken_choice)
		{
			case 0:
				document.getElementById("div_Chicken_All").style.display = "block";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "none";
				document.getElementById("lbl_Chicken_Type").value = "N/A";
				document.getElementById("div_order_submit").style.display = "none";
				break;
			case 1:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "block";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Raw";
				document.getElementById("div_order_submit").style.display = "block";
				break;
			case 2:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "block";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Hot Honey";
				document.getElementById("div_order_submit").style.display = "block";
				break;
			case 3:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "block";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Lemon Pepper";
				document.getElementById("div_order_submit").style.display = "block";
				break;
			case 4:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "block";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Garlic Parmesan";
				document.getElementById("div_order_submit").style.display = "block";
				break;
			case 5:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "block";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Buffalo";
				document.getElementById("div_order_submit").style.display = "block";
				break;
			case 6:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "block";
				
				document.getElementById("div_Chicken_Amount").style.display = "block";
				document.getElementById("lbl_Chicken_Type").value = "Cajun";
				document.getElementById("div_order_submit").style.display = "block";
				break;
		}
}

//Drink
function Drink_Change()
{
	drink_choice = document.getElementById("cmb_Drink").selectedIndex;
	switch(drink_choice)
	{
		case 0:
			document.getElementById("div_Drink_Amount").style.display = "none";
			document.getElementById("lbl_Drink_Type").value = "N/A";
			
			document.getElementById("div_Drink_All").style.display = "block";
			document.getElementById("div_Drink_BocaCola").style.display = "none";
			document.getElementById("div_Drink_HermanoSprint").style.display = "none";
			document.getElementById("div_Drink_DrHermano").style.display = "none";
			document.getElementById("div_Drink_MountainPollo").style.display = "none";
			document.getElementById("div_Drink_WalterSpecial").style.display = "none";
			break;
		case 1:
			document.getElementById("div_Drink_Amount").style.display = "block";
			document.getElementById("lbl_Drink_Type").value = "Boca Cola";
		
			document.getElementById("div_Drink_All").style.display = "none";
			document.getElementById("div_Drink_BocaCola").style.display = "block";
			document.getElementById("div_Drink_HermanoSprint").style.display = "none";
			document.getElementById("div_Drink_DrHermano").style.display = "none";
			document.getElementById("div_Drink_MountainPollo").style.display = "none";
			document.getElementById("div_Drink_WalterSpecial").style.display = "none";
			break;
		case 2:
			document.getElementById("div_Drink_Amount").style.display = "block";
			document.getElementById("lbl_Drink_Type").value = "Hermano Sprint";
		
			document.getElementById("div_Drink_All").style.display = "none";
			document.getElementById("div_Drink_BocaCola").style.display = "none";
			document.getElementById("div_Drink_HermanoSprint").style.display = "block";
			document.getElementById("div_Drink_DrHermano").style.display = "none";
			document.getElementById("div_Drink_MountainPollo").style.display = "none";
			document.getElementById("div_Drink_WalterSpecial").style.display = "none";
			break;
		case 3:
			document.getElementById("div_Drink_Amount").style.display = "block";
			document.getElementById("lbl_Drink_Type").value = "Dr Herman0";
		
			document.getElementById("div_Drink_All").style.display = "none";
			document.getElementById("div_Drink_BocaCola").style.display = "none";
			document.getElementById("div_Drink_HermanoSprint").style.display = "none";
			document.getElementById("div_Drink_DrHermano").style.display = "block";
			document.getElementById("div_Drink_MountainPollo").style.display = "none";
			document.getElementById("div_Drink_WalterSpecial").style.display = "none";
			break;
		case 4:
			document.getElementById("div_Drink_Amount").style.display = "block";
			document.getElementById("lbl_Drink_Type").value = "Mountain Pollo";
		
			document.getElementById("div_Drink_All").style.display = "none";
			document.getElementById("div_Drink_BocaCola").style.display = "none";
			document.getElementById("div_Drink_HermanoSprint").style.display = "none";
			document.getElementById("div_Drink_DrHermano").style.display = "none";
			document.getElementById("div_Drink_MountainPollo").style.display = "block";
			document.getElementById("div_Drink_WalterSpecial").style.display = "none";
			break;
		case 5:
			document.getElementById("div_Drink_Amount").style.display = "block";
			document.getElementById("lbl_Drink_Type").value = "Walter Special";
		
			document.getElementById("div_Drink_All").style.display = "none";
			document.getElementById("div_Drink_BocaCola").style.display = "none";
			document.getElementById("div_Drink_HermanoSprint").style.display = "none";
			document.getElementById("div_Drink_DrHermano").style.display = "none";
			document.getElementById("div_Drink_MountainPollo").style.display = "none";
			document.getElementById("div_Drink_WalterSpecial").style.display = "block";
			break;
	}
}

//Rice
function Rice_Change()
{
	rice_type = document.getElementById("cmb_rice").selectedIndex;
	switch(rice_type)
	{
		case 0:
			document.getElementById("div_Rice_Amount").style.display = "none";
			document.getElementById("lbl_Rice_Type").value = "N/A";
		
			document.getElementById("div_Rice_All").style.display = "block";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 1:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "Brown";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "block";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 2:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "White";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "block";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 3:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "Black";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "block";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 4:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "Basmati";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "block";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 5:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "Fried";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "block";
			document.getElementById("div_Rice_Egg").style.display = "none";
			break;
		case 6:
			document.getElementById("div_Rice_Amount").style.display = "block";
			document.getElementById("lbl_Rice_Type").value = "Fried Egg";
		
			document.getElementById("div_Rice_All").style.display = "none";
			document.getElementById("div_Rice_Brown").style.display = "none";
			document.getElementById("div_Rice_White").style.display = "none";
			document.getElementById("div_Rice_Black").style.display = "none";
			document.getElementById("div_Rice_Bastami").style.display = "none";
			document.getElementById("div_Rice_Fried").style.display = "none";
			document.getElementById("div_Rice_Egg").style.display = "block";
			break;
	}
}

//Tortilla
function Tortilla_Change()
{
	tortilla_type = document.getElementById("cmb_Tortilla").selectedIndex;
	switch(tortilla_type)
	{
		case 0:
			document.getElementById("div_Tortilla_Amount").style.display = "none";
			document.getElementById("lbl_Tortilla_Type").value = "N/A";
			
			document.getElementById("div_Tortilla_All").style.display = "block";
			document.getElementById("div_Tortilla_Corn").style.display = "none";
			document.getElementById("div_Tortilla_Flour").style.display = "none";
			break;
		case 1:
			document.getElementById("div_Tortilla_Amount").style.display = "block";
			document.getElementById("lbl_Tortilla_Type").value = "Corn";
			
			document.getElementById("div_Tortilla_All").style.display = "none";
			document.getElementById("div_Tortilla_Corn").style.display = "block";
			document.getElementById("div_Tortilla_Flour").style.display = "none";
			break;
		case 2:
			document.getElementById("div_Tortilla_Amount").style.display = "block";
			document.getElementById("lbl_Tortilla_Type").value = "Flour";
			
			document.getElementById("div_Tortilla_All").style.display = "none";
			document.getElementById("div_Tortilla_Corn").style.display = "none";
			document.getElementById("div_Tortilla_Flour").style.display = "block";
			break;
	}
}

//Combos
function Combo_Change()
{
	combo_type = document.getElementById("cmb_Combo").selectedIndex;
	switch(combo_type)
	{
		case 0:
			document.getElementById("div_Combo_Amount").style.display = "none";
			document.getElementById("lbl_Combo_Type").value = "N/A";
		
			document.getElementById("div_Combo_All").style.display = "block";
			document.getElementById("div_Combo_EggFried").style.display = "none";
			document.getElementById("div_Combo_RawChicken").style.display = "none";
			document.getElementById("div_Combo_MineralWater").style.display = "none";
			break;
		case 1:
			document.getElementById("div_Combo_Amount").style.display = "block";
			document.getElementById("lbl_Combo_Type").value = "Egg Fried Combo";
		
			document.getElementById("div_Combo_All").style.display = "none";
			document.getElementById("div_Combo_EggFried").style.display = "block";
			document.getElementById("div_Combo_RawChicken").style.display = "none";
			document.getElementById("div_Combo_MineralWater").style.display = "none";
			break;
		case 2:
			document.getElementById("div_Combo_Amount").style.display = "block";
			document.getElementById("lbl_Combo_Type").value = "Raw Chicken Combo";
		
			document.getElementById("div_Combo_All").style.display = "none";
			document.getElementById("div_Combo_EggFried").style.display = "none";
			document.getElementById("div_Combo_RawChicken").style.display = "block";
			document.getElementById("div_Combo_MineralWater").style.display = "none";
			break;
		case 3:
			document.getElementById("div_Combo_Amount").style.display = "block";
			document.getElementById("lbl_Combo_Type").value = "Mineral Water Combo";
		
			document.getElementById("div_Combo_All").style.display = "none";
			document.getElementById("div_Combo_EggFried").style.display = "none";
			document.getElementById("div_Combo_RawChicken").style.display = "none";
			document.getElementById("div_Combo_MineralWater").style.display = "block";
			break;
	}
}

function Next()
{
		Chick_Amount = document.getElementById("txt_Chicken_amount").value;
		if (Chick_Amount <= 0)
		{
			alert("You Must Select At least 1 chicken");
		}
}