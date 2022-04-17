var express = require('express');
var app = express();
var dummyData = require('../groceries_data_dummy.json')

app.get('/fruits', function(req, res, next) {
  res.render('groceries', { items: dummyData.fruits, path: 'fruits' });
});

app.get('/vegetables', function(req, res, next) {
  res.render('groceries', { items: dummyData.vegetables, path: 'vegetables' });
});

app.get('/frozen_foods', function(req, res, next) {
  res.render('groceries', { items: dummyData.frozen_foods, path: 'frozen_foods' });
});

module.exports = app;
