function hide() {
    
    var x = document.getElementsByClassName('card');

    for (i=0; i < x.length; i++) {

      x[i].style.visibility ="hidden";
   }
}

window.onload= hide;


function showContent() {
   var x = document.getElementsByClassName('card');

   var i;
 

   for (i=0; i < x.length; i++) {


         if (x[i].style.visibility == "visible") {
            x[i].style.visibility ="hidden";
         }
         else {
            x[i].style.visibility ="visible";
         }
   }
   
}

function showLabel1() {

   document.getElementById('label1').style.opacity= 1;
}

function hideLabel1() {

   document.getElementById('label1').style.opacity= 0;
}

function showLabel2() {

   document.getElementById('label2').style.opacity= 1;
}

function hideLabel2() {

   document.getElementById('label2').style.opacity= 0;
}

function showLabel3() {

   document.getElementById('label3').style.opacity= 1;
}

function hideLabel3() {

   document.getElementById('label3').style.opacity= 0;
}


function opacityChange1() {
   

   document.getElementById('card_1').style.opacity = 1;
         
   
}

function opacityChange2() {
   

   document.getElementById('card_1').style.opacity = .2;
         
   
}

function opacityChange1_2() {
   

   document.getElementById('card_2').style.opacity = 1;
         
   
}

function opacityChange2_2() {
   

   document.getElementById('card_2').style.opacity = .2;
         
   
}