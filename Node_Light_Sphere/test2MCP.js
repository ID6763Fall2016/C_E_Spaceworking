var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

var Engine = require('tingodb')();
var assert = require('assert');


var db = new Engine.Db(__dirname + '/db',{});

function handler (req, res) {
	fs.readFile(__dirname + '/public/lightMap.html',
		function (err, data) {
			res.writeHead(200);
			res.end(data);
		});
	console.log("user connected");
}

app.listen(8000);

var mcpadc = require('mcp-spi-adc');
var myLightArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function readSensors (chipSwitch) {
	if(chipSwitch == 1) {
		lightSensor.read(function (err, reading) {
			if (err) throw err;
			myLightArray[0] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor1.read(function (err, reading) {
			if (err) throw err;
			myLightArray[1] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor2.read(function (err, reading) {
			if (err) throw err;
			myLightArray[2] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor3.read(function (err, reading) {
			if (err) throw err;
			myLightArray[3] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor4.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[4] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor5.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[5] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor6.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[6] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor7.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[7] = Math.round(((reading.value) * 1000));
        	});
				
	}else if (chipSwitch == 2) {
	
		lightSensor8.read(function (err, reading) {
			if (err) throw err;
			myLightArray[8] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor9.read(function (err, reading) {
			if (err) throw err;
			myLightArray[9] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor10.read(function (err, reading) {
			if (err) throw err;
			myLightArray[10] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor11.read(function (err, reading) {
			if (err) throw err;
			myLightArray[11] = Math.round(((reading.value) * 1000));
		});
		
		lightSensor12.read(function (err, reading) {
           		 if (err) throw err;
			myLightArray[12] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor13.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[13] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor14.read(function (err, reading) {
           		if (err) throw err;
			myLightArray[14] = Math.round(((reading.value) * 1000));
        	});
		
		lightSensor15.read(function (err, reading) {
            		if (err) throw err;
			myLightArray[15] = Math.round(((reading.value) * 1000));
        	});
	}

}

// setup variables for second MCP3008 
var lightSensor = mcpadc.open(0, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor1  = mcpadc.open(1, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor2 = mcpadc.open(2, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor3 = mcpadc.open(3, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor4 = mcpadc.open(4, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor5 = mcpadc.open(5, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor6 = mcpadc.open(6, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor7 = mcpadc.open(7, {busNumber: 0, deviceNumber: 0, speedHz: 20000}, function (err) {
        if(err) throw err;
});

// setup variables for second MCP3008 

var lightSensor8 = mcpadc.open(0, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor9  = mcpadc.open(1, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor10 = mcpadc.open(2, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor11 = mcpadc.open(3, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
	if(err) throw err;
});

var lightSensor12 = mcpadc.open(4, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor13 = mcpadc.open(5, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor14 = mcpadc.open(6, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
        if(err) throw err;
});

var lightSensor15 = mcpadc.open(7, {busNumber: 0, deviceNumber: 1, speedHz: 20000}, function (err) {
        if(err) throw err;
});


io.on('connection', function (socket) {
        console.log("user connected to socket");

        socket.on('messageFromClientToServer', function(data){
                console.log(data);
        });

        var reportArray = setInterval(function () {
                readSensors (1);
                readSensors (2);
                socket.emit('messageFromServerToClient', myLightArray);
		console.log(myLightArray);
        }, 1000);
		
		var sendLatestSamples = setInterval(function() {
			getLatestSamples(64, function(results) {
				var values = [];
				for(var i=0; i<results.length; i++) {
					values.push(results[i].value);
				}
				socket.emit('latestSamples', values);
				console.log(values);
			});
		},1000);

        socket.on('disconnect', function(){
                console.log("user disconnected from socket");
                clearInterval(reportArray);
				clearInterval(sendLatestSamples);
        });

});

		
var insertSample = function(theValue, theDate){
	var sampleCollection = db.collection('chartstuff');
	sampleCollection.insert({
	"value" : theValue,
	"datetime" : theDate
	},
	function(err, docResult) {
	assert.equal(err, null);
	console.log("inserted a sample into the chartStuff collection.");
	//db.close();
	});
};

setInterval(function(){
	var getDate = new Date();
	insertSample(myLightArray[0],getDate);
	insertSample(myLightArray[1],getDate);
	insertSample(myLightArray[2],getDate);
	insertSample(myLightArray[3],getDate);
	insertSample(myLightArray[4],getDate);
	insertSample(myLightArray[5],getDate);
	insertSample(myLightArray[6],getDate);
	insertSample(myLightArray[7],getDate);
	insertSample(myLightArray[8],getDate);
	insertSample(myLightArray[9],getDate);
	insertSample(myLightArray[10],getDate);
	insertSample(myLightArray[11],getDate);
	insertSample(myLightArray[12],getDate);
	insertSample(myLightArray[13],getDate);
	insertSample(myLightArray[14],getDate);
	insertSample(myLightArray[15],getDate);
},1000);

var getLatestSamples = function(theCount,callback){
	var sampleCollection = db.collection('chartstuff');
	sampleCollection
	.find()
	.sort({"datetime":-1})
	.limit(theCount)
	.toArray(function(err,docList){
	callback(docList);
	});
};





