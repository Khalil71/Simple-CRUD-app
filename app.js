var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
// var RateLimit = require('express-rate-limit'); //module for request throttling as requested not implemented

var posts = require('./routes/posts');
var users = require('./routes/users');
var albums = require('./routes/albums');
var collections = require('./routes/collections');

// var limiter = new RateLimit({
//   windowMs: 15*60*1000, // 15 minutes
//   max: 100, // limit each IP to 100 requests per windowMs
//   delayMs: 0 // disable delaying - full speed until the max limit is reached
// });

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());

//  apply to all requests
// app.use(limiter);

app.use('/posts', posts);
app.use('/users', users);
app.use('/albums', albums);
app.use('/collections', collections);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("url doesn't exist");
});

module.exports = app;
