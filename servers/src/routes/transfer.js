const express = require('express')
const money = require('../money');
const router = express.Router();

router.get('/', function timeLog(req, res) {
  console.log(req.cookies)
  console.log(111);

  res.send({
    code: 0,
    data: {}
  })
  // if(userId){
  //   money.total -= 100;
  //   res.send({
  //     code: 0,
  //     message: 'success',
  //     data: {
  //       money: money.total
  //     }
  //   })
  // }else{
  //   res.send({
  //     code: 0,
  //     status: 'error',
  //     transfer: ''
  //   })
  // }
});


module.exports = router;