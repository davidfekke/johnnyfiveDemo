var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["E4", 1 / 4],
      ["G4", 1 / 4],
      ["A5", 1 / 4],
      [null, 1 / 4],
      ["E4", 1 / 4],
      ["G4", 1 / 4],
      ["B3", 1 / 8],
      ["A3", 3 / 8],
      [null, 1 / 4],
      ["E4", 1 / 4],
      ["G4", 1 / 4],
      ["A3", 1 / 2],
      ["G4", 1 / 2],
      ["E4", 1 / 2],
      [null, 1 / 4],
    ],
    tempo: 33
  });

});