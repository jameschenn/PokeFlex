const express = require('express');
const router = express.Router();
const db = require('../db/models')


/* GET home page. */
router.get('/', function(req, res, next) {
  const user = db.Trainer.build()
  res.render('index', { title: 'Welcome To PokeFlex', user });
});





module.exports = router;
