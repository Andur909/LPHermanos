window.addEventListener("load", Init);

function Init()
{
    document.getElementById("div_order_top").style.display = "none";
    document.getElementById("div_order_bottom").style.display = "none";
    document.getElementById("lbl_mode").style.display = "none";
    document.getElementById("btn_submit_payment").disabled = true;
    document.getElementById("txt_card").addEventListener("keyup",cardChecker);
    paymentSubmit();
}

function paymentSubmit()
{
    mode = document.getElementById("lbl_mode").innerHTML;
    if (mode == "success"){
        document.getElementById("div_order_top").style.display = "block";
        document.getElementById("div_order_bottom").style.display = "block";
        document.getElementById("div_order_card").style.display = "none";
    }else{
        document.getElementById("div_order_top").style.display = "none";
        document.getElementById("div_order_bottom").style.display = "none";
    }
}

function cardChecker()
{
    length = document.getElementById("txt_card").value.length
    if (length != 16){
        document.getElementById("btn_submit_payment").disabled = true;
    } else{
        document.getElementById("btn_submit_payment").disabled = false;
    }
}