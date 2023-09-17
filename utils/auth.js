const withAuth = (req, res, nest) => {
  if (req.session.logged_ing) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;