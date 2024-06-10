'''
Name: Jianzhuo Ye
Start Date: 5/20/24
End Date: 6/10/24
Description
'''
import os.path
from os import path
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/',methods=["GET","POST"])
def main():
    files = ["usernames","passwords","addressinfo"]
    for paths in files: #creates files for info storage if not already made
        filename = paths + ".txt";
        ifexists = bool(path.exists(filename));
        if ifexists == False:
            pythfile = open(filename, 'w');
            pythfile.close();
    
    if request.method == 'GET':
        return render_template('LogIn.html');
    
    else:
        return GetLogin();

def GetLogin():
    global startup, userindex, runtime;
    runtime = 0;
    logorsign = request.form['button']
    if logorsign == "login":
        user = request.form.get('txt_login_username');
        ps = request.form.get('txt_login_password');
        startup = "Log_In";
    else:
        user = request.form.get('txt_signin_username');
        ps = request.form.get('txt_signin_password');
        startup = "Sign_Up";
    filename = "usernames.txt";
    pythfile = open(filename,"r+");
    storedusers = pythfile.readline();
    storedusers = storedusers.split(",");
    pythfile.close();
    userindex = 0;
    if storedusers != "":
        storedlen = len(storedusers);
        while userindex < storedlen:
            if user == storedusers[userindex]: #This means the acc exists
                if startup == "Sign_Up": #Check if signing up with a preexisting username
                    errormsg = "Username already exists";
                    return render_template('LogIn.html',start_type=startup,error_start=errormsg);
                
                else: 
                    filename = "passwords.txt";
                    pythfile = open(filename,"r+");
                    storedps = pythfile.readline();
                    storedps = storedps.split(",");
                    pythfile.close();
                    if ps == storedps[userindex]: #Check for password
                        return redirect('/order');
                    
                    else: #incorrectpass
                        errormsg = "Password is incorrect";
                        return render_template('LogIn.html',start_type=startup,error_start=errormsg);
            else:
                userindex += 1
                continue;

        else:    
            if startup == "Sign_Up": #Acc doesn't exist, Create acc
                filename = "usernames.txt"
                pythfile = open(filename,"a");
                user = user + ",";
                pythfile.write(user);
                pythfile.close();
                filename = "passwords.txt";
                pythfile = open(filename,"a");
                ps = ps + ",";
                pythfile.write(ps);
                pythfile.close();
                userindex -= 1
                return redirect('/settings');
            
            else: #The acc doesn't exist. If user tried to login, error.
                errormsg = "Username is incorrect";
                return render_template('LogIn.html',start_type=startup,error_start=errormsg);
            
    else: #No info in users yet, create acc.
        filename = "usernames.txt"
        pythfile = open(filename,"a");
        user = user + ",";
        pythfile.write(user);
        pythfile.close();
        filename = "passwords.txt";
        pythfile = open(filename,"a");
        ps = ps + ",";
        pythfile.write(ps);
        pythfile.close();
        filename = "addressinfo.txt";
        pythfile = open(filename,"a");
        info = " , , , , , \n"
        pythfile.write(info);
        pythfile.close();
        return redirect('/settings');
    
@app.route('/settings',methods=["GET","POST"])
def settingsMain():
    global info, runtime, filename;
    print(userindex);
    if runtime == 0:
        filename = "addressinfo.txt";
        info = [];
        errormsg = ""
        settingstartup = ""
        runtime += 1
    if request.method == "GET":
        if startup == "Log_In":
            pythfile=open(filename,"r+");
            info = pythfile.readline();
            info = info.split("\n");
            info = info[userindex]
            info = info.split("$");
            pythfile.close();
            return render_template('Settings.html',name=info[0],Lname=info[1],AddressL1=info[2],city=info[3],zipcode=info[4],state=[5],new_acc="False");
        else:
            return render_template('Settings.html',new_acc="True");
    else:
        return settingsEnter();

def settingsEnter():
    choice = request.form['button'];
    print(choice);
    switcher = {
        "Submit": settingsSubmit,
        "Cancel": settingsMain,
        "Return": settingsReturn,
        "Delete": settingsDelete,
        "error": settingsError
        }
    return switcher.get(choice, "error")();

