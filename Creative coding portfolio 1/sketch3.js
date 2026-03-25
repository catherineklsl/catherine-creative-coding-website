let xloc=[];
let yloc=[];
let numSegments=80;
let wormWidth=60;



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<numSegments;i++){
    xloc[i]=0
    yloc[i]=0;
  }
}

function draw() {
  background(245);
  
  for (let i=0;i<numSegments-1;i++){
    xloc[i] = xloc[i+1];
    yloc[i] = yloc[i+1];  
  }
  xloc[numSegments-1]=mouseX;
  yloc[numSegments-1]=mouseY;
  
  for(let i=0;i<numSegments;i++){
    let d=wormWidth*sin(map(i,0,numSegments-1,0,PI))
    let alpha = map(i,0,numSegments-1,0,200);
    
    noStroke();
    fill(20,20,20,alpha);
    
    ellipse(xloc[i],yloc[i],d);
  }

}
