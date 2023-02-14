window.addEventListener("scroll", function(){
   var header = document.querySelector("header");
   header.classList.toggle("abajo",window.scrollY>0); //El toggle es como si activara la funcion
   
});