
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var servt;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(50,380,10,10);
  monkey.addAnimation("m", monkey_running )
    monkey.scale=0.1
 
  score=0;
   servt=0;
ground=createSprite(200,390,500,10)
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
 
}


function draw() {

  // ground.velocityX=-10
    
    // if (ground.x <0){
    //   ground.x = ground.width/2;
    // }
background("white");

  if (keyDown("space")&& monkey.y>=280){
    monkey.velocityY=-10;
  }
 monkey.velocityY=monkey.velocityY+0.5;
monkey.collide(ground)
    spawnbanana();
  spawnobstacle();
 if (monkey.isTouching(FoodGroup)){
  score=score+1
   FoodGroup.destroyEach()
 }
 
 
 
  drawSprites();
  textSize(20)
   fill("yellow")
 text("Score:"+score,35,40)
  text("Servival time:"+servt,200,50)
   servt=servt+Math.round(getFrameRate()/60);
}


function spawnbanana(){
  if (frameCount%400===0){
    banana=createSprite(400,200);
    banana.addAnimation("b",bananaImage)
    // banana.velocityX=-(2+3*score/100)
    banana.velocityX=-2
    banana.scale=0.1
    FoodGroup.add(banana)
  }
}

function spawnobstacle(){
  if (frameCount%350===0){
   obstacle=createSprite(400,370,10,10);
    obstacle.addAnimation("o",obstaceImage);
    obstacle.scale=0.1
    // obstacle.velocityX=-(4+2*score/100)
     obstacle.velocityX=-2
    obstacleGroup.add(obstacle)
  }
}

