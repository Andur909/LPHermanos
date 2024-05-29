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
        startup = "Log_In";
    else:
        user = request.form.get('txt_signin_username');
        ps = request.form.get('txt_signin_username');
        startup = "Sign_Up";
    filename = "usernames.txt";
    pythfile = open(filename,"r+");
    storedusers = pythfile.read();
    storedusers.split(',')
    pythfile.close();
    for i in len(storedusers):
        if user == storedusers[i]: #This means the acc exists
            if startup == "Sign_Up":
                errormsg = "Username already exists";
                return render_template('LogIn.html',start_type=startup,error_start=errormsg);
            
            else:
                filename = "passwords.txt";
                pythfile = open(filename,"r+");
                storedps = pythfile.readline();
                storedps.split(",");
                pythfile.close();
                if ps == storedps[i]:
                    userindex = i;
                    return redirect('/order');
                else:
                    errormsg = "Username is incorrect";
                    return render_template('LogIn.html',start_type=startup,error_start=errormsg);
        
        else if startup == "Log_In": #The acc doesn't exist. If user tried to login, error. Else, create acc.
            errormsg = "Username is incorrect";
            return render_template('LogIn.html',start_type=startup,error_start=errormsg);
        
        else: #Acc doesn't exist, Create acc
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
            return redirect('/order');
        
        
            
@app.route('/settings',methods=["GET","POST"])
def settingsMain():
    global filename, info, errormsg;
    filename = "addressinfo.txt";
    info = [];
    errormsg = ""
    return settingsListen();

def settingsListen()
    global info;
    if request.method == "GET":
        if startup == "Log_In":
            if settingstartup == "Change":
                return render_template('Settings.html',startup=settingstartup,Error_Settings=errormsg);
            else:
                pythfile=open(filename,"r+");
                info = pythfile.readline();
                info.split("\n");
                info = info[userindex]
                info.split(",");
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
    switcher = {
        "Submit": settingsSubmit,
        "Cancel": settingsListen,
        "Return": settingsReturn,
        "Delete": settingsDelete
        }
    return switcher.get(choice, "error")();

def settingsSubmit():
    global errormsg, startup, info;
    State = request.form.get("cmb_state");
    if State == "":
        errormsg = "Please fill in all required fields";
        settingstartup = "Change";
        return settingsListen();
    else:
        FName = request.form.get("txt_setting_name");
        LName = request.form.get("txt_setting_Lname");
        Address = request.form.get("txt_setting_addressL1");
        City = request.form.get("txt_setting_city");
        ZipCode = request.form.get("txt_setting_zipcode");
        info = FName + "," + LName + "," + Address + "," + City + "," + ZipCode + "," + State;
        pythfile=open(filename,"r");
        fullinfo = []
        fullinfo = pythfile.readline();
        fullinfo.split("\n")
        pythfile.close();
        if userindex <= len(fullinfo): #This if statement checks if the user already had an address saved
            fullinfo[userindex] = info;
            
        else:
            fullinfo.append(info);

        pythfile.open(filename,"r+");
        pythfile.truncate(0);
        pythfile.close();
        pythfile.open(filename,"w");
        for i in len(fullinfo):
            pythfile.write(fullinfo[i] + "\n");
            
        pythfile.close();
        return settingsListen();

def settingsReturn:
    return redirect('/order');

def settingsDelete:
    global errormsg;
    pythfile = open(filename,"r+");
    fullinfo = pythfile.readline();
    fullinfo.split("\n");
    pythfile.close;
    if userindex <= len(fullinfo):
        del fullinfo[userindex];
        pythfile.open(filename,"r+");
        pythfile.truncate(0);
        pythfile.close();
        pythfile = open(filename,"w");
        for i in len(fullinfo):
            pythfile.write(fullinfo[i] + "\n");
    filename = "usernames.txt";
    pythfile = open(filename,"r+");
    fullinfo = pythfile.readline();
    fullinfo.split(',');
    pythfile.truncate(0);
    pythfile.close;
    del fullinfo[userindex];
    pythfile.open(filename,"w");
    
        
    return settingsListen();
def error():
    global errormsg;
    errormsg = "Something went wrong."
    return settingsListen();
    
