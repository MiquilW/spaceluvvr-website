
function change() {
  var colors = ['#0FF0FC', '#7FFF00', '#8A2BE2', '#CCFF00', '#FF5E00']
  var stars = document.getElementById("stars").getElementsByTagName('*');
  var starsList = document.getElementById("stars");
  var e;

  for (var i = 0; i < 60; i++) {
    var star = document.createElement("h5");
    star.textContent = "*"
    starsList.appendChild(star);
  }

  for (var i = 0; i < stars.length; i++) {
    e = stars[i];
    var randomNumber1 = Math.floor(Math.random() * (800 - -800) ) + -800;
    var randomNumber2 = Math.floor(Math.random() * (400 - -400) ) + -400;
    var randInt = Math.floor(Math.random() * 5);
    var px = String(randomNumber1) + "px " + String(randomNumber2) + "px"
    e.style.translate = px;
    e.style.color = colors[randInt];
    e.style.zIndex = "-1";
  }
}
