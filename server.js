var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var mongojs = require('mongojs');
var db = mongojs('main', ['movies']);

var app = express();

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.get('/main', function (req, res) {
  console.log("HELLO THIS IS A GET REQUEST")
  db.main.find(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

app.post('/main', function (req, res) {
  console.log(req.body, 'ROBERTISCOOL');
  db.main.insert(req.body, function(err, data) {
    res.json(data);
  })
})

app.delete('/main/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.main.remove({_id: mongojs.ObjectId(id)}, function (err, data) {
    res.json(data);
  })
})
// app.use('/', function (req, res, next) {
//   res.send('Hello World!')
// })

app.listen(port, function() {
  console.log(`Running the server on port ${port}`);
})


mongoose.connect('mongodb://localhost:27017/movie', function (err) {
  if (err) {
    console.log('Not connected to the db ' + err);
  }else {

    console.log('Successfully connected to MongoDB');
  }
});
