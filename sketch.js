var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2;
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3;
var gameState;
var  ObstaclesTopGroup,  ObstaclesBottomGroup;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){

  createCanvas(400,400)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

ObstaclesTopGroup= new Group;
ObstaclesBottomGroup= new Group;

}

function draw() {
  
  background("black");
        if(gameState === "PLAY"){
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          
          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

          }
          Bar();
   
        drawSprites();
       
        //spawning top obstacles
      spawnObstaclesTop();

      
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  Restart.visible = false;
  score = 0;
  ObstaclesTopGroup.destroyEach();
  ObstaclesBottomGroup.destroyEach();
}





function spawnObstaclesTop() 
{if(frameCount % 60 === 0)
  {
    ObstaclesTop = createSprite(400,150,30,30)
    ObstaclesTop.velocityX = -5;
    ObstaclesTop.scale = 0.1;

    var rand = Math.round(random(1,2))
    switch(rand){
     
      case 1 : ObstaclesTop.addImage(obsTop1);
              break;

      case 2 : ObstaclesTop.addImage(obsTop2);
               break;

              default : break
            
    }
    ObstaclesTop.lifetime = 100;
    balloon.depth = balloon.depth + 1;
      
  }
    
}

function spawnObstaclesBottom() 
{if(frameCount % 60 === 0)
  {
    ObstaclesBottom = createSprite(400,350,30,30)
    ObstaclesBottom.velocityX = -5;
    ObstaclesBottom.scale = 0.1;

    var rand = Math.round(random(1,3))
    switch(rand){
     
      case 1 : ObstaclesBottom.addImage(obsBottom1);
              break;

      case 2 : ObstaclesBottom.addImage(obsBottom2);
               break;

      case 3 : ObstaclesBottom.addImage(obsBottom3);
               break;

              default : break;
            
    }
    ObstaclesBottom.lifetime = 100;
    balloon.depth = balloon.depth + 1;
    
    
  }
}

 function Bar() 
 {
         
}


  
