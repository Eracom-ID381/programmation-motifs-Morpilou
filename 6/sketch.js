function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {
  for (let x = 0; x < width; x = x + 50) {
    for (let y = 0; y < height; y = y + 50) {
      stroke(0);
      fill(0);
      point(x, y)
    }
  }
  for (let x = 0; x < width; x = x + 100) {
    for (let y = 0; y < height; y = y + 100) {
      stroke(0);
      fill(0);
      square(random(x, width), y, 2);
      square(x, random(y, height), 2);
    }
  }
  for (let x = 0; x < width; x = x + 100) {
    for (let y = 0; y < height; y = y + 50) {
      stroke(0);
      fill(0);
      line(x - 10, y, x + 10, y)
    }
  }
  for (let x = 0; x < width; x = x + 50) {
    for (let y = 0; y < height; y = y + 100) {
      stroke(0);
      fill(0);
      line(x, y - 10, x, y + 10)
    }
  }



}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}