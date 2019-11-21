var express = require('express');
var app = express();
var expressLogging = require('express-logging');
var logger = require('logops');
let bodyParser = require("body-parser")
var path = require("path");


var respect = [{count: 100, name: "Rembo"}, {count: 50, name: "Koi"}];

app.use(expressLogging(logger));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.type("html")
  res.sendFile(__dirname + "/static/html/hack.txt");
});

app.get('/hack', function (req, res) {
  res.sendFile(__dirname + "/static/html/index.html");
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});

app.get('/payrespect', function(req, res) {
	res.json(respect);
});

app.post('/payrespect', function(req, res){
	
	if (!req.body.count || !req.body.name)
	{
		res.status(404).send("Bad reqest!");
	}
	else
	{	
		respect.push({count: req.body.count, name: req.body.name});
		res.status(201).send("Succes added!");
	}
});

app.put('/payrespect', function(req, res){
	
    if (!req.body.count || !req.body.name)
	{
		res.status(404).send("Bad reqest!");
	}
	
	var id = respect.findIndex(persona => persona.name === req.body.name);
	
	if (id != -1)
	{
		respect[id].count = req.body.count;
		res.status(200).send("Succes reworked!");
	}
	else
	{	
		res.status(322).send("Incorrect name!");
	}
});

app.delete('/payrespect', function(req, res){
	
	if (!req.body.name)
	{
		res.status(404).send("Bad reqest!");
	}
	
	var id = respect.findIndex(persona => persona.name === req.body.name)
	
	if (id != -1)
	{
		 respect = respect.filter(function(persona)
		{
			return persona.name !== req.body.name;
		})
		res.status(204).send("Succes deleted!");
	}
	else
	{	
	    res.status(322).send("Incorrect name!");
	}
});

app.options('/payrespect', function(req, res){
	res.set("Allow", "GET, POST, PUT, DELETE, OPTIONS").end();
});


