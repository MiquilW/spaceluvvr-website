
function change() {
  var colors = ['#0FF0FC', '#7FFF00', '#8A2BE2', '#CCFF00', '#FF5E00']
  var stars = document.getElementById("stars").getElementsByTagName('*');
  var e;
  for (var i = 0; i < stars.length; i++) {
    e = stars[i];
    var randomNumber1 = Math.random() * -800;
    var randomNumber2 = Math.random() * 400;
    if (i % 2 == 0) {
      randomNumber1 = randomNumber1 * -1;
    }
    else {
      randomNumber2 = randomNumber2 * -1;
    }
    var randInt = Math.floor(Math.random() * 5);
    var px = String(randomNumber1) + "px " + String(randomNumber2) + "px"
    e.style.translate = px;
    e.style.color = colors[randInt];
  }
}
