var express = require('express');
const { createHash } = require('crypto');

var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){
	res.render("home");
});

app.post('/ebay', (req, res) => {
	const challengeCode = req.query.challenge_code;
	const verificationToken = 'asdfjhawenljk32h234asdfjkh_asdfaks2jvnme3';
	const endpoint = 'www.robschwartz.co/ebay'
	const hash = createHash('sha256');
	hash.update(challengeCode);
	hash.update(verificationToken);
	hash.update(endpoint);
	const responseHash = hash.digest('hex');
	const challengeResponse = new Buffer.from(responseHash).toString();
	res.setHeader('content-type', 'application/json');
	res.send({challengeResponse})
})

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("Running server...");
});