var express = require('express');
var app = express();

// For Webhook Github


//Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/github", function (req, res) {
  console.log("Webhook call from GitHub reached server");
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
