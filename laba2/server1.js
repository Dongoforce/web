const express = require('express');
const expressLogging = require('express-logging'),
logger = require('logops');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(expressLogging(logger, {policy: 'params'}));

app.get("/", function(request, response){
    response.send("<h4>Добро пожаловать на сервис #1</h4><a href=temp>temp</a>");
});

app.get('/temp', function (req, res, next) {
    res.send('<h2>Произвольный контент 1</h2> <img src="/img/image.png">');
})


app.listen(4001, function () {
    console.log('Example app listening on port 4001!');
});
