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



router.get('/:trainerId(\\d+)', asyncHandler(async (req, res) => {
    if (req.session.auth) {
        const trainerId = parseInt(req.params.trainerId, 10)
        // const catchlists = await db.Catchlist.findAll(trainerId,{

        //     include: [db.Catchlist,
        //     {
        //         model: db.CatchlistJoinPokemon,
        //         include: [db.Pokemon]
        //     }]

        // })


        const catchlists = await db.Catchlist.findAll({  //get 3 catchlists for single user
            where: { trainerId }
        })


        res.render('profile', { title: 'Profile', catchlists })


    }
}))



router.get('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async (req, res) => {
    //run query on join table where catchlistId is catchlistId

    const catchlistId = parseInt(req.params.catchlistId, 10)
    const jointable = await db.CatchlistJoinPokemon.findAll({
        include: {
            model: db.Pokemon,
            where: {
                catchlistId
            }
        }
    })
    // console.log('CatchList ---->', jointable)
    res.render('catchlist', { jointable })
}))






module.exports = router;
