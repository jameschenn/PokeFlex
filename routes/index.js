const express = require('express');
const router = express.Router();
const db = require('../db/models')


/* GET home page. */
router.get('/', async function(req, res, next) {
  const pokemons = await db.Pokemon.findAll({
    order: [['id', 'ASC']],
    limit: 9
  })
  
  if(req.session.auth) {

    const userId = req.session.auth.userId
    const user = await db.Trainer.findByPk(userId);
    const username = user
    res.render('index', { title: 'Welcome To PokeFlex', user, pokemons});
  } else {
    const username = '';
    res.render('index', {title: 'Welcome to PokeFlex', username, pokemons})
  }
});





module.exports = router;
