const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controller')
const getRoute = express.Router()

//the server
const index = express()

//Idk why it needs cors
const cors = require('cors')
index.use(cors())

const port = 3000

let data = index.get ('/', controller.getUserRepresentative)
getRoute.route('/').get(controller.getUserRepresentative)

//console.log(data)
index.listen(port, () => console.log(`Listening on port ${port}...`));

//module.exports(getRoute)