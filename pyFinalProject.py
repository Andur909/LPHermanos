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
    global filename;
    filename = "logininfo.txt";
    if request.method == 'GET':
        return render_template('LogIn.html');
    else:
        return GetLogin();

def GetLogin():
    global startup
    logorsign = request.form['button']
    if logorsign == "login":
        user = request.form.get('txt_login_username');
        ps = request.form.get('txt_login_password');
        startup = "Log_In";
    else:
        user = request.form.get('txt_signin_username');
        ps = request.form.get('txt_signin_username');
        startup = "Sign_Up";
    userps = user + ps;
    pythfile = open(filename,"r+");
    storedinfo = pythfile.read();
    pythfile.close();
    if userps in storedinfo:
        if startup == "Sign_Up":
            return redirect('/settings');
        else:
            return redirect('/order');
    else:
        errormsg = "Username or password is incorrect";
        return render_template('login.html',start_type=startup,error_start=errormsg);
            
@app.route('/settings',methods=["GET","POST"])
def settingsMain():
    global filename;
    filename = "addressinfo.txt";
    info = [];
    return settingsListen

def settingsListen()
    global info;
    if request.method == "GET":
        if startup == "Log_In":
            if settingstartup == "Change":
                return render_template('Settings.html',startup=settingstartup);
            else:
                pythfile=open(filename,"r+");
                info = pythfile.readlines();
                pythfile.close();
                #Add a way to differ between entries and match to user
                return render_template('Settings.html',data=info);
        else:
            if settingstartup == "Change":
                return render_template('Settings.html',startup=settingstartup);#add {{startup on html}}
            else:
                return render_template('Settings.html');
    else:
        return settingsEnter();

def settingsEnter():
    choice = request.form['button'];
    switcher = {
        "Submit": settingsSubmit,
        "Cancel": settingsListen,
        "Return": settingsReturn,
        "Delete": settingsDelete,
        "error": error
        }
    return switcher.get(choice, "error")()

def settingsSubmit():
    global errormsg, startup, info
    State = request.form.get("cmb_state")
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
        info = [FName,LName,Address,City,ZipCode,State];
        return settingsListen();
