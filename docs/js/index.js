function setup() {
  let canvas = createCanvas(400, 400, WEBGL);
  canvas.parent("sketch-parent");
  colorMode(HSB);
}

function draw() {
  background(160, 33, 148);
  rotateX(mouseX/2);
  rotateY(frameCount * 0.02);
  torus(1, 60, 14, 6);
  fill(130, random(20,250, 26), 250);
}