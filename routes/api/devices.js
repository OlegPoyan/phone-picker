var router = require('express').Router(),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser');

var {mongoose} = require('../../database/mongoose');
var {Phone} = require('../../models/phone');
var {User} = require('../../models/user');

// hardcoded json information related to Pixel XL device
var device1 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'models', 'pixel.json'), 'utf8'));
var device2 = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'models', 'pixelxl.json'), 'utf8'));


router.get('/',(req,res,next) => {
    Phone.find().then((phones) => {
      res.send({phones});
    }, (err) => {
      res.status(400).send(err);
    });
});
//
// router.get('/', function(req, res, next) {
//   return res.json({devices: [device1, device2]})
// });
//
// router.get('/pixel', function(req, res, next) {
//   return res.json(device1);
// });
//
// router.get('/pixelxl', function(req, res, next) {
//   return res.json(device2);
// });
//
// router.get('/compare/pixel-pixelxl', function(req, res, next) {
//   return res.json({devices: [device1, device2]});
// });

module.exports = router;
