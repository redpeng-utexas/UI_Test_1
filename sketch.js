function setup() {
  createCanvas(window.innerWidth, 400); //creates a square canvas, dimensions 400x400
  background(220);
}

function draw() {
  //set bg color to grey
  background(220);
  circle (mouseX, mouseY, width*0.02)
}