let diameter = 20;
const minDiameter = 20;
const maxDiameter = 120;
let gettingBigger = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circle(width/2,height/2,diameter);
  
	if(gettingBigger){
		diameter = diameter + 2;		
	}else{
		diameter = diameter - 2;
	}

	if(diameter < minDiameter){
		gettingBigger = true;		
	}else if(diameter > maxDiameter){
		gettingBigger = false;
	}
}