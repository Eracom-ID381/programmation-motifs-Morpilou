function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  fill(color(random(0, 255), random(0, 255), random(0, 255)));
  for (var x = 0; x < width; x = x + 10) {
    for (var y = 0; y < height; y = y + 10) {
      rect(x, y, random(0, 10), random(0, 10));
    }
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}