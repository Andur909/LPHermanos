window.addEventListener("load", Sensor);
window.addEventListener("load", Setter);

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
}