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


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', { csrfToken: req.csrfToken(), errors: [], user: {} })
});

const trainerValidator = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/login', csrfProtection, trainerValidator, asyncHandler(async (req, res) => {
  const { username, password } = req.body
  let errors = [];
  validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    const user = await db.Trainer.findOne({
      where: {
        username
      }
    })
    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.password.toString())
      if (passwordMatch) {
        userLogin(req, res, user)
        return res.redirect('/')
      }
    }
    errors.push('Log-in failed. Please provide the correct username and password.')

  } else {
    errors = validationErrors.array().map((error) => error.msg);
  }
  res.render('login', {
    title: 'login',
    username,
    errors,
    csrfToken: req.csrfToken()
  })

}));

router.get('/signup', csrfProtection,(req, res) => {
  const user = db.Trainer.build()
  let errors = [];
  res.render('signup', {
    title: 'signup',
    user,
    errors,
    csrfToken: req.csrfToken()
  })
})

const signupValidator = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for username')
    .isLength({ max: 60 })
    .withMessage('Last Name must not be more than 60 characters long')
    .custom( value => {
      return db.Trainer.findOne({ where: {username: value}})
        .then( user => {
          if(user) {
            return Promise.reject('The Username you have entered is already in taken. Please try again')
          }
        })
    }),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 100 })
    .withMessage('Email Address must not be more than 100 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom( value => {
      return db.Trainer.findOne({ where: {emailAddress: value}})
        .then( user => {
          if(user) {
            return Promise.reject('The Email you have entered is already in use. Please try again')
          }
        })
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 60 })
    .withMessage('Password must not be more than 60 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 60 })
    .withMessage('Confirm Password must not be more than 60 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })

]

  router.post('/signup', csrfProtection, signupValidator, asyncHandler(async(req,res) => {
    const { username, emailAddress, password } = req.body;
    const user = db.Trainer.build({
      username, emailAddress
    })
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      const hashPassword = await bcrypt.hash(password, 10);
      user.password = hashPassword;
      await user.save();

      let wantingtoCatch = db.Catchlist.build({
        catchstatus: "Wanting to Catch",
        trainerId: user.id,
      })
      let tryingtoCatch = db.Catchlist.build({
        catchstatus: "Trying to Catch",
        trainerId: user.id,
      });
      let alreadyCaught = db.Catchlist.build({
        catchstatus: "Already Caught",
        trainerId: user.id,
      });
        await wantingtoCatch.save();
        await tryingtoCatch.save();
        await alreadyCaught.save()

      userLogin(req, res, user)
      req.session.save(() => res.redirect('/'));
    } else {
      errors = validationErrors.array().map((error) => error.msg);
      res.render('signup', {
        title: 'signup',
        user,
        errors,
        csrfToken: req.csrfToken()
      })
    }
  }))


  router.post('/logout',(req, res) =>{
    userLogout(req, res)
    res.redirect('/')
  })


  router.post('/demouser', asyncHandler(async(req, res) => {
    const demo = await db.Trainer.findOne({
      where: {username: "demouser"}
    });
    userLogin(req, res, demo);
    res.redirect('/')
  }))

module.exports = router;
