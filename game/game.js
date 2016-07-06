var player;
var score;
var y=20;
var x=20;
// var foodcord=[[],[]];


function setup(){
    createCanvas(1265,500);
    background(0,50,100);
    score=0;
    foodSprites= new Group();

    player= createSprite(20,20,x,y);
        
}

//     x = Math.floor(Math.random() * 25 + 97);
//     while( $.inArray(x, list) !==-1) {
//         x= Math.floor(Math.random() * 25 + 97);
//     }
//     list.push(x);
//     return x;
// }

function draw(){
    var ranx= Math.floor((Math.random() * 1245) + 0);
    var rany= Math.floor((Math.random() * 480) + 0);
    if (random()>0.97){
        var food= createSprite(ranx,rany,20,20);
        foodSprites.add(food);
        // foodcord.add(food.position.x + "," + food.position.y);
 
        food.draw = function() {
            ellipse(0,0,20,20);
        }
    }   
    background(0,50,100); 
    foodSprites.overlap(player, function(food) {
        player.width+=1;
        player.height+=1;
        score=score+100;
        removeSprite(food);
            
        })
    player.position.x= mouseX;
    player.position.y= mouseY;

textAlign(CENTER);
text(score, camera.position.x, 100);
 
   
    drawSprites();
    getSprites();
}



    // var firstObstacle = obstacleSprites[0];
    // if (obstacleSprites.length> 0 && firstObstacle.position.x <= camera.position.x - (width/2 + firstObstacle.width/2)) {
    // removeSprite(firstObstacle);
    // }




