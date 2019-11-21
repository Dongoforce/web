var express = require('express');
var app = express();
var respect = [{count: 100, name: "Rembo"}, {count: 50, name: "Koi"}];

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/payrespect', function(req, res) {
	res.json(respect);
});

app.post('/payrespect', function(req, res){
	
	if (!req.body.count || !req.body.name)
	{
		res.statusCode = 404;
		res.send({err: "Bad reqest!"});
		console.log("Hi")
	}
	else
	{	
		respect.push({count: req.body.count, name: req.body.name});
		res.send("Succes added!");
	}
});

app.put('/payrespect', function(req, res){
	
    if (!req.body.count || !req.body.name)
	{
		res.statusCode = 404;
		res.send({err: "Bad reqest!"});
	}
	
	var id = respect.findIndex(persona => persona.name === req.body.name);
	
	if (id != -1)
	{
		respect[id].count = req.body.count;
		res.send("Succes reworked!");
	}
	else
	{	
		res.statusCode = 322;
		res.send({err: "Incorrect name!"});
	}
});

app.delete('/payrespect', function(req, res){
	
	if (!req.body.name)
	{
		res.statusCode = 404;
		res.send({err: "Bad reqest!"});
	}
	
	var id = respect.findIndex(persona => persona.name === req.body.name)
	
	if (id != -1)
	{
		 respect = respect.filter(function(persona)
		{
			return persona.planet !== req.body.planet;
		})
		res.send("Succes deleted!");
	}
	else
	{	
		res.statusCode = 322;
		res.send({err: "Incorrect name!"});
	}
});



