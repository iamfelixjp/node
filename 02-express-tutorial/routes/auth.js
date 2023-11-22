const express = require('express');
const router = express.Router();
// router.use(express.json());

router.post('/', (req, res) => {
  //   console.log(req.body.name);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send('Please Provide Credentials');
});

module.exports = router;
