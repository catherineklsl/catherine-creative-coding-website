let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360,100,100,1);
}

function draw() {
  background(0,0,0);
  
  angle = map(mouseX, 0, width, 0, PI/2);
 
  translate(width / 2, height);
  branch(130);
}


function branch(len) {
  
  let h= map(len,4,130,60,10);
  let s= map(len,4,130,20,90);
  let b= map(len,4,130,100,60);
  
  
//Red
  stroke(h,s,b,0.3);
  strokeWeight(map(len,4,130,2,20));
  line(0, 0, 0, -len);
  
  stroke(h,s-20,100,0.8);
  strokeWeight(map(len,4,130,1,8));
  line(0,0,0,-len);
  
  
  translate(0, -len);
  
  
  if (len > 5) {
    
    //right
    push();
    rotate(angle);
    branch(len*0.7);
    pop();

    //left
    push();
    rotate(-angle);
    branch(len*0.7);
    pop();
  }else{
  // fill(255,100,100,0.7);
  // ellipse(0,0,5,5);
    
   // white
    fill(0,0,100,0.7);
    ellipse(0,0,4,4);
    
  }
}