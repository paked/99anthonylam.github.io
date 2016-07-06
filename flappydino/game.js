var g= 0.3;
var player;
var jump= -5;
var walls;
var isgg;
var score;
var backgroundimage;
var playerimage;
var x=0;
var num;


// function preload(){
//     backgroundimage= loadImage("shittysunset.jpg");
//     playerimage= loadImage("uglyfuck.png");
// }



function setup (){
    createCanvas(400,475);
    backgroundimage= loadImage("shittysunset.png");
    playerimage= loadImage("uglyfuck.png");
    player = createSprite(width/2, height/2, 50, 50);
    player.addImage(playerimage);
    walls= new Group();
    isgg= false;
    score=0;
    num=0;
    player.rotateToDirection = true;

}

function draw(){
    if (isgg){
        background(0);
        fill(255);
        textAlign(CENTER);
        text("Game Over, Click to Restart",camera.position.x,camera.position.y);
        } else{
    background(0);
    player.velocity.y = player.velocity.y + g;
    num=num+1
    if (num%67==0){
        x=x-200;
        var wall= createSprite(player.position.x-200,height/8,50,120);
        walls.add(wall);
    }
    if (walls.overlap(player)){
        endgame();
    }


    if (keyDown(UP_ARROW)) {
    player.velocity.y = jump;
    }
    player.position.x = player.position.x - 3;
    camera.position.x = player.position.x;
    textAlign(CENTER);
    text(score, camera.position.x, 10);
    drawSprites();
        }
}

function endgame(){
    isgg= true;
}

function mouseClicked(){
    if (isgg){
        console.log("effFfff");
        player.position.x = width/2;
        player.position.y = height/2;
        walls.removeSprites();
        isgg= false;
        score= 0;
    }
}