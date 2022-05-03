var express = require('express');
var app = express();
var groceriesRouter = require('./groceries')
var clothingRouter = require('./clothing')
var authenticationRouter = require('./authentication')
var cartRouter = require('./cart')
var dummyData = require('../dummydata.json')

app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser;
  next()
})
/* GET home page. */
app.get("/", function (req, response) {
  response.render("index", {Title:"DesiZon"});
});

app.use('/groceries', groceriesRouter);
app.use('/clothing', clothingRouter);
app.use('/authentication', authenticationRouter);
app.use('/', cartRouter );
app.get('/search', function(req, res, next){
  const searchQuery = req.query.q
  const searchResult = dummyData.filter( data => data.name.toLowerCase().includes(searchQuery))
  res.render('searchResult', { items: searchResult })
})
app.get("/SignUp", function (req, response) {
  response.render("SignUp", {Title:"DesiZon"});
});

app.get("/About", function (req, response) {
  response.render("About", {Title:"DesiZon"});
});

app.get("/login", function (req, response) {
  response.render("login", {Title:"DesiZon"});
});

app.get("/schoolSupplies", function(req, response){
  response.render("schoolSupplies",{Title: "DesiZon"});
});



app.get("/checkout", function (req, response) {
  response.render("checkout", {Title:"DesiZon"});
});



module.exports = app;
