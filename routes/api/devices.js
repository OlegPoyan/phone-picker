var router = require('express').Router(),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var Phone = mongoose.model('Phone');
var User = mongoose.model('User');

router.param('slug', function(req, res, next, slug) {
  Phone.findOne({ slug: slug})
    .then(function (phone) {
      if (!phone) { return res.sendStatus(404); }

      req.phone = phone;

      return next();
    }).catch(next);
});

// queryable endpoint
// example http://localhost:3000/api/devices/
router.get('/',function(req,res,next) {
    var query = {};
    var limit = 10;
    var offset = 0;

    // limit and offset for the pagination purposes
    if(typeof req.query.limit !== 'undefined'){
        limit = req.query.limit;
    }

    if(typeof req.query.offset !== 'undefined'){
        offset = req.query.offset;
    }

    //add arguments to the query object
    if(typeof req.query.os !== 'undefined'){
        query.os = {$regex: new RegExp('.*' + req.query.os + '.*'), $options: 'i'};
    }

    if(typeof req.query.storage !== 'undefined'){
      query.storage = {$regex: new RegExp('.*' + req.query.storage + '.*'), $options: 'i'};
    }

    if(typeof req.query.ram !== 'undefined'){
        query.ram = {$regex: new RegExp('.*' + req.query.ram + '.*'), $options: 'i'};
    }

    if(typeof req.query.display !== 'undefined'){
        query.display = {$regex: new RegExp('.*' + req.query.display + '.*'), $options: 'i'};
    }

    if(typeof req.query.front_camera !== 'undefined'){
        query.front_camera = {$regex: new RegExp('.*' + req.query.front_camera + '.*'), $options: 'i'};
    }

    if(typeof req.query.back_camera !== 'undefined'){
        query.back_camera = {$regex: new RegExp('.*' + req.query.back_camera + '.*'), $options: 'i'};
    }

    if(typeof req.query.cpu !== 'undefined'){
        query.cpu = {$regex: new RegExp('.*' + req.query.cpu + '.*'), $options: 'i'};
    }

    if(typeof req.query.gpu !== 'undefined'){
        query.gpu = {$regex: new RegExp('.*' + req.query.gpu + '.*'), $options: 'i'};
    }

    if(typeof req.query.length !== 'undefined'){
      query.length = {$regex: new RegExp('.*' + req.query.length + '.*'), $options: 'i'};
    }

    if(typeof req.query.width !== 'undefined'){
      query.width = {$regex: new RegExp('.*' + req.query.width + '.*'), $options: 'i'};
    }

    if(typeof req.query.depth !== 'undefined'){
      query.depth = {$regex: new RegExp('.*' + req.query.depth + '.*'), $options: 'i'};
    }

    if(typeof req.query.weight !== 'undefined'){
      query.weight = {$regex: new RegExp('.*' + req.query.weight + '.*'), $options: 'i'};
    }

    if(typeof req.query.colors !== 'undefined'){
      query.colors = {$regex: new RegExp('.*' + req.query.colors + '.*'), $options: 'i'};
    }

    if(typeof req.query.battery !== 'undefined'){
      query.battery = {$regex: new RegExp('.*' + req.query.battery + '.*'), $options: 'i'};
    }

    if(typeof req.query.location !== 'undefined'){
      query.location = {$regex: new RegExp('.*' + req.query.location + '.*'), $options: 'i'};
    }

    if(typeof req.query.screen !== 'undefined'){
      query.screen = {$regex: new RegExp('.*' + req.query.screen + '.*'), $options: 'i'};
    }

    if(typeof req.query.network !== 'undefined'){
      query.network = {$regex: new RegExp('.*' + req.query.network + '.*'), $options: 'i'};
    }

    return Promise.all([
        Phone.find(query)
            .limit(Number(limit))
            .skip(Number(offset))
            .exec(),
        Phone.count(query).exec()
    ]).then(function(results){
        console.log(results);
        var phones = results[0];
        var phonesCount = results[1];
        return res.json({
            phones: phones,
            phonesCount: phonesCount
        });
    }).catch(next);
});


//example of using URL arguments to get specific phones from the
//database.
//example route: localhost:3000/api/devices/nexus-pixel
router.get('/:slug',function(req,res) {
    return res.json({phone: req.phone});
});

module.exports = router;
