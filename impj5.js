var five = require("johnny-five");
var Imp = require("imp-io");

var board = new five.Board({
  io: new Imp({
    agent: process.env.IMP_AGENT_ID
  })
});

board.on("ready", function() {
  var led = new five.Led(9);
  led.blink();
});