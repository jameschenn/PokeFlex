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
    const page = req.query.page=== undefined? 1 : parseInt(req.query.page)
    const pokemon = await db.Pokemon.findAll({
        limit: 30,
        offset: 30 * (page-1)
    })
    res.render('pokemon', { title:'pokemon', pokemon } )
}))

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {

  const pokemonId = parseInt(req.params.id, 10)
  const pokemon = await db.Pokemon.findByPk(pokemonId);
  let catchlists;
  // check if logged in
  // get session auth id
  // pass that in to find the trainer
  // then find all catchlists associated to the trainer
  // render catchlists in the pug template
  if(req.session.auth) {
    const id = req.session.auth.userId
    const trainer = await db.Trainer.findByPk(id);
    console.log(trainer)
    catchlists = await db.Catchlist.findAll({
      where: { trainerId: trainer.id}
    })
  }
  console.log(catchlists)
  res.render('pokemon-profile', { title: `${pokemon.name}`, pokemon, catchlists })
}))

// router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
//   const pokemonId = parseInt(req.params.id, 10)
//   const pokemon = await db.Pokemon.findByPk(pokemonId);

// }))














module.exports=router;
