var router = require('express').Router();

// hardcoded json information related to Pixel XL device
var device1 = require('./device.json');


router.get('/device', function(req, res, next) {
  return res.send(device1);
});

module.exports = router;
