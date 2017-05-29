var z = 100;
var t = 100;
var s = 100;
var r = 100;
var q = 100;
var o = 100;
var p = 100;
var cnv;

function centerCanvas(){
  var x = (windowWidth - width)/ 2;
  var y = (windowHeight - height)/ 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();

  stroke(255);
  strokeWeight(4);
  frameRate(30);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0);
  z = z - 1; 
  if (z < 0) { 
    z = height; 
  } 
  stroke((sin(frameCount/10)*50)*2);
  line(0, z, width, z); 

  t = t - 2; 
  if (t < 0) { 
    t = height; 
  } 
  line(0, t, width, t);  

  s = s - 3; 
  if (s < 0) { 
    s = height; 
  } 
  line(0, s, width, s);  

  r = r - 4; 
  if (r < 0) { 
    r = height; 
  } 
  line(0, r, width, r);

  q = q - 5; 
  if (q < 0) { 
    q = height; 
  } 
  line(0, q, width, q);  

  o = o - 5; 
  if (o < 0) { 
    o = height; 
  } 
  line(0, o, width, o);  

  p = p - 6; 
  if (p < 0) { 
    p = height; 
  } 
  line(0, p, width, p);  

}


