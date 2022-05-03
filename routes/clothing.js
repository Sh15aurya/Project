var express = require('express');
var app = express();
var dummyData = require('../dummydata.json')

app.get('/Men', function(req, res, next) {
    const men= dummyData.filter( data => data.category === "men")
    res.render('clothing', { items: men, path: 'Men' });
});

app.get('/Women', function(req, res, next) {
    const women= dummyData.filter( data => data.category === "women")
    res.render('clothing', { items: women, path: 'Women' });
});

app.get('/Children', function(req, res, next) {
    const children= dummyData.filter( data => data.category === "children")
    res.render('clothing', { items:children, path: 'Children' });
});

module.exports = app;
