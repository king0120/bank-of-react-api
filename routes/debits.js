const express = require('express');
const router = express.Router();

const debitsData = require('../data/debits');

router.get('/', (request, response) => {
    response.send(debitsData);
})

router.post('/', (req, res) => {
  const newDebit = {
      "id": uuid(),
      "description": req.body.description,
      "amount": parseFloat(req.body.amount),
      "date": new Date()
  }

  creditsData.push(newDebit)

  res.redirect('/debits')
})

module.exports = router;

module.exports = router;