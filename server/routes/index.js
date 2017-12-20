var express = require('express');
var router = express.Router();


router.post('/users', function(req, res, next) {
  console.log(req.body);
  res.send('User created successfully');
});


module.exports = router;
