var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require("../database-mongo/index.js")
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/notes', function (req, res) {
	console.log(req.body)
	db.save(req.body , function (err , data) {
		if(err){
			res.send(err);
		}
		res.send(data)
	})
});

app.get('/notes', function (req, res) {
	db.Note.find(function(err,data){
		if(err){
			res.send(err)
		}else{
    var array=[];
    for (var i = data.length-7; i < data.length; i++) {
      array.push(data[i])
    }
		res.send(array)
  }
	})

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

