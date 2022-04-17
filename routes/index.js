const express = require('express');
var app = express();
var groceriesRouter = require('./groceries')

/* GET home page. */
app.get("/", function (req, response) {
  response.render("index", {Title:"DesiZon"});
});

app.use('/groceries', groceriesRouter);


app.get("/SignUp", function (req, response) {
  response.render("SignUp", {Title:"DesiZon"});
});

app.get("/About", function (req, response) {
  response.render("About", {Title:"DesiZon"});
});

app.get("/schoolSupplies", function(req, response){
  response.render("schoolSupplies",{Title: "DesiZon"});
});

app.get("/cart", function (req, response) {
  response.render("cart", {Title:"DesiZon"});
});

app.get("/checkout", function (req, response) {
  response.render("checkout", {Title:"DesiZon"});
});



module.exports = app;
