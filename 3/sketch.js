function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  rectMode(CORNER);
  var x = 0;
  stroke(0);
  frameRate(0);
  noFill();
  for (var i = 0; i < width + 10; i = i + 100) {
    for (var b = 0; b < height + 10; b = b + 100) {
      square(i, b, 10);
    }
  }
  for (var i = 0; i < width + 10; i = i + 100) {
    strokeWeight(10);
    for (var b = 0; b < height + 10; b = b + 100) {
      point(i, b);
    }
  }



}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}