const express = require('express')
const router = express.Router();

router.use('/', function timeLog(req, res) {
  res.cookie('userId', 'ce032b305a9bc1ce0b0dd2a', { expires: new Date(Date.now() + 900000) })
  res.end('ok')
});


module.exports = router;