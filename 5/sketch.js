function setup() {
  let navWidth = document.getElementById("nav").offsetWidth;
  let canvas = createCanvas(windowWidth - navWidth, windowHeight);
  canvas.parent('canvas');
  background(255);
}

function draw() {

  stroke(0);
  for (let y = 0; y < height + 100; y = y + 100) {
    for (let x = 0; x < width + 100; x = x + 100) {
      for (let i = 200; i > 20; i = i - 20) {
        fill(i);
        ellipse(x, y, i, i);
      }
    }
  }

}

function windowResized() {
  let navWidth = document.getElementById("nav").offsetWidth;
  resizeCanvas(windowWidth - navWidth, windowHeight);
  background(255);
}