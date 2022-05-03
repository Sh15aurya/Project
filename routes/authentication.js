const express = require('express');
const router = express.Router();
const Models = require('../models')
const { compareSync, genSaltSync, hashSync} = require('bcrypt')


/* GET users listing. */
router.post('/register', async function(req, res, next){
   console.log(req.body)
    try{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.Email;
    const password = req.body.Password;
    const user = await Models.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password

    })

    if(user){
        res.redirect('/')
    }else{
        res.redirect('/SignUp')
    }
   } catch(err){
       next({ message: err.message})
    }
});

router.post('/login', async function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    const user = await Models.User.findOne({
        where: { email },
    })
    // express-session
    if(user){

        const isPasswordValid = compareSync(password, user.password)

        if(isPasswordValid){
            req.session.currentUser = user
            console.log('---login success', req.session.currentUser)
            res.redirect('/')
        }else{
            next({message: "Authentication Failed"})
        }
    }else{
        next({message: "Authentication Failed"})
    }
})

router.get('/logout', async function(req, res, next){
    req.session.currentUser = null
    res.back()
})

router.post('/forgotPassword', async function(req, res, next){
    const email =  req.body.email
    const newPassword = req.body.password
    const salt = genSaltSync(8);
    const hash = hashSync(newPassword, salt);

    await Models.User.update({
        password: hash
    },{
        where: { email: email }
    })

    res.redirect('/')

})
module.exports = router;
