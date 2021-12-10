const express = require('express')
const router = express.Router();

router.use('/', function timeLog(req, res) {
  const { query } = req;
  const { userId } = req.cookies;
  if(userId){
    res.send({
      status: 'transfer success',
      transfer: query.number
    })
  }else{
    res.send({
      status: 'error',
      transfer: ''
    })
  }
});


module.exports = router;