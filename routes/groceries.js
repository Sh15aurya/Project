var express = require('express');
var app = express();
var dummyData = require('../dummydata.json')

app.get('/fruits', function(req, res, next) {
  const fruits = dummyData.filter( data => data.category === "fruits")
  console.log('-----------------fruits', fruits)
  res.render('groceries', { items: fruits, path: 'fruits' });
});

app.get('/vegetables', function(req, res, next) {
  const vegetables = dummyData.filter( data => data.category === "vegetables")
  res.render('groceries', { items: vegetables, path: 'vegetables' });
});

app.get('/frozen_foods', function(req, res, next) {
  const frozen_foods = dummyData.filter( data => data.category === "frozen_foods")
  res.render('groceries', { items: frozen_foods, path: 'frozen_foods' });
});

module.exports = app;
