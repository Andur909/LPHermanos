'''
Name: Jianzhuo Ye
Start Date: 5/20/24
End Date: TBD
Description
'''
import os.path
from os import path
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/',methods=["GET","POST"])
def main():
    filename = "addressinfo.txt"
    pythfile = open(filename,"r+")
    print(pythfile.readlines());
    if request.method == 'GET':
        return render_template('LogIn.html');
    
    else:
        return GetLogin();

def GetLogin():
    global startup, userindex;
    
    logorsign = request.form['button']
    if logorsign == "login":
        user = request.form.get('txt_login_username');
        ps = request.form.get('txt_login_password');
        print(ps);
        startup = "Log_In";
    else:
        user = request.form.get('txt_signin_username');
        ps = request.form.get('txt_signin_password');
        startup = "Sign_Up";
    filename = "usernames.txt";
    pythfile = open(filename,"r+");
    storedusers = pythfile.readline();
    storedusers = storedusers.split(", ");
    pythfile.close();
    if storedusers != "":
        storedlen = len(storedusers);
        i = 0;
        while i < storedlen:
            if user == storedusers[i]: #This means the acc exists
                if startup == "Sign_Up": #Check if signing up with a preexisting username
                    errormsg = "Username already exists";
                    return render_template('LogIn.html',start_type=startup,error_start=errormsg);
                
                else: 
                    filename = "passwords.txt";
                    pythfile = open(filename,"r+");
                    storedps = pythfile.readline();
                    storedps = storedps.split(",");
                    pythfile.close();
                    print(storedps[i]);
                    print(ps);
                    if ps == storedps[i]: #Check for password
                        userindex = i;
                        return redirect('/order');
                    
                    else: #incorrectpass
                        errormsg = "Password is incorrect";
                        return render_template('LogIn.html',start_type=startup,error_start=errormsg);
            
            elif startup == "Log_In": #The acc doesn't exist. If user tried to login, error.
                errormsg = "Username is incorrect";
                return render_template('LogIn.html',start_type=startup,error_start=errormsg);
            
            else:
                i += 1
                continue;

        else:    
            if startup == "Sign_Up": #Acc doesn't exist, Create acc
                filename = "usernames.txt"
                pythfile = open(filename,"a");
                user = user + ", ";
                pythfile.write(user);
                pythfile.close();
                filename = "passwords.txt";
                pythfile = open(filename,"a");
                ps = ps + ", ";
                pythfile.write(ps);
                pythfile.close();
                filename = "addressinfo.txt";
                pythfile = open(filename,"a");
                info = " , , , , , \n"
                pythfile.write(info);
                pythfile.close();
                return redirect('/settings');
            
    else:
        filename = "usernames.txt"
        pythfile = open(filename,"a");
        user = user + ", ";
        pythfile.write(user);
        pythfile.close();
        filename = "passwords.txt";
        pythfile = open(filename,"a");
        ps = ps + ", ";
        pythfile.write(ps);
        pythfile.close();
        filename = "addressinfo.txt";
        pythfile = open(filename,"a");
        info = " , , , , , \n"
        pythfile.write(info);
        pythfile.close();
        return redirect('/settings');
    
@app.route('/settings',methods=["GET","POST"])
def settingsInit():
    global filename, info, errormsg, settingstartup;
    filename = "addressinfo.txt";
    info = [];
    errormsg = ""
    settingstartup = ""
    return settingsMain();

def settingsMain():
    global info;
    if request.method == "GET":
        if startup == "Log_In":
            if settingstartup == "Change":
                return render_template('Settings.html',startup=settingstartup,Error_Settings=errormsg);
            else:
                pythfile=open(filename,"r+");
                info = pythfile.readline();
                info = info.split("\n");
                info = info[userindex]
                info = info.split(",");
                pythfile.close();
                return render_template('Settings.html',data=info,Error_Settings=errormsg);
        else:
            if settingstartup == "Change":
                return render_template('Settings.html',startup=settingstartup,Error_Settings=errormsg);#add {{startup on html}}
            else:
                return render_template('Settings.html',Error_Settings=errormsg);
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
        "error": error
        }
    return switcher.get(choice, "error")();

def settingsSubmit():
    global errormsg, settingstartup, info;
    print("check1");
    State = request.form.get("cmb_state");
    if State == "":
        errormsg = "Please fill in all required fields";
        settingstartup = "Change";
        return settingsMain();
    
    else:
        FName = request.form.get("txt_setting_name");
        LName = request.form.get("txt_setting_Lname");
        Address = request.form.get("txt_setting_addressL1");
        City = request.form.get("txt_setting_city");
        ZipCode = request.form.get("txt_setting_zipcode");
        info = FName + "$" + LName + "$" + Address + "$" + City + "$" + ZipCode + "$" + State;
        pythfile=open(filename,"r");
        fullinfo = pythfile.readline();
        fullinfo = fullinfo.split("\n")
        pythfile.close();
        if userindex <= len(fullinfo): #This if statement checks if the user already had an address saved
            fullinfo[userindex] = info;
            
        else:
            fullinfo.append(info);

        pythfile.open(filename,"r+");
        pythfile.truncate(0);
        pythfile.close();
        pythfile.open(filename,"w");
        for i in range(len(fullinfo)):
            pythfile.write(fullinfo[i] + "\n");
            
        pythfile.close();
        return settingsMain();

def settingsReturn():
    return redirect('/order');

def settingsDelete():
    global errormsg;
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
    global errormsg;
    errormsg = "Something went wrong."
    return settingsMain();

@app.route('/order',methods=["GET","POST"])
def orderMain():
    if request.method == "GET":
        return render_template(Order.html);
    else:
        return orderEnter();

def orderEnter():
    choice = request.form['button'];
    print(choice);
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
    global
    ChickenType = request.form.get('Chicken_Type');
    ChickenCount = request.form.get('txt_Chicken_Number');
    RiceType = request.form.get('Rice_Type');
    RiceCount = request.form.get('txt_Rice_Number');
    TortillaType = request.form.get('Tortilla_Type');
    TortillaCount = request.form.get('txt_Tortilla_Number');
    DrinkType = request.form.get('Drink_Type');
    
    ComboType = request.form.get('Combo_Type');
    ComboCount = request.form.get('');
    
if __name__ == "__main__":
    app.run();
