function setup(){
    createCanvas(800,500);
    background(0,0,30);
    // fireSprites = new Group();
    // while (true) {
    //     firesprite = createSprite(mouseX, mouseY, 10, 10);
    //     fireSprites.add(firesprite);

    // }
}

function draw(){
    // background(0,0,3
    noStroke();
    var firesprite = createSprite(mouseX,mouseY,0,0);
    var x=Math.floor((Math.random() * 255) + 1);
    firesprite.draw = function() {
        
        fill (255,x,0);
        ellipse(0,0,25,25)
   
    }
    drawSprites();

}

