var five = require("johnny-five"),
  board, led;

board = new five.Board();

board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized");

  servo = new five.Servo({
    pin: 9,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    //type: "standard"
  });

  this.repl.inject({
    servo: servo
  });
});