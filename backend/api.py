from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests
import yaml
import json

#to update a header with a token, 
#sessions.headers.update()
app = Flask(__name__)
cors = CORS(app)

header1 = "https://www.googleapis.com/civicinfo/v2/voterinfo?"
header2 = "https://www.googleapis.com/civicinfo/v2/representatives?"

with open ('credentials.yml') as file:

	data =  yaml.load(file, Loader=yaml.FullLoader)
	key = "key=" + data['credentials']['key']


@app.route('/getElections', methods=['GET'])
def getElection():
	
	address = "&address="
	#requests.args is a dictionary
	for args in request.args:

		address += request.args[args] + '%20'

	url = '{}{}{}'.format(header1, key, address)
	print("helloooo{}".format(url))	

	session = requests.Session()
	response = session.get(url).json()
	return jsonify(response)

@app.route('/getRepresentatives', methods=['GET'])
def getRepresentatives():
	
	address = "&address="
	#requests.args is a dictionary
	for args in request.args:

		address += request.args[args] + '%20'

	url = '{}{}{}'.format(header2, key, address)
	print("{}".format(url))	

	session = requests.Session()
	response = session.get(url).json()
	return jsonify(response)


if __name__ == '__main__':
	app.run(debug=True, host='localhost')