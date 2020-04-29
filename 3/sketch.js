function setup() {
  var navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
  var sep =
    print(sep);
}

function draw() {
  pixelDensity(random(0.1, 1));
  rectMode(CORNER);
  stroke(0);
  frameRate(10);
  noFill();
  for (var i = width / 100 * 10; i < width - width / 100 * 10; i = i + width / 100 * 10) {
    for (var b = height / 100 * 10; b < height - height / 100 * 20; b = b + height / 100 * 10) {

      push();
      strokeWeight(0.2);
      line(i, b, i + width / 100 * 10, b + height / 100 * 10);
      pop();

      push();
      strokeWeight(0.2);
      line(i + width / 100 * 10, b, i, b + height / 100 * 10);
      pop();

    }

  }
  for (var i = width / 100 * 10; i < width; i = i + width / 100 * 10) {
    for (var b = height / 100 * 10; b < height - height / 100 * 10; b = b + height / 100 * 10) {

      push();
      square(i, b, 10);
      pop();

      push();
      square(i - 10, b - 10, 10);
      pop();

      push();
      fill(color(122, random(150, 255), random(200, 255)));
      circle(i, b, 20);
      pop();

      push();
      strokeWeight(10);
      point(i, b);
      pop();



    }

  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}