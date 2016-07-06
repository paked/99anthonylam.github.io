var paddle;
var ball;
var ball2;
var wallt;
var wallr;
var walll;
var x;
var x2;
var swing;
var score;
var ding= 2;

function setup(){
    x=Math.floor((Math.random() * 360) + 1);;
    score=0;
    createCanvas(550,550);
    wallt= createSprite(width/2,0,width,5);
    wallr= createSprite(width,height/2,5,height)
    walll= createSprite(0,height/2,5,height)
    paddle= createSprite(width/2,height-5,80,5);
    ball= createSprite(width/2, 3.75, 0, 0);
    ball2= createSprite(width/2, 3.75, 0, 0);
    ball.shapeColor = color(0,0,0);
    ball.addSpeed(10,x);
    ball.shapeColor = color(255, 255, 255);
    paddle.shapeColor = color(255, 255, 255);
    walll.shapeColor = color(255, 0, 0);
    wallt.shapeColor = color(255, 0, 0);
    wallr.shapeColor = color(255, 0, 0);
    walll.immovable = true;
    wallt.immovable = true;
    wallr.immovable = true;
    paddle.immovable = true;
}

function draw() {
    frameRate(100)
    paddle.position.x = constrain(mouseX, paddle.width/2, width-paddle.width/2);
    background(0,0,0);
    text("SCORE:" + score, width/2, height/2);
    textAlign(CENTER);
    drawSprites();
    ball.draw = function() { ellipse(0,0,7.5,7.5) }
    ball2.draw = function() { ellipse(0,0,7.5,7.5) }
    paddle.position.x= mouseX;
    ball.bounce(walll);
    ball.bounce(wallt);
    ball.bounce(wallr);
    ball.bounce(paddle);
    ball2.bounce(walll);
    ball2.bounce(wallt);
    ball2.bounce(wallr);
    ball2.bounce(paddle);
    score=score+2;
    addball2();
    ding=ding+0.2
    if (ball.position.y>height){
      gg();
    }
    if (ball2.position.y>height){
      gg();
    }
    
    
}

function addball2(){
  if ((score>500) && (ding=6)) {
      x2=Math.floor((Math.random() * 360) + 1);
    ball2.setSpeed(10,x2);
    }
}


function gg(){
  background(255,0,0);
  textAlign(CENTER);
  fill("white");
  text("GG", width/2, height/2);
}



//     if (ball.overlap(wallr)) {
//       reflectionr();
//     }
//     if (ball.overlap(walll)) {
//       reflectionl();
//     }
//     if (ball.overlap(wallt)) {
//       reflectiont();
//     }
//     if (ball.overlap(paddle)) {
//       reflectionp();
//     }
//   }

// function reflectionr(){
//   if (x<90){
//     x=x+90;
//     ball.setSpeed(3,x);
//   }
//   else if (x>270){
//     x=x-90;
//     ball.setSpeed(3,x);
//   }
// }

// function reflectionl(){
//   if (x<180){
//     x=x-90;
//     ball.setSpeed(3,x);
//   }
//   else if (x>180){
//     x=x+90;
//     ball.setSpeed(3,x);
//   }
// }

// function reflectiont(){
//   if (x<270){
//     x=x-90;
//     ball.setSpeed(3,x);
//   }
//   else if (x>270){
//     x=x+90;
//     ball.setSpeed(3,x);
//   }
// }

// function reflectionp(){
//   if (x<90){
//     x=x+90;
//     ball.setSpeed(3,x);
//   }
//   else if (x>90){
//     x=x+180;
//     ball.setSpeed(3,x);
//   }
// }



//   if (isgameOver=true) {
//     gameOver();
//   } else{
//     if (isgameover=false){
//     background(0,0,100)
//     drawSprites();
//     enemy.position.y = enemy.position.y +3;
//     }
//     if (enemy.position.y > height) {
//         enemy.position.y = 0;
//         enemy.position.x = random(5, width-5);
//     }
//     if (keyDown(RIGHT_ARROW) && player.position.x < width-25) {
//         player.position.x = player.position.x + 1;
//     }
//     if (keyDown(LEFT_ARROW) && player.position.x > 25) {
//         player.position.x = player.position.x - 1;
//     } 
//     else {
//     if (enemy.overlap(player)) {
//       isgameOver = true;
//     }
//     }
//     }
// }

// function gameOver() {
//   background(0);
//   textAlign(CENTER);
//   fill("white");
//   text("Game Over!", width/2, height/2);
// }
