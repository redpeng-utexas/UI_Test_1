function setup() {
  createCanvas(window.innerWidth, 400); //creates a square canvas, dimensions 400x400
  background(220);
}

function draw() {
  //set bg color to grey
  background(220);
  circle (min(max(mouseX, 50), width-50), min(max(mouseY, 50), height-50), width*0.02)
}