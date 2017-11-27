function changeColors() {
   var x = document.getElementsByClassName('col-xs-4');

   var i;
 
   var color = prompt("Please enter a color", "red") //prompts user to input color for text

   for (i=0; i < x.length; i++) {

   		x[i].style.color = color;
   }
   
}
