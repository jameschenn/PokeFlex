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
    const trainerId = parseInt(req.params.trainerId, 10)
    const trainer = await db.Trainer.findByPk(trainerId)
    const catchlistId = parseInt(req.params.catchlistId, 10)
    const catchlist = await db.Catchlist.findByPk(catchlistId)
    // console.log('type')
    // const jointable = await db.CatchlistJoinPokemon.findAll(
    //     {
    //     include: {
    //         model: db.Pokemon,
    //         include: db.Catchlist
    //     }
    //     // where: {
    //     //     catchlistId
    //     // }
    // }
    // )
    const pokemons = await db.Catchlist.findAll({
        include: db.Pokemon,
        where: {id: catchlistId}

    })
    console.log(catchlist.catchstatus)
        const pokemonList = pokemons[0].Pokemons
        // console.log('POKEMONS ---->', pokemons[0].id)
    // console.log('CatchList ---->', pokemon[0].Pokemons.length)
    res.render('catchlist', { title: `${catchlist.catchstatus}`, pokemonList, trainer, catchlistId })

}))

// router.post('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async(req, res) => {
//     const catchlistId = parseInt(req.params.catchlistId, 10)
//     const trainerId = parseInt(req.params.trainerId, 10)
//     // post the pokemon to the catchlist associated to the trainer
//     if(req.session.auth) {
//         res.redirect(`/${trainerId}/${catchlistId}`);
//     }
// }))

const catchlistValidator = [
    check('catchlist_name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a Catch List name')
        .isLength({ max: 60 })
        .withMessage('Catch List name must not be more than 60 characters long')
]

router.get('/add', csrfProtection, asyncHandler(async (req, res, next) => {
    if (req.session.auth) {
        const trainerId = req.session.auth.userId;
        const catchlist = db.Catchlist.build();
        res.render('new-list', {
            title: "Create new Catchlist",
            catchlist,
            trainerId,
            csrfToken: req.csrfToken()
        });
    }
}))

router.post('/:trainerId(\\d+)', csrfProtection, catchlistValidator, asyncHandler(async (req, res) => {

    const { catchlist_name } = req.body;
    const trainerId = parseInt(req.params.trainerId, 10);
    const catchlist = db.Catchlist.build({ catchstatus: catchlist_name, trainerId });
    console.log('catchlist---------------', catchlist)
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        await catchlist.save()
        res.redirect(`/catchlists/${trainerId}`);
    } else {
        const errors = validationErrors.array().map(error => error.msg)
        res.render('new-list', {
            title: 'Create New Catchlist',
            catchlist,
            trainerId,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}))


// router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res, next) => {
//     if (req.session.auth) {
//         const trainerId = parseInt(req.params.trainerId, 10);
//         console.log('hi--------------------', req.params.userid)
//         // const catchlist = await db.Catchlist.findByPk();
//         res.render('edit-list', {
//             title: "Edit Catchlist",
//             // catchlist,
//             trainerId,
//             csrfToken: req.csrfToken()
//         });
//     }
// }))

//Delete entire Catchlist
router.delete('/:trainerId(\\d+)/:catchlistId(\\d+)', asyncHandler(async (req, res) => {
    const catchlistId = parseInt(req.params.catchlistId, 10)

    const catchlist = await db.Catchlist.findOne({
        where: {
            id: catchlistId,
        }
    });
    console.log('catchlist ----------', catchlist)
    await catchlist.destroy()
    res.json({ message: 'Success' });
}))

//Delete Pokemon off of List
router.delete('/:trainerId(\\d+)/:catchlistId(\\d+)/:pokeId(\\d+)', asyncHandler(async (req, res) => {
    const catchlistId = parseInt(req.params.catchlistId, 10)
    const pokeId = parseInt(req.params.pokeId, 10)
    console.log(catchlistId)
    console.log(pokeId)
    // const pokemons = await db.Catchlist.findAll({
    //     include: db.Pokemon,
    //     where: { id: catchlistId }
    // })
    const pokemon = await db.CatchlistJoinPokemon.findOne({
        where: {
            catchlistId,
            pokemonId: pokeId
        }
    })
    console.log("POKEMON ---------> ", pokemon);
    // const pokemonId = pokemon.id

    await pokemon.destroy()
    res.json({message: 'Success'});

//     // const pokemonList = pokemons[0].Pokemons

}))


module.exports = router;
