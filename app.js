var express = require('express');

var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render("home");
});

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("Running server...");
});