var express = require('express');
var app = express();

// For Webhook Github

const secret = "nosecret";
const repo = "~/homepage-server";
const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

//Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/github", function (req, res) {
  req.on('data', function(chunk) {
      let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
          exec('cd ' + repo + ' && sudo git pull origin master && echo "pulled" && cd ~/homepage-server/frontend && sudo npm run build');
      }
  });
  res.end();
});

app.get('/api', function (req, res) {
  console.log("Tryed Connection");
  res.setHeader('Access-Control-Allow-Origin',"https://www.maximilian-wick.de");
  res.setHeader('Access-Control-Allow-Methods',"GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.send({text:'Hi from the API'});
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

//Functions
