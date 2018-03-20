var mongoose = require('mongoose');

var Phone = new mongoose.Schema({
    thumbnail: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    }, 
    slug: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    title: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    os: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    display: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    front_camera: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    back_camera: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    cpu: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    gpu: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    ram: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    storage: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    length: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    width: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    depth: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    weight: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    colors: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    battery: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    wifi: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    bt: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    nfc: {
      type: Boolean,
      required: false,
      minlength: 1,
      trim: true
    },
    location: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    network: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    sensors: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    usb: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    sim: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    body: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    screen: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    price: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    }
}, {collection : 'phones'});

mongoose.model('Phone', Phone);
