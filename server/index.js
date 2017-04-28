var express = require('express');
var app = express();
var db = require('../data.json');
// added the below...
var json = require('../data.json');
var ReposDB = require('../database/index.js');

// added bodyParser for parsing req data from client
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// for http requests to github
// var request = require('request');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  var username = req.body.term;

  console.log('req.data: ', username);
  console.log("chasin' dat mongoose");

  updateDatabase(username);
  locateRecord(username, res);
});

var updateDatabase = function(username) {
  var newUser = new ReposDB({
    id: 12345,
    login: username,
    full_name: `repo-${username}`,
    html_url: `www.${username}/repo.com`,
    description: `fake info for ${username}`
  });

  newUser.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });
}

var locateRecord = function(username, res) {
  ReposDB.find({'login': username}, function(err, user){
    res.send(user);
  });
}

app.get('/repos', function (req, res) {
  res.send('inside repos');
});

app.get('/repos/import', function (req, res) {
  res.send('inside repos/import');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
