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
        return render_template('login.html');
    else:
        return GetLogin();

def GetLogin():
    filename = "logininfo.txt";
    logorsign = request.form['button']
    if logorsign == "login":
        user = request.form.get('txt_login_username');
        ps = request.form.get('txt_login_password');
    else:
        user = request.form.get('txt_signin_username');
        ps = request.form.get('txt_signin_username');
    userps = user + ps;
    pythfile = open(filename,"r+");
    storedinfo = pythfile.read();
    if userps in storedinfo:
        return redirect('/settings');
    else:
        errormsg = "Username or password is incorrect"
    
