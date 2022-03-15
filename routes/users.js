const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });


const asyncHandler = (handler) => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', csrfProtection, (req, res) => {
  res.render('login', { csrfToken: req.csrfToken(), errors: [], user: {}})
});

router.post('/login', csrfProtection, asyncHandler(async(req, res) => {
  const { username, password } = req.body
  req.errors = []
  const user = await User.findOne({
    where: {
      username
    }
  })
}));


module.exports = router;
