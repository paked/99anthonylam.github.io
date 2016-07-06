//flappy bird-like
//mouse click or x to flap

var GRAVITY = .3;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var bird, ground;
var pipes;
var gameOver;
var birdImg, pipeImg, groundImg, bgImg, setupImg;
var timer = 10;
var startTime;
var timeDisplayed;
// var imgArray = new Array();

// function preload(){
//   imgArray[0] = loadImage("assets/setup.png"); 
//   // imgArray[1] = loadImage("assets/setup.png");
// }


function setup() {
  createCanvas(400,600);

  birdImg = loadImage("assets/bike.png");
  pipeImg = loadImage("assets/searstower.png");
  groundImg = loadImage("assets/waves.png");
  bgImg = loadImage("assets/background.png");
  setupImg = loadImage("assets/setup.png");

  
  bird = createSprite(width/2, height/2, 40,40);
  bird.rotateToDirection = true;
  bird.setCollider("circle", 0,0,20);
  bird.addImage(birdImg);

  ground = createSprite(800/2, GROUND_Y+100); //image 800x200
  ground.addImage(groundImg);

  pipes = new Group();
  gameOver = true;
  updateSprites(false);
  
  camera.position.y = height/2;

}

function draw() {
  var timeDiv = select("#timeElapsed");

  if(timeDisplayed == 0)
    bird.velocity.x = 3;

  if(timeDisplayed == 5)
    bird.velocity.x = 5;

  if(timeDisplayed == 10)
    bird.velocity.x = 8;

  if(timeDisplayed == 15)
    bird.velocity.x = 11;

  if(timeDisplayed == 20)
    bird.velocity.x = 14;

  if(timeDisplayed == 25)
    bird.velocity.x = 17;

  if(timeDisplayed == 30)
    bird.velocity.x = 20;

  if(timeDisplayed == 35)
    bird.velocity.x = 23;

  if(timeDisplayed == 40)
    bird.velocity.x = 26;

  if(timeDisplayed == 45)
    bird.velocity.x = 29;

  if(timeDisplayed == 50)
    bird.velocity.x = 32;

  if(timeDisplayed == 55)
    bird.velocity.x = 35;

  if(timeDisplayed == 60)
    bird.velocity.x = 38;
  
  if(gameOver && keyWentDown("x"))
    newGame();

  if(!gameOver) {
    timeDisplayed = Math.floor((millis()-startTime)/1000);
    lastTimeDisplayed = timeDisplayed;    
    timeDiv.html(timeDisplayed);

    if(keyWentDown("x"))
      bird.velocity.y = FLAP;
    
    bird.velocity.y += GRAVITY;
    
    if(bird.position.y<0)
      bird.position.y = 0;
    
    if(bird.position.y+bird.height/2 > GROUND_Y)
      die();

    if(bird.overlap(pipes))
      die();

    //spawn pipes
    if(frameCount%60 == 0) {
      var pipeH = random(50, 300);
      var pipe = createSprite(bird.position.x + width, GROUND_Y-pipeH/2+1+100, 80, pipeH);
      pipe.addImage(pipeImg);
      pipes.add(pipe);

      //top pipe
      if(pipeH<200) {
        pipeH = height - (height-GROUND_Y)-(pipeH+MIN_OPENING);
        pipe = createSprite(bird.position.x + width, pipeH/2-100, 80, pipeH);
        pipe.mirrorY(-1);
        pipe.addImage(pipeImg);
        pipes.add(pipe);
      }
    }

    //get rid of passed pipes
    for(var i = 0; i<pipes.length; i++)
      if(pipes[i].position.x < bird.position.x-width/2)
        pipes[i].remove();
  }

  camera.position.x = bird.position.x + width/4;

  //wrap ground
  if(camera.position.x > ground.position.x-ground.width+width/2)
    ground.position.x+=ground.width;

  background(136, 151, 215);
  textSize(32);
  text("Welcome to Chicago", 140, GROUND_Y-400);
  text("Tap to Start Swerving", 140, GROUND_Y-350);
  text("Watch out for the Sears Tower!", 632, GROUND_Y-275);
  text("Now speed up!", 1200, GROUND_Y-275);
  text("Faster! Swerve!", 2800, GROUND_Y-275);
  text("You got this!", 4000, GROUND_Y-275);
  text("Holy shit!!", 8000, GROUND_Y-275);
  text("Fuck Yeah!!!!", 12000, GROUND_Y-275);
  camera.off();
  image(bgImg, 0, GROUND_Y-190);
  camera.on();

  drawSprites(pipes);
  drawSprite(ground);
  drawSprite(bird);
}

function die() {
  updateSprites(false);
  gameOver = true;
}

function newGame() {
  bird.velocity.x = 3;
  pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  bird.position.x = width/2;
  bird.position.y = height/2;
  bird.velocity.y = 0;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
  startTime = millis();
}

function mousePressed() {
  if(gameOver){
    while (bird.velocity.x != 3) {
      bird.velocity.x = 3
      if (bird.velocity.x == 3) {
        break;
      }
    }
    newGame();
  }
  bird.velocity.y = FLAP;
}
