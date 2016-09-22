var mcpadc = require('mcp-spi-adc');
var myLightArray = [0,0,0,0,0,0,0,0];

var lightSensor = mcpadc.open(0, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

	if(err) throw err;

	setInterval(function () {
		lightSensor.read(function (err, reading) {
			if (err) throw err;
			myLightArray[0] = ((reading.value) * 1000);

			//console.log("sensor 0 reading = " + (reading.value) * 1000);
		});
	}, 1000);
});

var lightSensor1  = mcpadc.open(1, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

	if(err) throw err;
	setInterval(function () {
		lightSensor1.read(function (err, reading) {
			if (err) throw err;
			myLightArray[1] = ((reading.value) * 1000);

			//console.log("sensor 1 reading = " + (reading.value) * 1000);
		});
	}, 2000);
});

var lightSensor2 = mcpadc.open(2, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

	if(err) throw err;
	setInterval(function () {
		lightSensor2.read(function (err, reading) {
			if (err) throw err;
			myLightArray[2] = ((reading.value) * 1000);

			//console.log("sensor 2 reading = " + (reading.value) * 1000);
		});
	}, 2000);
});

var lightSensor3 = mcpadc.open(3, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

	if(err) throw err;
	setInterval(function () {
		lightSensor3.read(function (err, reading) {
			if (err) throw err;
			myLightArray[3] = ((reading.value) * 1000);

			//console.log("sensor 3 reading = " + (reading.value) * 1000);
		});
	}, 2000);
});

var lightSensor4 = mcpadc.open(4, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

        if(err) throw err;
        setInterval(function () {
                lightSensor4.read(function (err, reading) {
                        if (err) throw err;
			myLightArray[4] = ((reading.value) * 1000);

                        //console.log("sensor 4 reading = " + (reading.value) * 1000);
                });
        }, 2000);
});

var lightSensor5 = mcpadc.open(5, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

        if(err) throw err;
        setInterval(function () {
                lightSensor5.read(function (err, reading) {
                        if (err) throw err;
			myLightArray[5] = ((reading.value) * 1000);
                        
			//console.log("sensor 5 reading = " + (reading.value) * 1000);
                });
        }, 2000);
});

var lightSensor6 = mcpadc.open(6, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

        if(err) throw err;
        setInterval(function () {
                lightSensor6.read(function (err, reading) {
                        if (err) throw err;
			myLightArray[6] = ((reading.value) * 1000);
                        
			//console.log("sensor 6 reading = " + (reading.value) * 1000);
                });
        }, 2000);
});

var lightSensor7 = mcpadc.open(7, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {

        if(err) throw err;
        setInterval(function () {
                lightSensor7.read(function (err, reading) {
                        if (err) throw err;
			myLightArray[7] = ((reading.value) * 1000);

                       // console.log("sensor 7 reading = " + (reading.value) * 1000);
                });
        }, 2000);
});

var reportArray = setInterval(function () {
		console.log ("sensor 0: " + myLightArray[0] + "...");
		console.log ("sensor 1: " + myLightArray[1] + "...");
		console.log ("sensor 2: " + myLightArray[2] + "...");
		console.log ("sensor 3: " + myLightArray[3] + "...");
		console.log ("sensor 4: " + myLightArray[4] + "...");
		console.log ("sensor 5: " + myLightArray[5] + "...");
		console.log ("sensor 6: " + myLightArray[6] + "...");
		console.log ("sensor 7: " + myLightArray[7] + "...");
}, 5000);
