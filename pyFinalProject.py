'''
Name: Jianzhuo Ye
Start Date: 5/20/24
End Date: TBD
Description
'''
import os.path
from os import path
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/',methods=["GET","POST"])
def main():
    if request.method == 'GET':
        return render_template('login.html');
    else:
        return GetLogin();

def GetLogin():
    global user, ps, file_path;
    file_path = os.cwd();
    filename = "logininfo.txt";
    logorsign = request.form.get("lbl_starter");
    if logorsign == "Sign_Up":
        user = request.form.get("txt_signup_username");
        ps = request.form.get("txt_signup_password");
    else:
        user = request.form.get("txt_login_username");
        ps = request.form.get("txt_login_password");
    userps = user + ps;
    pythfile = open(
    
