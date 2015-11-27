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

app.get('/logout/:id', function (req, res) {
	currentEstimates[req.params.id] = -1;
});

app.get('/story', function (req, res) {
	res.json({"story": currentStory});
});

app.get('/estimate/:id/:estimate', function (req, res) {
	currentEstimates[req.params.id] = req.params.estimate;
});

app.get('/estimate/:story', function (req, res) {
	currentStory = req.params.story;
});

app.get('/estimates', function (req, res) {
	var a = [];
	for (id in currentEstimates) {
		if (currentEstimates[id] != -1) {
			a.push({"id": id, "estimate": currentEstimates[id]})
		}
	}
	res.json(a);
});



var server = app.listen(3000, function () {
});