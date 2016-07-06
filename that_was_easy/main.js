// function stwe() {
//   var twe = new Audio("that_was_easy.mp3");
//   twe.play();
// }

// $("#easy").on("click", stwe);

// $(document).keypress(dkp);
// function dkp(event) {
//     console.log(event.keyCode)
//   if (event.keyCode == 32) {
//     // var twe = new Audio("that_was_easy.mp3");
//     // twe.play();
//     $("#easy").trigger("click");
//     // stwe();
//   }
//
var creds= 25;
         
var list = [];

function numgen (x) {
    x = Math.floor(Math.random() * 25 + 97);
    while( $.inArray(x, list) !==-1) {
        x= Math.floor(Math.random() * 25 + 97);
    }
    list.push(x);
    return x;
}

var n1= numgen(n1);
var n2= numgen(n2);
var n3= numgen(n3);
var n4= numgen(n4);
var n5= numgen(n5);
var n6= numgen(n6);
var n7= numgen(n7);
console.log(list);

function playsound() {
     var sound= new Audio("ypy.mp3");
    sound.play();
}

$(document).keypress(dkp);
 function dkp(event) {
 console.log(event.keyCode);
 if (event.keyCode == n1 ){
     creds= creds + 30;
 }
 else if (event.keyCode == n2||event.keyCode == n3||event.keyCode == n4||event.keyCode == n5||event.keyCode == n6||event.keyCode == n7){
     creds= creds + 10;
 }
 else {
     creds= creds - 5;
     if (creds == 5) {
    console.log("works");
   playsound();
}
 }
 document.getElementById('creds').innerHTML =creds;
}

console.log(creds);






