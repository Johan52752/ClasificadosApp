from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo,ObjectId
from flask_cors import CORS
from bson import json_util
from werkzeug.security import generate_password_hash, check_password_hash
app=Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/ClasificadosApp'
mongo = PyMongo(app)
CORS(app)
db=mongo.db.products
db_users=mongo.db.usuarios


@app.route('/users', methods=['GET'])
def getUser():
    users=db_users.find()
    response=json_util.dumps(users)
    return Response(response, mimetype="application(json")
    


@app.route('/products',methods=['GET'])
def getProducts():
    pd=db.find()
    response=json_util.dumps(pd)
    return Response(response , mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True)
