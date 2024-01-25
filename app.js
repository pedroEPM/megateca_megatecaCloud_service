require('dotenv').config();
const routes = require('./routes/v1')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app)
app.listen(process.env.GENERAL_PORT, () => {
    console.clear();
    console.log('server: \x1b[32m%s\x1b[0m', 'Online')
	console.log('port: '+ process.env.GENERAL_PORT)
})
