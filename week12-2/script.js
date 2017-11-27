function changeColors() {
   var x = document.getElementsByClassName('lead');

   var i;
 
   var color = prompt("Please enter a color", "white") //prompts user to input color for text

   for (i=0; i < x.length; i++) {

   		x[i].style.color = color;
   }
   
}

function defaultColor() {
   
   document.getElementById('change').style.backgroundColor = "yellow";
 
}

function changeColors2() {
   
   document.getElementById('change').style.backgroundColor = "blue";
 
}

function changeColors3() {
   
   document.getElementById('change').style.backgroundColor = "green";
 
}

function changeColors4() {
   
   document.getElementById('change').style.backgroundColor = "red";
 
}