var pictures=["book.jpg", "mom.jpg", "dad.webp"]


var image=["book.jpg","mom.jpg","dad.webp"];
var text= ["My Family Book","Lakshmi Nadig","Nilesh Choudhry"];
var i= 0;
function nextslide(){
  document.getElementById("picture").src=pictures[i];
  document.getElementById("words").innerHTML=text[i];
  i++; if (i==3){
   i=0;
  }
}