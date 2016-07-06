var g= 0.3;
var groundSprites;
var gsw= 50;
var gsh= 50;
var numGroundSprites;
var player;
var jump= -5;
var obstacleSprites;
var isgg;
var score;

function setup (){
    createCanvas(400,300);
    background(150,200,250);
    groundSprites = new Group();
    
    numGroundSprites= (width/gsw)+1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n*50, height-25, gsw, gsh);
        groundSprites.add(groundSprite);
    }
    player = createSprite(100, height-75, 50, 50);
    obstacleSprites= new Group ();
    isgg= false;
    score=0;
}

function draw(){
    if (isgg){
        background(0,0,0);
        fill(255);
        textAlign(CENTER);
        text("Game Over, Click to Restart",camera.position.x,camera.position.y);
        } else{
    background(150, 200, 250);
    player.velocity.y = player.velocity.y + g;
    if (groundSprites.overlap(player)) {
    player.velocity.y = 0;
    player.position.y = (height-50) - (player.height/2);
    }
    if (random()>0.98){
        var obstacle= createSprite(camera.position.x + width,height - 65,30,30);
        obstacleSprites.add(obstacle);
    }
    var firstObstacle = obstacleSprites[0];
    if (obstacleSprites.length> 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
    removeSprite(firstObstacle);
    }
    if (obstacleSprites.overlap(player)){
        endgame();
    }
    drawSprites();
    if (keyDown(UP_ARROW)) {
    player.velocity.y = jump;
    }
    player.position.x = player.position.x + 5;
    camera.position.x = player.position.x + (width/4);
    var firstGroundSprite = groundSprites[0];
    if (firstGroundSprite.position.x <= camera.position.x - (width/2 + firstGroundSprite.width/2)) {
         groundSprites.remove(firstGroundSprite);
         firstGroundSprite.position.x = firstGroundSprite.position.x + (numGroundSprites*gsw);
         groundSprites.add(firstGroundSprite);
    }
    score=score+1;
    textAlign(CENTER);
    text(score, camera.position.x, 10);
        }
}

function endgame(){
    isgg= true;
}

function mouseClicked(){
    if (isgg){
        for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = groundSprites[n];
        groundSprite.position.x = n*50;
        }
        player.position.x = 100;
        player.position.y = height-75;
        obstacleSprites.removeSprites();
        isgg= false;
        score= 0;
    }
}