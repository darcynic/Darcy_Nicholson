function setup() {
    createCanvas(400, 400, WEBGL);
    createP("hello world");
    colorMode(HSB);
  }
  
  function draw() {
    background(160, 33, 148);
    rotateX(mouseX/2);
    rotateY(frameCount * 0.02);
    torus(1, 60, 14, 6);
    fill(130, random(20,250, 26), 250);
  }