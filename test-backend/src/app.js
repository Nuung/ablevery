var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var formRouter = require('./routes/formRoutes');
var app = express();

app.use(logger('dev'));
app.use(express.json()); // body-parser setting ~ express include body-parser from 4.X version
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

formRouter(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
