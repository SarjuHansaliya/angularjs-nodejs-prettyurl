var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression'); // This package is for sending gzip content

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build/')));



//Some Dummy Routes
//Your rotes will Come here
app.get('/test',function(req,res,next){
	res.status(200).send("Test Route Get");
});
app.post('/test',function(req,res,next){
	res.status(200).send("Test Route Post");
});


//If nothing matches
//We will send index file to client side
//So angular will take care of that route
//If we call url without hash control will go here
app.use('*',function(req,res,next){
	var indexFile = path.resolve(__dirname,'../client/build/index.html');
	res.sendFile(indexFile);
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});


module.exports = app;
