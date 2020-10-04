var car,wall
var speed,weight



function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
  wall= createSprite(1000,200,20,height/2)
 car=createSprite(50,200,10,10)
  speed=random(55,200)
 weight=random (400,1500)

 
}

function draw() {
  background("white");  
  wall.shapeColor=color(80,80,80)

if(wall.x-car.x < (car.width+wall.width)/2)
{  
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509
  if(deformation>180)



{
  car.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0)

}
if(deformation<100)
{
  car.shapeColor=color(0,252,0)
  
}
}
car.velocityX = speed;

if(car.isTouching(wall)) {
  car.velocityX = 0
}












 drawSprites()
}















