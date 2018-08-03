var x = 1;
var y = 1;
var ySpeed = 2;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  noStroke();

  fill(255);
  rect(0, 0, width, height/2);

  fill(0);
  rect(0, height/2, width, height/2);

  if (y > height/2 ) {
    fill(255);
  } else {
    fill(0);
  }

  ellipse(x, y, 20, 20);

  x += 1;
  y += ySpeed;


    if (y > height || y < 0) {
        ySpeed = ySpeed * -1;
    }
    
}