var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('My Simple Demo App -  AWS Proton');
});
app.listen(80, function () {
  console.log('Demo NodeJS app listening on port 80.');
});
