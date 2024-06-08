window.addEventListener("load", Sensor);
window.addEventListener("load", Setter);

///All the Senors for the Combos
function Sensor()
{
		document.getElementById("cmb_chicken").addEventListener("click", Chicken_Change);
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
	
	///Rice
	document.getElementById("div_Rice_Brown").style.display = "none";
	document.getElementById("div_Rice_White").style.display = "none";
	document.getElementById("div_Rice_Black").style.display = "none";
	document.getElementById("div_Rice_Bastami").style.display = "none";
	document.getElementById("div_Rice_Fried").style.display = "none";
	document.getElementById("div_Rice_Egg").style.display = "none";
	
	///Tortilla
	document.getElementById("div_Tortilla_Corn").style.display = "none";
	document.getElementById("div_Tortilla_Flour").style.display = "none";
	
	///Drink
	document.getElementById("div_Drink_BocaCola").style.display = "none";
	document.getElementById("div_Drink_HermanoSprint").style.display = "none";
	document.getElementById("div_Drink_DrHermano").style.display = "none";
	document.getElementById("div_Drink_MountainPollo").style.display = "none";
	document.getElementById("div_Drink_WalterSpecial").style.display = "none";
	
	///Combos
	document.getElementById("div_Combo_EggFried").style.display = "none";
	document.getElementById("div_Combo_RawChicken").style.display = "none";
	document.getElementById("div_Combo_MineralWater").style.display = "none";
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
				break;
			case 1:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "block";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				break;
			case 2:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "block";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				break;
			case 3:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "block";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				break;
			case 4:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "block";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				break;
			case 5:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "block";
				document.getElementById("div_Chicken_Cajun").style.display = "none";
				break;
			case 6:
				document.getElementById("div_Chicken_All").style.display = "none";
				document.getElementById("div_Chicken_Raw").style.display = "none";
				document.getElementById("div_Chicken_HotHoney").style.display = "none";
				document.getElementById("div_Chicken_LemonPepper").style.display = "none";
				document.getElementById("div_Chicken_GarlicParmejan").style.display = "none";
				document.getElementById("div_Chicken_Buffalo").style.display = "none";
				document.getElementById("div_Chicken_Cajun").style.display = "block";
				break;
		}
}