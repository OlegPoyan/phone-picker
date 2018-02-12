CREATE DATABASE PhonePicker;
use PhonePicker;

CREATE TABLE Device (
    Device_id int NOT NULL AUTO_INCREMENT,
    slug nvarchar(150),
    title nvarchar(150),
    description nvarchar(150),
    os nvarchar(100),
    display nvarchar(150),
    front_camera nvarchar(150),
    back_camera nvarchar(150),
    cpu nvarchar(150),
    gpu nvarchar(150),
    ram nvarchar(150),
    storage nvarchar(150),
    length nvarchar(150),
    width nvarchar(150),
    height nvarchar(150),
    weight nvarchar(150),
    colors nvarchar(200),
    speaker nvarchar(150),
    microphone nvarchar(150),
    battery nvarchar(150),
    wifi nvarchar(200),
    bt nvarchar(50),
    nfc bit,
    location nvarchar(150),
    network nvarchar(200),
    sensors nvarchar(400),
    usb nvarchar(100),
    sim nvarchar(100),
    body nvarchar(150),
    screen nvarchar(150),
    other nvarchar(250),
    constraint pk_device_id primary key (Device_id)
);
CREATE TABLE USER(
    User_id int NOT NULL AUTO_INCREMENT,
    First_Name nvarchar(100),
    Last_Name nvarchar(100),
    email nvarchar(150),
    constraint pk_user_id primary key (User_id)
);

INSERT INTO Device (
	Device_id, slug, title, description, os, display, front_camera, back_camera, cpu, gpu, ram, storage, length, 
	width, height, weight, colors, speaker, microphone, battery, wifi, bt, nfc, location, network, sensors, 
	usb, sim, body, screen, other)
	VALUES 
	(null, 'nexus-pixel', 'Nexus Pixel', 'Pixel, Phone by Google. 1st generation.', 'Android 7.1 Nougat', '5.0" AMOLED Full HD (1920x1080) 441ppi',
	'8 MP', '12.3 MP', 'Qualcomm® Snapdragon™ 821', 'Adreno™ 530 GPU', '4GB', '32GB, 128GB', '5.66 in (143.84 mm)',
	'2.74 in (69.54 mm)', '0.29 in (7.31 mm)', '5.04 oz (143 g)', 'Very Silver/Quite Black/Really Blue (Limited Edition)',
	'single bottom-firing speaker', '3 microphones (2 front, 1 rear)', '2,770 mAh', 'Wi-Fi 802.11 a/b/g/n/ac 2x2 MIMO, dual-band (2.4 GHz, 5.0 GHz)',
	'Bluetooth 4.2', true, 'GPS and GLONASS', 'GSM: Quad-band GSM,UMTS/WCDMA : B 1/2/4/5/8, CDMA: BC0/BC1/BC10, TD-SCDMA: N/A',
	'Pixel Imprint, a fast fingerprint sensor, Accelerometer/Gyroscope,Magnetometer,Barometer, Proximity sensor/Ambient Light Sensor,Hall sensor, Android Sensor Hub',
	'USB-C/USB 3.0', 'Nano SIM slot', 'anodized aluminium', 'Corning® Gorilla® Glass 4', 'RGB LED notification light, Hearing Aid Compatibility rating: M4/T4 HAC'),
	(null, 'nexus-pixel-xl', 'Nexus Pixel XL', 'Pixel, Phone by Google. 1st generation.', 'Android 7.1 Nougat', '5.5" AMOLED Full HD (2560x1440) 534ppi',
	'8 MP', '12.3 MP', 'Qualcomm® Snapdragon™ 821', 'Adreno™ 530 GPU', '4GB', '32GB, 128GB', '6.09 in (154.72 mm)',
	'2.98 in (75.74 mm)', '0.29 in (7.31 mm)', '5.04 oz (143 g)', 'Very Silver/Quite Black/Really Blue (Limited Edition)',
	'single bottom-firing speaker', '3 microphones (2 front, 1 rear)', '3,450 mAh', 'Wi-Fi 802.11 a/b/g/n/ac 2x2 MIMO, dual-band (2.4 GHz, 5.0 GHz)',
	'Bluetooth 4.2', true, 'GPS and GLONASS', 'GSM: Quad-band GSM,UMTS/WCDMA : B 1/2/4/5/8, CDMA: BC0/BC1/BC10, TD-SCDMA: N/A',
	'Pixel Imprint, a fast fingerprint sensor, Accelerometer/Gyroscope,Magnetometer,Barometer, Proximity sensor/Ambient Light Sensor,Hall sensor, Android Sensor Hub',
	'USB-C/USB 3.0', 'Nano SIM slot', 'anodized aluminium', 'Corning® Gorilla® Glass 4', 'RGB LED notification light, Hearing Aid Compatibility rating: M4/T4 HAC'),
	(null, 'iPhone-8', 'iPhone 8', 'iPhone by Apple, 8th Generation.', 'iOS 11', '4.7" Retina HD (750x1334) 326 ppi',
	'7MP', '12 MP', 'A11 Bionic chip', 'Apple GPU (three-core graphics)', '2GB', '64GB, 256GB', '5.45 in(138.4 mm)',
	'2.65 in(67.3 mm)', '0.29 in (7.3 mm)', '5.22 ounces(148 g)', 'Gold, Silver, Space Gray',
	'single bottom-firing speaker', '3 microphones (1 front, 1 bottom, 1 rear)', '1821 mAh Li-ion', 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
	'Bluetooth 5.0', true, 'Assisted GPS, GLONASS, and QZSS', 'GSM/HSPA/LTE',
	'Touch ID fingerprint sensor, Barometer, three-axis gyro, accelerometer, proximity, ambient light',
	'Lightning to USB 2.0', 'Nano SIM slot', 'front/back glass, aluminum frame', 'Ion-strengthened glass, oleophobic coating', 'Hearing Aid Compatibility rating: M3/T4, IP67 rating'),
	(null, 'iPhone-8-plus', 'iPhone 8 Plus', 'iPhone by Apple, 8th Generation.', 'iOS 11', '5.5" Retina HD (1080x1920) 401 ppi',
	'7MP', '12 MP(wide-angle and telephoto', 'A11 Bionic chip', 'Apple GPU (three-core graphics)', '2GB', '64GB, 256GB', '6.24 in(158.4 mm)',
	'3.07 in(78.1 mm)', '0.30 in (7.5 mm)', '5.22 ounces(148 g)', 'Gold, Silver, Space Gray',
	'single bottom-firing speaker', '3 microphones (1 front, 1 bottom, 1 rear)', '2691 mAh Li-ion', 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot',
	'Bluetooth 5.0', true, 'Assisted GPS, GLONASS, and QZSS', 'GSM/HSPA/LTE',
	'Touch ID fingerprint sensor, Barometer, three-axis gyro, accelerometer, proximity, ambient light',
	'Lightning to USB 2.0', 'Nano SIM slot', 'front/back glass, aluminum frame', 'Ion-strengthened glass, oleophobic coating', 'Hearing Aid Compatibility rating: M3/T4, IP67 rating');
    