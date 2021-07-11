var ship,shipImg;
var sea,seaImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
}

function setup(){
  createCanvas(400,400);
  //create a sea sprite
  sea = createSprite(400,200);
  sea.addImage("sea",seaImg);
  sea.velocityX = -4;
  sea.scale = 0.3;


  //create a ship sprite
ship = createSprite(180,200,30,30);
ship.addAnimation("ship",shipImg);
ship.scale = 0.25;
}



function draw() {
  background(0);
  //code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}
 drawSprites();
}

