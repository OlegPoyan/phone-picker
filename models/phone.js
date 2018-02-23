var mongoose = require('mongoose');

var Phone = mongoose.model('Phone', {
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
    description: {
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
    height: {
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
    speaker: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    },
    microphone: {
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
    other: {
      type: String,
      required: false,
      minlength: 1,
      trim: true
    }
});

module.exports = {Phone};
