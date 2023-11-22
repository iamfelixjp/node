const authorize = (req, res, next) => {
  //   console.log('authorize');
  const { user } = req.query;

  if (user === 'felix') {
    req.user = { name: 'felix', id: 2 }; // added query 'user' to the req object
    // console.log(req.user);
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
