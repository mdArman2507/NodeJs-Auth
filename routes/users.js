const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController')

//------------ LogIn & Sing UP by Social Athutentication------------//
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'./auth/login'}),authController.loginHandle);


module.exports = router;