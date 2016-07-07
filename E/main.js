

var wood;
function setup(){
  createCanvas(710, 400, WEBGL);
  wood = loadImage("wot.jpg")
}

function draw(){
  background(250);
  translate(-250 * 2.5, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(wood);
  sphere(200,300,400);
  pop();
}

function mouseClicked(){
  
}






// $( ".submit" ).click(function() {
// var message = $("#text").val();
// var numbere= message.match(/e/gi).length;
// var x=63;
// console.log(numbere)
// var a=message.substr(0,x);
// var b=message.substr(x+1,2*x);
// var c=message.substr((2*x)+1,3*x);
// var d=message.substr((3*x)+1,4*x);
// var e=message.substr((4*x)+1,5*x);
// var f=message.substr((5*x)+1,6*x);
// var g=message.substr((6*x)+1,7*x);
// var h=message.substr((7*x)+1,8*x);
// var i=message.substr((8*x)+1,9*x);
// var j=message.substr((9*x)+1,10*x);
// var k=message.substr((10*x)+1,11*x);
// var l=message.substr((11*x)+1,12*x);
// var m=message.substr((12*x)+1,13*x);

// document.getElementById("nume").innerHTML = (a+b+c+"<br>"+"<br>"+d+"<br>"+"<br>"+e+"<br>"+"<br>"+f+g+h+"<br>"+"<br>"+i+"<br>"+"<br>"+j+"<br>"+"<br>"+k+l+m);
// });


