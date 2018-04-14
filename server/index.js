var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require("../database-mongo/index.js")
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser())

app.post('/Notes', function (req, res) {
	console.log(req.body)
	db.save(req.body , function (err , data) {
		if(err){
			res.send(err);
		}
		res.send(data)
	})
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.get('/Notes', function (req, res) {

});
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

