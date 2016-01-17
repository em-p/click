var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var items = []
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, 'views'));

app.use(bodyParser());
app.get("/", function (req, res) {
  //res.json({
    //status: "ok",
		//version: "1"
  //});
  console.log("i has hacked all ur bases");
  res.render('index');
})
app.listen(1337, function(){
  console.log("server running on port 1337");
})
