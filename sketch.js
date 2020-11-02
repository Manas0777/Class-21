var fixedRect,movingRect;
var gameobject1,gameobject2,gameobject3;


function setup() {
  createCanvas(1200,800);
 movingRect = createSprite(300,200,100,50);
 movingRect.shapeColor = ""
 movingRect.debug = true;
 //movingRect.velocityX = 3
 
 fixedRect = createSprite(800,120,120,40);
 fixedRect.shapeColor = "orange"
 fixedRect.debug = true;green
 //fixedRect.velocityX = -3

gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor = "blue";

gameobject2 = createSprite(200,100,50,50);
gameobject2.shapeColor = "pink";

gameobject3 = createSprite(500,100,50,50);
gameobject3.shapeColor = "yellow";




}

function draw() {
 background(180); 

movingRect.x = World.mouseX ;
 movingRect.y = World.mouseY;



  
  if(isTouching(movingRect,gameobject3))
  {
    movingRect.shapeColor = "red"
    gameobject3.shapeColor = "red"
}


  
  drawSprites();

}

