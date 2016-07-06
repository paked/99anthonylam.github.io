var config = {
    apiKey: "AIzaSyBq5dJJxrER_63Ie1UgqL_OZQ_lYun-2L8",
    authDomain: "collab-sketch-3e8b9.firebaseapp.com",
    databaseURL: "https://collab-sketch-3e8b9.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
  
var points= [];
  
function setup(){
      var canvas= createCanvas(400,400);
      background(255,255,255);
      fill(0,0,0);
      pointsData.on("child_added", function (point) {
      points.push(point.val());
        });
      canvas.mousePressed(drawPoint);
      canvas.mouseMoved(dpimp);
      pointsData.on("child_removed", function () {
        points = [];
      });
        
}
  
function draw(){
      background(255,255,255);
      for (var i= 0; i< points.length; i++){
          var point= points[i];
          ellipse(point.x,point.y,5,5);
      }
}

function drawPoint(){
    pointsData.push({x: mouseX, y: mouseY});
}

function dpimp(){
    if(mouseIsPressed){
        drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);
function saveDrawing(){
        console.log("wrking");
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);
function clearDrawing(){
    console.log("wrking");
    pointsData.remove();
    points=[];
}