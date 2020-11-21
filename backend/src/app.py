from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo,ObjectId
from flask_cors import CORS
from bson import json_util
from werkzeug.security import generate_password_hash, check_password_hash
app=Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/ClasificadosApp'
mongo = PyMongo(app)
CORS(app)
db_products=mongo.db.products
db_users=mongo.db.usuarios


@app.route('/user', methods=['POST'])
def verUser():
    print(request.json," xdd")
    email=request.json['email']
    password=request.json['password']
    if email and password:
        ver=db_users.find({"email":email, "password":password})
        response=json_util.dumps(ver)
        if ver:
            return Response(response, mimetype="application/json")

@app.route('/users', methods=['POST'])
def createUser():
    name=request.json['name']
    email=request.json['email']
    password=request.json['password']
    if name and email and password:
        c_user=db_users.insert({
            "email":email,
            "name":name,
            "password":password   
        })
        res=db_users.find({"_id":ObjectId(c_user)})
        response= json_util.dumps(res)
        return Response(response, mimetype="application/json")
    else:
        message=not_found()
        return message
    

@app.errorhandler(404)
def not_found(error=None):
    message={
        "msg":"resource not found"+ request.url,
        "error":"404"
    }
    return message
@app.route('/products',methods=['GET'])
def getProducts():
    pd=db_products.find()
    response=json_util.dumps(pd)
    return Response(response , mimetype="application/json")

@app.route('/product/<id>',methods=['GET'])
def getProduct(id):
    product=db_products.find_one({"_id":ObjectId(id)})
    response=json_util.dumps(product)
    return Response(response,mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
