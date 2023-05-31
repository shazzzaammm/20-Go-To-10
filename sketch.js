const spacing = 8;
var rows;
var cols;
var x = 0;
var y = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rows = height / spacing;
  cols = width / spacing;
  background(0);
  colorMode(HSB);
}

function draw() {
  // stroke(map(y, 0, height, 0, 255), 255, 255);
  stroke(map(x, 0, width, 0, 255), 255, 255);
  strokeWeight(spacing / 4);
  if (random(1) > 0.5) {
    // /
    line(x, spacing + y, spacing + x, y);
  } else {
    // \
    line(spacing + x, spacing + y, x, y);
  }
  x += spacing;
  if (x / spacing > cols) {
    y += spacing;
    x = 0;
  }
  if (y / spacing > rows) {
    noLoop();
  }
}
