var express = require('express');
var http = require('http')
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var core = require('./routes/core');
var sm = require('./routes/sm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/poker', core);

module.exports = app;
