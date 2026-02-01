let canvas;
let cursor;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight); //creates a square canvas, dimensions 400x400
  canvas.position(0,0);
  canvas.style('z-index', '-1')
  background(220);
  cursor = loadImage('/Images/2051 Peugeot 3011.png');
}

function draw() {
  //set bg color to grey
  background(220);
  image(cursor, min(max(mouseX, 50), width-50), min(max(mouseY-20, 50), height-50), width*0.05, height*0.035);
}