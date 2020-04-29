function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}


function draw() {
  strokeWeight(10);

  for (let i = 0; i < width; i = i + 10) {
    stroke(random(0, 20))

    point(random(i, 0), random(0, i));
  }
  for (let i = 0; i < height; i = i + 10) {
    stroke(random(0, 20))

    point(random(i, width), random(height, i));
  }
}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}