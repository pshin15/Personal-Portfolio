// var img = document.getElementById("memojis");
// var s = Snap(img);
// var memoji = Snap.select('#memoji');
// var memojiWave = Snap.select('#memoji-wave');

// var memojiPoints = memoji.node.getAttribute('d');
// var memojiWavePoints = memojiWave.node.getAttribute('d');

// var toFancy = function(){
//   memoji.animate({ d: memojiWavePoints }, 1000, mina.backout, toSimple);  
// }

// var toSimple = function(){
//   memojiWave.animate({ d: memojiPoints }, 1000, mina.backout, toFancy); 
// }

// toSimple();

document.addEventListener("DOMContentLoaded", function () {
  var memoji = document.getElementById("memoji");
  var memojiWave = document.getElementById("memoji-wave");

  var toFancy = function () {
    memoji.setAttribute("href", "assets/memoji-wave.svg");
    setTimeout(toSimple, 1000);
  }

  var toSimple = function () {
    memoji.setAttribute("href", "assets/memoji.svg");
    setTimeout(toFancy, 1000);
  }

  toSimple();
});
