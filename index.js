var express = require ('express');
var app = express();
var currentId = 0;
var currentStory = '';
var currentEstimates = {};

app.use(express.static('app'));
app.use(express.static('bower_components'));

app.get('/', function (req, res) {
	res.send('Hello World!')
});

app.get('/login', function (req, res) {
	res.json({"id": currentId++});
});

app.get('/story', function (req, res) {
	res.json({"story": currentStory});
});

app.get('/estimate/:id/:estimate', function (req, res) {
	currentEstimates[req.params.id] = req.params.estimate;
	res.send('ok');
});

app.get('/estimate/:story', function (req, res) {
	currentStory = req.params.story;
	res.send('ok');
});

app.get('/estimates', function (req, res) {
	var a = [];
	for (id in currentEstimates) {a.push({"id": id, "estimate": currentEstimates[id]})}
	res.json(a);
});



var server = app.listen(3000, function () {
});