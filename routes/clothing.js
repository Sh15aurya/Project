var express = require('express');
var app = express();
var dummyData = require('../clothing_data_dummy.json')

app.get('/Men', function(req, res, next) {
    res.render('clothing', { items: dummyData.Men, path: 'Men' });
});

app.get('/Women', function(req, res, next) {
    res.render('clothing', { items: dummyData.Women, path: 'Women' });
});

app.get('/Children', function(req, res, next) {
    res.render('clothing', { items: dummyData.Children, path: 'Children' });
});

module.exports = app;
