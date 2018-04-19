const expect = require('expect');
const request = require('supertest');

const {app} = require('./../app.js');
const {Phone} = require('./../models/phone.js');
const {ObjectID} = require('mongodb');

const phones = [
    {
        "_id" : new ObjectID('5ab122acf05b7a884d73139e'),
        "thumbnail" : "https://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg",
        "slug" : "Samsung_Galaxy_S8",
        "title" : "Samsung Galaxy S8",
        "os" : "Android 7.0 (Nougat), upgradable to Android 8.0 (Oreo)",
        "display" : "Super AMOLED capacitive touchscreen, 16M colors (1440 x 2960 pixels, 18.5:9 ratio (~570 ppi density))",
        "back_camera" : "12 MP (f/1.7, 26mm, 1/2.5\", 1.4 �m, Dual Pixel PDAF), phase detection autofocus, OIS, LED flash, check quality",
        "front_camera" : "8 MP (f/1.7, 25mm, 1/3.6\", 1.22 �m), autofocus, 1440p@30fps, dual video call, Auto HDR",
        "cpu" : "Octa-core (4x2.3 GHz Mongoose M2 & 4x1.7 GHz Cortex-A53) - EMEAOcta-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) - USA & China",
        "gpu" : "Mali-G71 MP20 - EMEAAdreno 540 - USA & China",
        "ram" : "4 GB",
        "storage" : "64 GB",
        "length" : "5.86 in (148.9 mm)",
        "width" : "2.68 in (68.1 mm)",
        "depth" : " 0.31  in ( 8   mm)",
        "weight" : "155 g (5.47 oz)",
        "colors" : "Midnight Black, Orchid Gray, Arctic Silver, Coral Blue, Maple Gold, Rose Pink, Burgundy Red",
        "battery" : "Non-removable Li-Ion 3000 mAh battery (11.55 Wh)",
        "wifi" : "Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot",
        "bt" : "5.0, A2DP, LE, aptX",
        "nfc" : true,
        "location" : "Yes, with A-GPS, GLONASS, BDS, GALILEO",
        "network" : "GSM / HSPA / LTE",
        "sensors" : "Iris scanner, fingerprint (rear-mounted), accelerometer, gyro, proximity, compass, barometer, heart rate, SpO2",
        "usb" : "3.1, Type-C 1.0 reversible connector",
        "sim" : "Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by)",
        "body" : "Front/back glass (Gorilla Glass 5), aluminum frame",
        "screen" : "Corning Gorilla Glass 5",
        "price" : "About 530 EUR"
    },
    {
        "_id" : new ObjectID(),
        "thumbnail" : "https://cdn2.gsmarena.com/vv/bigpic/oneplus-3t-.jpg",
        "slug" : "OnePlus_3T",
        "title" : "OnePlus 3T",
        "os" : "Android 6.0.1 (Marshmallow), upgradable to Android 8.0 (Oreo)",
        "display" : "Optic AMOLED capacitive touchscreen, 16M colors (1080 x 1920 pixels, 16:9 ratio (~401 ppi density))",
        "back_camera" : "16 MP (f/2.0, 1/2.8\", 1.12 �m), phase detection autofocus, OIS, LED flash, check quality",
        "front_camera" : "16 MP (f/2.0, 1.0 �m), 1080p",
        "cpu" : "Quad-core (2x2.35 GHz Kryo & 2x1.6 GHz Kryo)",
        "gpu" : "Adreno 530",
        "ram" : "6 GB",
        "storage" : "64/128 GB",
        "length" : "6.01 in (152.7 mm)",
        "width" : "2.94 in (74.7 mm)",
        "depth" : " 0.29  in ( 7.4   mm)",
        "weight" : "158 g (5.57 oz)",
        "colors" : "Gunmetal, Soft Gold, Midnight Black",
        "battery" : "Non-removable Li-Ion 3400 mAh battery",
        "wifi" : "Wi-Fi 802.11 a/b/g/n/ac, Wi-Fi Direct, DLNA, hotspot",
        "bt" : "4.2, A2DP, aptX HD, LE",
        "nfc" : "Yes",
        "location" : "Yes, with A-GPS, GLONASS, BDS",
        "network" : "GSM / HSPA / EVDO / LTE",
        "sensors" : "Fingerprint (front-mounted), accelerometer, gyro, proximity, compass",
        "usb" : "2.0, Type-C 1.0 reversible connector",
        "sim" : "Dual SIM (Nano-SIM, dual stand-by)",
        "body" : "Front glass, aluminum body",
        "screen" : "Corning Gorilla Glass 4",
        "price" : "About 440 EUR"
    }
];

describe('Get /api/devices', () => {
    it('Should get 10 devices', (done) => {
        request(app).get('/api/devices').expect(200).expect((res) => {
            expect(res.body.phones.length).toBe(10);
        }).end(done);
    });
});

describe('Get /api/devices/:slug', () => {
    it('Should get Samsung Galaxy 8 device', (done) => {
        request(app).get('/api/devices/Samsung_Galaxy_S8').expect(200).expect((res) => {
            expect(res.body.phone.slug).toBe(phones[0].slug);
        }).end(done);
    });
});
