var diameter = 2;
var diameterStep = 0.5; //1.5
var centerX;
var centerY;
var numSlices = 8;
var maxNumSlices = 12;
var numPositions = 25;

var positions = [];
var cnv;

function centerCanvas(){
  var x = (windowWidth - width)/ 2;
  var y = (windowHeight - height)/ 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  // bg = loadImage("julienLin_Project/logo_julienLin.png");
  // The background image must be the same size as the parameters into the createCanvas() method. 
  // In this program, the size of the image is 720x400 pixels.
  angleMode(DEGREES);

  centerX = width/2;
  centerY = height/2;

  shuffleNumSlices();

  fill(255);
  stroke(0, 0, 0, 0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  // Add the latest position to the array
  positions.unshift({ x: mouseX, y: mouseY });
  // Only store the latest `numPositions` positions
  positions.splice(numPositions, 100);

  translate(width/2, height/2);
  //background(bg);
  background(0);

  // For each slice
  for (var i = 0; i < numSlices; i++) {
    drawPoints(positions);
    rotate(360 / numSlices);
  }
}

function drawPoints(xs) {
  for (var i = xs.length - 1; i >= 0; i--) {
    var positions = xs[i];
    var x = positions.x;
    var y = positions.y;
    var dia = diameter + diameterStep * (numPositions - i);
    fill(255, 255, 255, 255 * (1 - i / numPositions));
    ellipse(x - centerX, y - centerY, dia, dia);
  }
}

function shuffleNumSlices() {
  numSlices =  Math.ceil(Math.random() * (maxNumSlices - 1)) + 1;
}
