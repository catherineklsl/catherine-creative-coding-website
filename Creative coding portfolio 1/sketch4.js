//let x = 200,
  y = 0;
let yVel = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 50);
  fill(100, 200, 255);
 
  for(let i=30; i<width;i+=60){
    ellipse(i, y, 20);
  }
 y = y + yVel;
  
  for(let i=6; i<width;i+=90){
    ellipse(i, y, 20);
  }
  

  if (y > height) {
    y = 0;
   // i = random(width);
  }
}