def settingsSubmit():
    global settingstartup, info;
    State = request.form.get("txt_setting_state");
    if State == "":
        settingstartup = "Change";
        return settingsMain();
    
    else:
        FName = request.form.get("txt_setting_name");
        LName = request.form.get("txt_setting_Lname");
        Address = request.form.get("txt_setting_addressL1");
        City = request.form.get("txt_setting_city");
        ZipCode = request.form.get("txt_setting_zipcode");
        info = FName + "$" + LName + "$" + Address + "$" + City + "$" + ZipCode + "$" + State;
        pythfile = open(filename,"r");
        fullinfo = pythfile.readline();
        fullinfo = fullinfo.split("\n")
        pythfile.close();
        if userindex <= len(fullinfo): #This if statement checks if the user already had an address saved
            fullinfo[userindex] = info;
            
        else:
            fullinfo.append(info);

        pythfile = open(filename,"r+");
        pythfile.truncate(0);
        pythfile.close();
        pythfile = open(filename,"w");
        for i in range(len(fullinfo)):
            pythfile.write(fullinfo[i] + "\n");
            
        pythfile.close();
        return redirect('/order');

def settingsReturn():
    return redirect('/order');

def settingsDelete():
    pythfile = open(filename,"r+");
    fullinfo = pythfile.readline();
    fullinfo = fullinfo.split("\n");
    pythfile.close;
    if userindex <= len(fullinfo): #if statement is not used for user and pass because user and pass are both required to have before accessing settings, Address is not.
        del fullinfo[userindex];
        pythfile.open(filename,"r+");
        pythfile.truncate(0);
        pythfile.close();
        pythfile = open(filename,"w");
        for i in range(len(fullinfo)):
            pythfile.write(fullinfo[i] + "\n");
        pythfile.close();
    filename = "usernames.txt";
    pythfile = open(filename,"r+");
    fullinfo = pythfile.readline();
    fullinfo = fullinfo.split(',');
    pythfile.truncate(0);
    pythfile.close();
    del fullinfo[userindex];
    pythfile.open(filename,"w");
    for i in range(len(fullinfo)):
            pythfile.write(fullinfo[i] + "\n");
    pythfile.close();
    filename = "passwords.txt";
    pythfile = open(filename,"r+");
    fullinfo = pythfile.readline();
    fullinfo = fullinfo.split(',');
    pythfile.truncate(0);
    pythfile.close();
    del fullinfo[userindex];
    pythfile.open(filename,"w");
    for i in range(len(fullinfo)):
            pythfile.write(fullinfo[i] + "\n");
    pythfile.close();
    return settingsMain();

def settingsError():
    return settingsMain();

@app.route('/order',methods=["GET","POST"])
def orderMain():
    if request.method == "GET":
        return render_template("Order.html");
    else:
        return orderEnter();

def orderEnter():
    choice = request.form['button'];
    switcher = {
        "settings": orderSettings,
        "error": orderError,
        "Receipt": orderSubmit
        }
    
    return switcher.get(choice, "error")();

def orderSettings():
    return redirect('/settings');

def orderError():
    print("Something went wrong.");
    return orderMain();

