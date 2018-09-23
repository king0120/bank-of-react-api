const express = require('express');
const uuid = require('uuid')
const router = express.Router();

const creditsData = require('../data/credits');

router.get('/', (request, response) => {
  response.send(creditsData);
});

router.post('/', (req, res) => {
  const newCredit = {
      "id": uuid(),
      "description": req.body.description,
      "amount": parseFloat(req.body.amount),
      "date": new Date()
  }

  creditsData.push(newCredit)

  res.redirect('/credits')
})

module.exports = router;