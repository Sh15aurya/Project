const express = require('express');
const router = express.Router();
const Models = require('../models')
router.get("/cart", async function (req, response) {
    const cartItems = await Models.Cart.findAll()

    let totalPrice = 0
    let totalQuantity =0
    cartItems.forEach( item => {
        const price = item.quantity * item.price
        totalPrice += price
        totalQuantity += item.quantity
    })
    response.render("cart", {Title:"DesiZon", cartItems, totalPrice, totalQuantity});
});
router.post('/cart', async function(req, res)
{
    const productName = req.body.productName;
    const productImage = req.body.productImage;
    const quantity = req.body.quantity;
    const price = req.body.price;

    let cart = await Models.Cart.findOne({
        where: { productName }
    })

    if(cart){
        await cart.update({ quantity: cart.quantity + 1})
    }else{
        cart = await Models.Cart.create({
            productName: productName,
            productImage,
            quantity,
            price
        })
    }



    if(cart){
        res.redirect('/cart')
    }else{
        res.back()
    }
} )

router.post("/cart/updateQuantity/:cartId", async function (req, res){
    const cartId = req.params.cartId;
    const quantity = req.body.quantity;

    await Models.Cart.update({
        quantity: quantity
    },{
        where: { id: cartId }
    })

    res.back()

})

router.post("/cart/remove/:cartId", async function (req, res){
    const cartId = req.params.cartId;

    await Models.Cart.destroy({
        where: { id: cartId }
    })

    res.back()

})

router.post('/payment', async function (req,res)
{
    const fname = req.body.fullName;
    const email = req.body.email;
    const adr = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const cname = req.body.cardname;
    const ccnum = req.body.cardnumber;
    const expmonth = req.body.expmonth;
    const expyear = req.body.expyear;
    const cvv = req.body.cvv;






    res.render('payment_success', {

    })
})
module.exports = router;