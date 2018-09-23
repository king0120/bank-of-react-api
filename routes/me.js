const express = require('express');
const router = express.Router();

const userData = require('../data/me');

router.get('/', (request, response) => {
    response.send(userData);
})

router.patch('/', (req, res) => {
  const updatedUser = {
    name: req.body.name || userData.name,
    email: req.body.email || userData.email,
    city: req.body.city || userData.city
  }

  Object.assign(userData, updatedUser)

  res.redirect('/me')
})

module.exports = router;

module.exports = router;