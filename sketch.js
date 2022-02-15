/// <reference path="./libraries/p5.global-mode.d.ts" />

var y, dy = 5;
var ellipseWidth = 50;

var x, dx = 4;
var rectWidth = 40;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  y = height/2;
  x = width/2;
}

function draw() {
  //Order of drawing
  background(220);
  fill(100,200,100);
  drawEllipse();
  fill(200,100,50);
  drawRectangle();
}

/**
 * Updates and draws the ellipse
 */
function drawEllipse() {

  
  if(y < ellipseWidth) {
    //If ellipse hits the top
    dy = 5;
  } else if(y > height - ellipseWidth) {
    //If ellipse hits the bottom
    dy = -5;
  }
  
  //Move ellipse
  y += dy;

  //Draw Ellipse
  ellipse(width/2,y,2*ellipseWidth);
}

/**
 * Updates and draws the rectangle
 */
function drawRectangle() {
  if(x >= width) {
    //If x reaches end of screen, set it to 0
    x = 0;
  }
  //Increase x position
  x += dx;

  //Draw base rectangle
  rect(x,height/2,rectWidth * 2,rectWidth * 2)

  //If the x position is towards the end, draw a "new" rectangle entering the scene
  if(x > width - rectWidth) {
    rect(x - width,height/2,rectWidth * 2, rectWidth * 2);
  }

  //If the x position is at the very beginning, draw an "old" rectangle leaving the scene
  if(x < rectWidth) {
    rect(x + width,height / 2,rectWidth * 2, rectWidth * 2);
  }
}

