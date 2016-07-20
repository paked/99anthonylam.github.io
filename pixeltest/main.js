var x=0;
var y=0;

function setup(){
    // frameRate(100);
    createCanvas(50,50);
    background(0);
}

function draw(){
    if (x<= width){
        x=x+1;
        stroke(color(255,255,255));
        point(x,y);
    } else {
        x=0;
        y=y+1;
    }

}