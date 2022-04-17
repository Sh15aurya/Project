var express = require('express');
var router = express.Router();
var dummyData = require('../groceries_data_dummy.json')

router.get('/fruits', function(req, res, next) {
  res.render('groceries', { items: dummyData.fruits, path: 'fruits' });
});

router.get('/vegetables', function(req, res, next) {
  res.render('groceries', { items: dummyData.vegetables, path: 'vegetables' });
});

router.get('/frozen_foods', function(req, res, next) {
  res.render('groceries', { items: dummyData.frozen_foods, path: 'frozen_foods' });
});

module.exports = router;
