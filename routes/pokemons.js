const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const db = require('../db/models')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');
const session = require('express-session');
const { userLogin, userRestore, requireAuth, userLogout } = require('../auth')


const asyncHandler = (handler) => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};


router.get('/', asyncHandler(async (req, res) => {
  const page = req.query.page === undefined ? 1 : parseInt(req.query.page)
  const pokemon = await db.Pokemon.findAll({
    limit: 30,
    offset: 30 * (page - 1)
  })
  res.render('pokemon', { title: 'pokemon', pokemon })
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

  const pokemonId = parseInt(req.params.id, 10)
  const pokemon = await db.Pokemon.findByPk(pokemonId);
  let catchlists;
  let trainer;

  // check if logged in
  // get session auth id
  // pass that in to find the trainer
  // then find all catchlists associated to the trainer
  // render catchlists in the pug template
  if (req.session.auth) {
    const id = req.session.auth.userId
    trainer = await db.Trainer.findByPk(id);
    catchlists = await db.Catchlist.findAll({
      where: { trainerId: trainer.id }
    })
  }
  // console.log("TRAINER --->", trainer);
  // console.log("CATCHLIST ---->", catchlists)
  res.render('pokemon-profile', { title: `${pokemon.name}`, pokemon, catchlists, trainer })
}))


router.post('/:pokemonId(\\d+)', asyncHandler(async (req, res) => {
  let trainer;
  if (req.session.auth) {
    const id = req.session.auth.userId
    trainer = await db.Trainer.findByPk(id);
  }
  const pokeId = parseInt(req.params.pokemonId, 10)
  console.log('REQ BODY', req.body);
  const { catchlistId } = req.body;
  // console.log('CATCHLIST ID', catchlistId);
  // console.log('POKEMON ID', pokeId);

  await db.CatchlistJoinPokemon.create({
    catchlistId,
    pokemonId: pokeId
  })

  // console.log('hello')
  res.redirect(`/catchlists/${trainer.id}/${catchlistId}`);
}))

// router.delete('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async (req, res) => {
//   const catchlistId = parseInt(req.params.catchlistId, 10)
//   // console.log(catchlistId)
//   // const pokemons = await db.Catchlist.findAll({
//   //     include: db.Pokemon,
//   //     where: { id: catchlistId }
//   // })
//   const pokemon = await db.CatchlistJoinPokemon.findOne({
//       where: {
//           catchlistId,

//       }
//   })
//   console.log("POKEMON ---------> ", pokemon);
//   // const pokemonId = pokemon.id
//   await db.CatchlistJoinPokemon.destroy({
//     where: { catchlistId },
//   //   include: db.Pokemon
//   });

//     // const pokemonList = pokemons[0].Pokemons

// }))
// router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
//   const pokemonId = parseInt(req.params.id, 10)
//   const pokemon = await db.Pokemon.findByPk(pokemonId);

// }))


// router.get('/:id(\\d+)', asyncHandler(async(req, res) => {

//   const pokemonId = parseInt(req.params.id, 10)
//   const pokemon = await db.Pokemon.findByPk(pokemonId);
//   let catchlists;
//   let trainer;

//   // check if logged in
//   // get session auth id
//   // pass that in to find the trainer
//   // then find all catchlists associated to the trainer
//   // render catchlists in the pug template
//   if(req.session.auth) {
//     const id = req.session.auth.userId
//     trainer = await db.Trainer.findByPk(id);
//     catchlists = await db.Catchlist.findAll({
//       where: { trainerId: trainer.id}
//     })
//   }
//   console.log("TRAINER --->", trainer);
//   console.log("CATCHLIST ---->", catchlists)
//   res.render('pokemon-profile', { title: `${pokemon.name}`, pokemon, catchlists, trainer })
// }))


module.exports = router;
