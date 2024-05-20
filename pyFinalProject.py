'''
Names: Jianzhuo Ye, Anderson Rivera
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
    global user, ps
    
