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
    if request.method == "GET":
        if startup == "Log_In":
            pythfile=open(filename,"r+");
            info = pythfile.readlines();
            return render_template('Settings.html',data=info);
        else:
            return render_template('Settings.html');
    else:
        return settingsEnter();

def settingsEnter():
    
    
    
