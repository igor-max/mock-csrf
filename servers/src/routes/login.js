const express = require('express')
const money = require('../money');
const router = express.Router();

router.get('/', function timeLog(req, res) {
  res.cookie('userId', 'ce032b305a9bc1ce0b0dd2a', { expires: new Date(Date.now() + 900000) })
  res.send({
    code: 0,
    message: 'success',
    data: {
      money: money.total
    }
  })
});


module.exports = router;