var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


app.set("view engine", "jade");

app.set("views", path.join(__dirname, 'views'));

app.use(bodyParser());

app.get("/", function(req,res){
  res.json({
    id:1,
    lol:"This worked"
  }
);


  console.log("i has hacked all ur bases");
})

app.get("/index", function (req, res) {

  res.render('index');
})

app.get("/main/", function(req, res){
  res.render('main');
})

app.get("/home/", function(req,res){
  res.render('home');
})


var api_groups = require('./routes/api_index');


app.listen(1337, function(){
  console.log("server running on port 1337");
})
