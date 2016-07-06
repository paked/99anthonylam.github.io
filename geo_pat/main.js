// var numcirc= 12;
// var circdia;
// var circrad;
// var rVal;
// var gVal;
// var bVal;

// function setup() {
//     createCanvas(480, 600);
//     frameRate(5);
//     circdia = width/numcirc;
//     circrad = circdia/2;
//     rVal= 255;
//     gVal= 0;
    // bVal= 0;
// }

// function draw() {
    
//     var shifted= false;
//     var y= height;
//     while (y>= 0){
//         var x;
//         if (shifted){
//             x= circrad;
//         } else {
//             x=0;
//         }
//         while (x<= width){
//             stroke(color(rVal, gVal, bVal));
//             fill(color(rVal, gVal, bVal));
//             ellipse(x, y, circdia, circdia);
//             x=x+circdia;
//         }
//         y=y-circrad;
//         shifted= !shifted;
//         rVal= (rVal+254) % 256;
//         gVal= (gVal+7) % 256;
//         bVal= (bVal+3) % 256;




var deltax = 20;    
var w;               
var theta = 0.0;      
var amplitude = 75.0; 
var T = 500;  
var dx;               
var yvalues;  
var rVal;
var gVal;
var bVal;
var r;
var g;
var b;


function setup() {
    frameRate(60)
  createCanvas(255, 255);
  w= width+100;
  yvalues = new Array(floor(1000/deltax));
//   rVal= 255;
//   gVal= 0;
//   bVal= 0;
}

function keyPressed() {
    console.log(T);
      dx = (TAU / T) * deltax;
  if (keyCode === DOWN_ARROW) {
    amplitude=Math.abs(amplitude-5);
  } 
  else if (keyCode === UP_ARROW) {
    amplitude=amplitude+5;
  }
    else if (keyCode === LEFT_ARROW) {
    T=Math.abs(T-10);
  } else if (keyCode === RIGHT_ARROW) {
    T=T+10;
  } else {
    
  }
}



function draw() {
  background(0);
  calcWave();
  renderWave();
  calcWave2();
  renderWave2();
  calcWave3();
  renderWave3();
  
//   rVal= (rVal+2) % 256;
//   gVal= (gVal+1) % 256;
//   bVal= (bVal+1) % 256;
//     var i = Math.floor((Math.random() * 10) + 1);
//     var r = Math.round(Math.sin(0.024 * i + 0) * 127 + 128);
//     var g = Math.round(Math.sin(0.024 * i + 2) * 127 + 128);
//     var b = Math.round(Math.sin(0.024 * i + 4) * 127 + 128);
//     console.log(r,g,b);
}

function calcWave() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(mouseX,((mouseX+mouseY)-255),mouseY);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*deltax, height/2+yvalues[x], 20, 20);
  }
}

function calcWave2() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave2() {
  noStroke();
  fill(mouseY,mouseX,((mouseX+mouseY)-255));
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((x*deltax)-167, (height/2+yvalues[x]), 20, 20);
  }
}

function calcWave3() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave3() {
  noStroke();
  fill(((mouseX+mouseY)-255),mouseY,mouseX);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((x*deltax)-334, (height/2+yvalues[x]), 20, 20);
  }
}


