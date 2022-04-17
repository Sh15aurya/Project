const express = require('express');
const router = express.Router();
const groceriesRouter = require('./groceries')

/* GET home page. */
router.get("/", function (req, response) {
  response.render("index", {Title:"DesiZon"});
});

router.use('/groceries', groceriesRouter);


router.get("/SignUp", function (req, response) {
  response.render("SignUp", {Title:"DesiZon"});
});

router.get("/About", function (req, response) {
  response.render("About", {Title:"DesiZon"});
});

router.get("/schoolSupplies", function(req, response){
  response.render("schoolSupplies",{Title: "DesiZon"});
});

router.get("/cart", function (req, response) {
  response.render("cart", {Title:"DesiZon"});
});

router.get("/checkout", function (req, response) {
  response.render("checkout", {Title:"DesiZon"});
});



module.exports = router;
