var five = require("johnny-five"),
  board, led;

board = new five.Board();

board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized");

  led = new five.Led(13);

  servo = new five.Servo({
    pin: 10,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    type: "continuous"
  });

  this.repl.inject({
    led: led,
    servo: servo
  });
});