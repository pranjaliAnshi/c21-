var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4, object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400,100,50,80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,800,80,30)
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;
  fixedRect.velocityY = 5;
  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);
}

function draw() {
  background("black");  
  console.log(movingRect.x - fixedRect.x)
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 

 if(isTouching(movingRect , gameobject1)){
    movingRect.shapeColor="blue";
    gameobject1.shapeColor="blue";

  }
  
 else {
    movingRect.shapeColor="green";
    gameobject1.shapeColor="green";
    

  }

  bounceOff(movingRect,fixedRect) 

  drawSprites();
}


