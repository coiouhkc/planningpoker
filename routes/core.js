var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

var currentId = 1;
var currentStory = "Das ist eine Story.";
var currentEstimates = {};

router.get('/id', function (req, res) {
	res.json({"id": currentId++})
});

router.get('/story', function (req, res) {
	res.json({"story": currentStory})
});

router.post('/nextStory', function (req, res, next) {
	currentStory = req.body.story;
	currentEstimates = {};
})

router.post('/estimate', function (req, res, next) {
	currentEstimates[req.body.id] = req.body;
})

router.get('/poll', function (req, res) {
	var poll = [];
	for (id in currentEstimates) {
		poll.push(currentEstimates[id])
	}
	res.json(poll);
});

module.exports = router;
