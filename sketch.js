var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background('black');  
  
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  //seconds hand
  push();
  rotate(scAngle);
  stroke('blue');
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //minute hand
  push();
  rotate(mnAngle);
  stroke('yellow');
  strokeWeight(7);
  line(0, 0, 85, 0);
  pop();
  //hour hand
  push();
  rotate(hrAngle);
  stroke('red');
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  //outer circle
  stroke('green');
  point(0,0);
  strokeWeight(7);
  noFill();

  //making arc for sc
  stroke('blue');
  arc(0,0,300,300,0,scAngle);

  //making arc for mn
  stroke('yellow');
  arc(0,0,275,275,0,mnAngle);

  //making arc for hr
  stroke('red');
  arc(0,0,250,250,0,hrAngle);

  drawSprites();
}