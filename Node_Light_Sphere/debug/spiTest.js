var rpio = require('rpio');

rpio.spiBegin();
rpio.spiChipSelect(0);

var txBuffer = new Buffer([0x3, 0x0, 0x0, 0x0]);
var rxBuffer = new Buffer('HELLOSPI');

rpio.spiTransfer(txBuffer, rxBuffer, 8);

for (var i = 0; i <= 7; i++) {

	process.stdout.write(String.fromCharCode(rxBuffer[i]) + (i == 7 ? '\n' : ' '));
	
}

rpio.spiEnd();
