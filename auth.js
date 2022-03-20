const db = require('./db/models')



const userLogin = (req, res, user) => {
  req.session.auth = { userId: user.id }
}



const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/user/login');
  }
  return next();
};



const userRestore = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.Trainer.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};


const userLogout = async (req, res) => {
  delete req.session.auth;
}



module.exports = { userLogin, userRestore, requireAuth, userLogout }
