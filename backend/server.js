
const express = require('express');
const bodyParser = require('body-parser');
var secret = "nosecret";
var repo = "~/deploy"
var exec = require('child_process').exec;
var crypto = require('crypto');
var app = express();

app.use(bodyParser.json()); 

//Testpath
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//Webhook for Deployment
app.post("/github", function (req, res) {
  console.log("Connection from Webhook");
  let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
  if (req.headers['x-hub-signature'] == sig) {
      exec('cd ' + repo + ' && sudo bash deploy.sh');
  }

  res.end(200);
});

//API Endpoint
app.get('/api', function (req, res) {
  console.log("Tryed Connection");
  console.log(req);
  res.setHeader('Access-Control-Allow-Origin',"https://www.maximilian-wick.de");
  res.setHeader('Access-Control-Allow-Methods',"GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.send({text:'Hi from the API'});
});

//Up-Message
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

//Functions
