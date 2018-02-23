const {MongoClient, ObjectID} = require('mongodb');  //object destructuring

MongoClient.connect('mongodb://localhost:27017/PhoneApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  const db = client.db('PhoneApp');

  db.collection('phones').insertOne({
    slug: 'nexus-pixel',
    title: 'Nexus Pixel',
    description: 'Pixel, Phone by Google. 1st generation.',
    os: 'Android 7.1 Nougat',
    display: '5.0" AMOLED Full HD (1920x1080) 441ppi',
    front_camera: '8 MP',
    back_camera: '12.3 MP',
    cpu: 'Qualcomm® Snapdragon™ 821',
    gpu: 'Adreno™ 530 GPU',
    ram: '4GB',
    storage: '32GB, 128GB',
    length: '5.66 in (143.84 mm)',
    width: '2.74 in (69.54 mm)',
    height: '0.29 in (7.31 mm)',
    weight: '5.04 oz (143 g)',
    colors: 'Very Silver/Quite Black/Really Blue (Limited Edition)',
    speaker: 'single bottom-firing speaker',
    microphone: '3 microphones (2 front, 1 rear)',
    battery: '2,770 mAh',
    wifi: 'Wi-Fi 802.11 a/b/g/n/ac 2x2 MIMO, dual-band (2.4 GHz, 5.0 GHz)',
    bt: 'Bluetooth 4.2',
    nfc: true,
    location: 'GPS and GLONASS',
    network: 'GSM: Quad-band GSM,UMTS/WCDMA : B 1/2/4/5/8, CDMA: BC0/BC1/BC10, TD-SCDMA: N/A',
    sensors: 'Pixel Imprint, a fast fingerprint sensor, Accelerometer/Gyroscope,Magnetometer,Barometer, Proximity sensor/Ambient Light Sensor,Hall sensor, Android Sensor Hub',
    usb: 'USB-C/USB 3.0',
    sim: 'Nano SIM slot',
    body: 'anodized aluminium',
    screen: 'Corning® Gorilla® Glass 4',
    other: 'RGB LED notification light, Hearing Aid Compatibility rating: M4/T4 HAC'
  },(err,result) => {
    if(err) {
      return console.log('Failed to insert collection || ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


db.collection('phones').insertOne({
    slug: 'nexus-pixel-xl',
    title: 'Nexus Pixel XL',
    description: 'Pixel, Phone by Google. 1st generation.',
    os: 'Android 7.1 Nougat',
    display: '5.5" AMOLED Full HD (2560x1440) 534ppi',
    front_camera: '8 MP',
    back_camera: '12.3 MP',
    cpu: 'Qualcomm® Snapdragon™ 821',
    gpu: 'Adreno™ 530 GPU',
    ram: '4GB',
    storage: '32GB, 128GB',
    length: '6.09 in (154.72 mm)',
    width: '2.98 in (75.74 mm)',
    height: '0.29 in (7.31 mm)',
    weight: '5.04 oz (143 g)',
    colors: 'Very Silver/Quite Black/Really Blue (Limited Edition)',
    speaker: 'single bottom-firing speaker',
    microphone: '3 microphones (2 front, 1 rear)',
    battery: '3,450 mAh',
    wifi: 'Wi-Fi 802.11 a/b/g/n/ac 2x2 MIMO, dual-band (2.4 GHz, 5.0 GHz)',
    bt: 'Bluetooth 4.2',
    nfc: true,
    location: 'GPS and GLONASS',
    network: 'GSM: Quad-band GSM,UMTS/WCDMA : B 1/2/4/5/8, CDMA: BC0/BC1/BC10, TD-SCDMA: N/A',
    sensors: 'Pixel Imprint, a fast fingerprint sensor, Accelerometer/Gyroscope,Magnetometer,Barometer, Proximity sensor/Ambient Light Sensor,Hall sensor, Android Sensor Hub',
    usb: 'USB-C/USB 3.0',
    sim: 'Nano SIM slot',
    body: 'anodized aluminium',
    screen: 'Corning® Gorilla® Glass 4',
    other: 'RGB LED notification light, Hearing Aid Compatibility rating: M4/T4 HAC'
  },(err,result) => {
    if(err) {
      return console.log('Failed to insert collection || ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  db.collection('phones').insertOne({
      slug: 'iPhone-8',
      title: 'iPhone 8',
      description: 'iPhone by Apple, 8th Generation.',
      os: 'iOS 11',
      display: '4.7" Retina HD (750x1334) 326 ppi',
      front_camera: '7 MP',
      back_camera: '12 MP',
      cpu: 'A11 Bionic chip',
      gpu: 'Apple GPU (three-core graphics)',
      ram: '2GB',
      storage: '64GB, 256GB',
      length: '5.45 in(138.4 mm)',
      width: '2.65 in(67.3 mm)',
      height: '0.29 in (7.31 mm)',
      weight: '5.22 ounces(148 g)',
      colors: 'Gold, Silver, Space Gray',
      speaker: 'single bottom-firing speaker',
      microphone: '3 microphones (1 front, 1 bottom, 1 rear)',
      battery: '1821 mAh Li-ion',
      wifi: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
      bt: 'Bluetooth 5.0',
      nfc: true,
      location: 'Assisted GPS, GLONASS, and QZSS',
      network: 'GSM/HSPA/LTE',
      sensors: 'Touch ID fingerprint sensor, Barometer, three-axis gyro, accelerometer, proximity, ambient light',
      usb: 'Lightning to USB 2.0',
      sim: 'Nano SIM slot',
      body: 'front/back glass, aluminum frame',
      screen: 'Ion-strengthened glass, oleophobic coating',
      other:  'Hearing Aid Compatibility rating: M3/T4, IP67 rating'
    },(err,result) => {
      if(err) {
        return console.log('Failed to insert collection || ', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });


    db.collection('phones').insertOne({
        slug: 'iPhone-8-plus',
        title: 'iPhone 8 Plus',
        description: 'iPhone by Apple, 8th Generation.',
        os: 'iOS 11',
        display: '5.5" Retina HD (1080x1920) 401 ppi',
        front_camera: '7 MP',
        back_camera: '12 MP (wide-angle and telephoto)',
        cpu: 'A11 Bionic chip',
        gpu: 'Apple GPU (three-core graphics)',
        ram: '2GB',
        storage: '64GB, 256GB',
        length: '6.24 in(158.4 mm)',
        width: '3.07 in(78.1 mm)',
        height: '0.30 in (7.5 mm)',
        weight: '5.22 ounces(148 g)',
        colors: 'Gold, Silver, Space Gray',
        speaker: 'single bottom-firing speaker',
        microphone: '3 microphones (1 front, 1 bottom, 1 rear)',
        battery: '2691 mAh Li-ion',
        wifi: 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
        bt: 'Bluetooth 5.0',
        nfc: true,
        location: 'Assisted GPS, GLONASS, and QZSS',
        network: 'GSM/HSPA/LTE',
        sensors: 'Touch ID fingerprint sensor, Barometer, three-axis gyro, accelerometer, proximity, ambient light',
        usb: 'Lightning to USB 2.0',
        sim: 'Nano SIM slot',
        body: 'front/back glass, aluminum frame',
        screen: 'Ion-strengthened glass, oleophobic coating',
        other: 'Hearing Aid Compatibility rating: M3/T4, IP67 rating'
      },(err,result) => {
        if(err) {
          return console.log('Failed to insert collection || ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      });

  client.close();
});
