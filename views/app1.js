

const express = require("express");
const app = express();
app1.set('view engine', 'ejs');
console.log("hello");

console.log("Welcome to first node program");
app1.get('/', function(req, res){
         //res.send("Hello this is the first Node program");
          res.render('index');
});

const PORT=3000;
const IP='127.0.0.1';

app1.listen(PORT, IP, function(){
console.log("Node server is up and running");
});
