const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   res.send('this site is undergoing maintenance');
  next();
};

module.exports = logger;
