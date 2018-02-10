var router = require('express').Router(),
    fs = require('fs'),
    path = require('path');

// hardcoded json information related to Pixel XL device
var device1 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'models', 'pixel.json'), 'utf8'));
var device2 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'models', 'pixelxl.json'), 'utf8'));

router.get('/', function(req, res, next) {
  return res.json({devices: [device1, device2]})
});

router.get('/pixel', function(req, res, next) {
  return res.json(device1);
});

router.get('/pixelxl', function(req, res, next) {
  return res.json(device2);
});

router.get('/compare/pixel-pixelxl', function(req, res, next) {
  return res.json({devices: [device1, device2]});
});

module.exports = router;
