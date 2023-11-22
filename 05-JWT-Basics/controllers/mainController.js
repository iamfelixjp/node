const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const login = async (req, res) => {
  const { username, password } = req.body;
  //   console.log(username, password);

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  // just for demo
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(StatusCodes.OK).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  // this functionality move to auth middleware
  /* console.log(req.headers);
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomeAPIError('No token provided', 401);
  }

  const token = authHeader.split(' ')[1];
  console.log(req.token);
*/
  // console.log(req.user);

  res.status(StatusCodes.OK).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
