var blockchain = require('./router');
var bodyParser = require("body-parser");
var express = require("express");
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('connected');
})

app.use('/blockchain', blockchain)

module.exports = app;