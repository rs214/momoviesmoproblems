var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));


app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})


mongoose.connect('mongodb://localhost:27017/review', function (err) {
  if (err) {
    console.log('Not connected to the db ' + err);
  }else {
    console.log('Successfully connected to MongoDB');
  }
});