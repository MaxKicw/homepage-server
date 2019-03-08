var express = require('express');
var app = express();

//Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/github", function (req, res) {
  var sender = req.body.sender;
  var branch = req.body.ref;

  if(branch.indexOf('master') > -1 && sender.login === githubUsername){
      deploy(res);
  }
})

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


function deploy(res){
  childProcess.exec('cd /home/max && ./deploy.sh', function(err, stdout, stderr){
      if (err) {
       console.error(err);
       return res.send(500);
      }
      res.send(200);
    });
}
