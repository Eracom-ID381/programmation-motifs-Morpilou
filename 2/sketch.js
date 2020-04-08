function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(0);

}

function draw() {
  let a = 20;
  let b = 2;
  noFill();
  frameRate(random(2, 50));
  clear();
  background(0);
  rectMode(CENTER);
  for (var x = 0; x < width; x = x + random(0, 100)) {
    stroke(color(random(0, 30), random(160, 255), random(0, 100)));
    for (var y = 0; y < height; y = y + random(0, 50)) {
      rect(x, y, random(0, 15), random(0, 15));
    }
  }
}