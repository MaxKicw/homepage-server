var express = require('express');
var bodyParser = require('body-parser');
var GithubWebHook = require('express-github-webhook');
var webhookHandler = GithubWebHook({ path: '/github', secret: 'nosecret' });
const shell = require('shelljs');
var app = express();
app.use(bodyParser.json()); // must use bodyParser in express
app.use(webhookHandler); // use our middleware

// Webhook 

webhookHandler.on('*', function (event, repo, data) {
  console.log("Jawoollll");
  //shell.exec('~/deploy/deploy.sh');
  shell.exec('echo "Start Deployment now"');
  shell.exec('~/homepage-server/ && sudo git pull origin master && sudo npm install');
  shell.exec('~/homepage-server/frontend && sudo npm run build');
  shell.exec('echo "Build done"');
});

//Endpoints

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/githubkkkk", function (req, res) {
  console.log("Connection from Webhook");
  let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
  if (req.headers['x-hub-signature'] == sig) {
      exec('cd ' + repo + ' && sudo git pull origin master && echo "pulled" && sudo npm install && cd ~/homepage-server/frontend && sudo npm run build');
  }
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
