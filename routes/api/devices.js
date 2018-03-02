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

//example of using URL arguments to get specific phones from the
//database.
//example route: localhost:3000/api/devices/slug/nexus-pixel
router.get('/slug/:slug',(req,res,next) => {
  var slug = req.params.slug;
  Phone.findOne({slug: slug}).then((phone) => {
    if(phone === null) {
      res.status(400).send();
    } else {
      res.send({phone});
    }
  }).catch((err) => {
    res.status(400).send(err);
  });
});

//Gets a phone with a matching title
//example route: localhost:3000/api/devices/slug/nexus-pixel
router.get('/title/:title',(req,res,next) => {
  var title = req.params.title;
  Phone.findOne({title: title}).then((phone) => {
    if(phone === null) {
      res.status(400).send(title);
    } else {
      res.send({phone});
    }
  }).catch((err) => {
    res.status(400).send(err);
  });
});


//Gets all phones with a matching os
// localhost:3000/api/devices/os/Android 7.1 Nougat
router.get('/os/:os',(req,res,next) => {
  var os = req.params.os;
  Phone.find({os: os}).then((phones) => {
    if(phones === null) {
      res.status(400).send(title);
    } else {
      res.send({phones});
    }
  }).catch((err) => {
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
