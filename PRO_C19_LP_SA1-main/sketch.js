var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var edges; 


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,500)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.5

  doorsGroup = new Group()
  climbersGroup = new Group()

  
}

function draw() {
  background(200);
  edges = createEdgeSprites()
  
 
 




  ghost.collide(edges[3])



  if (gameState === "play"){
    if(keyDown("up_arrow")){
      ghost.velocityY = - 5
  
    }
    ghost.velocityY = ghost.velocityY + 0.5
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 5
    }
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 5
    }
    if(tower.y > 400){
      tower.y = 300
    }


  
  spawndoor()
  if(climbersGroup.isTouching(ghost)){
    gameState = "end"
    ghost.destroy()
    climbersGroup.destroyEach()
    doorsGroup.destroyEach()
  }
  
  }
  



  drawSprites()
  if(gameState === "end"){
    fill("black")
    stroke("green")
    textSize(30)
    text("Game Over", 250,300)
    
    


  }
  

}

function spawndoor(){
  if(frameCount % 100  === 0){
    door = createSprite(400,50)
    door.addImage(doorImg)
    climber = createSprite(door.x,door.y + 65)
    climber.addImage(climberImg)
    door.velocityY = + 3 
    climber.velocityY = door.velocityY
    door.x = Math.round(random(100,400))
    climber.x = door.x
    doorsGroup.add(door)
    climbersGroup.add(climber)
  }

}




