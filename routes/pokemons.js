const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const db = require('../db/models')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const session = require('express-session');
const {userLogin, userRestore, requireAuth, userLogout} = require('../auth')


const asyncHandler = (handler) => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};


router.get('/', asyncHandler(async(req, res) =>{
    const pokemon = await db.Pokemon.findAll()
    res.render('pokemon', { title:'pokemon', pokemon } )
})
)














module.exports=router;
