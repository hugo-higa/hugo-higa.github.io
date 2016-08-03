/* Original script by @Silentdrummer in a questionn on stackoverflow
  url: http://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
*/

// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  68: 'd',
  69: 'e',
  72: 'h',
  79: 'o',
  84: 't'
};

// the 'official' Konami Code sequence
var cheatCode = ['left', 'h', 'e', 'a', 't', 'left', 'o', 'd', 'e'];

// a variable to remember the 'position' the user has reached so far.
var cheatCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = cheatCode[cheatCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    cheatCodePosition++;

    // if the last key is reached, activate cheats
    if (cheatCodePosition == cheatCode.length)
      activateCheats();
  } else
    cheatCodePosition = 0;
});

function activateCheats() {
  // document.body.style.backgroundImage = "url('images/cheatBackground.png')";

  // var audio = new Audio('audio/pling.mp3');
  // audio.play();

  alert("outro código");
}