def orderSubmit():
    global ChickenType, ChickenCount, RiceType, RiceCount, TortillaType, TortillaCount, DrinkType, DrinkCount, ComboType, ComboCount, totalPrice;
    ChickenType = request.form.get('Chicken_Type');
    ChickenCount = float(request.form.get('txt_Chicken_Number'));
    RiceType = request.form.get('Rice_Type');
    RiceCount = float(request.form.get('txt_Rice_Number'));
    TortillaType = request.form.get('Tortilla_Type');
    TortillaCount = float(request.form.get('txt_Tortilla_Number'));
    DrinkType = request.form.get('Drink_Type');
    DrinkCount = float(request.form.get('txt_Drink_Number'));
    ComboType = request.form.get('Combo_Type');
    ComboCount = float(request.form.get('txt_Combo_Number'));
    
    switcher = {
        "Raw": 6.00,
        "Hot Honey": 7.50,
        "Lemon Pepper": 7.50,
        "Garlic Parmesan": 7.50,
        "Buffalo": 7.50,
        "Cajun": 7.50,
        "Brown": 1.50,
        "White": 1.50,
        "Black": 1.50,
        "Basmati": 1.50,
        "Fried": 2.50,
        "Fried Egg": 3.00,
        "Corn": 1.20,
        "Flour": 1.20,
        "Boca Cola": 11.00,
        "Hermano Sprint": 11.00,
        "Dr Herman0": 11.00,
        "Mountain Pollo": 11.00,
        "Walter Special": 11.00,
        "Egg Fried Combo": 18.00,
        "Raw Chicken Combo": 18.00,
        "Mineral Water Combo": 18.00,
        "N/A": 0.00
        }
    ChickenPrice = switcher.get(ChickenType, "N/A");
    RicePrice = switcher.get(RiceType, "N/A");
    TortillaPrice = switcher.get(TortillaType, "N/A");
    DrinkPrice = switcher.get(DrinkType, "N/A");
    ComboPrice = switcher.get(ComboType, "N/A");
    ChickenPrice *= ChickenCount;
    RicePrice *= RiceCount;
    TortillaPrice *= TortillaCount;
    DrinkPrice *= DrinkCount;
    ComboPrice *= ComboCount;
    totalPrice = ChickenPrice + RicePrice + TortillaPrice + DrinkPrice + ComboPrice;
    return redirect('/receipt')
    
@app.route('/receipt',methods=["GET","POST"])
def receiptMain():
    if request.method=="GET":
        return render_template("Receipt.html");
    else:
        return receiptFinal();

def receiptCheck():
    choice = request.form['button'];
    switcher = {
        "logout": receiptLogout,
        "error": receiptError,
        "payment": receiptFinal
        }
    
    return switcher.get(choice, "error")();

def receiptLogout():
    return redirect('/')

def receiptFinal():
    CardNum = request.form.get("CardNum");
    ExpirationMonth = request.form.get("month");
    ExpirationYear = request.form.get("year");
    SecurityCode = request.form.get("security");
    ZipCode = request.form.get("zip");
    num = [];
    for letter in CardNum: #check if credit card number is valid. When testing it's recommended to use a gift card to validate this formula
        num.append(letter);
    
    num2 = "";
    num2 += str(int(num[0]) * 2);
    
    num3 = 2;
    for i in range(7):
        num2 += str(int(num[num3]) * 2);
        num3 += 2;

    num4 = "";
    num3 = 1;
    for i in range(7):
        num4 = num4 + num[num3];
        num3 = num3 + 2;

    num = [];
    for letter in num2:
        num.append(letter);
    for letter in num4:
        num.append(letter);
        
    total = 0;
    numlen = len(num);
    for i in range(numlen):
        total += int(num[i]);
    num_left = total % 10;
    Lcheck = 10 - num_left;
    if int(CardNum[15]) != Lcheck:
        errormsg = "Card Invalid";
        mode = 'failure';
        return render_template("Receipt.html",error=errormsg,mode=mode);
    else:
        mode = 'success';
        filename = 'addressinfo.txt';
        pythfile = open(filename, "r+");
        fullinfo = pythfile.readline();
        fullinfo = fullinfo.split("\n");
        fullinfo = fullinfo[userindex]
        fullinfo = fullinfo.split("$");
        addressinfo = fullinfo[0] + " " + fullinfo[1] + " " + fullinfo[2] + " " + fullinfo[3] + " " + fullinfo[4] + " " + fullinfo[5]
        return render_template("Receipt.html",mode=mode,address=addressinfo,
                               chicken=ChickenType,chicken_Amount=ChickenCount,
                               Rice=RiceType,Rice_Amount=RiceCount,
                               tortilla=TortillaType,tortilla_Amount=TortillaCount,
                               drink=DrinkType,drink_Amount=DrinkCount,
                               combo=ComboType,combo_Amount=ComboCount, Money=totalPrice);

def receiptError():
    errormsg = "ERROR"
    return render_template("Receipt.html",error=errormsg);

if __name__ == "__main__":
    app.run();
