
let img_pricipal = document.getElementById("img_p");

img_pricipal.addEventListener("mouseover",function(){
    img_pricipal.src="img/imagen secundaria.jpg";
});
img_pricipal.addEventListener("mouseout", function(){
    img_pricipal.src="img/imagen princial.jpg";
});

let imgen_convercion=document.getElementById("img_c");

imgen_convercion.addEventListener("mouseover",function(){
    imgen_convercion.src="img/imagen conversion secuandaria.jpg";
});
imgen_convercion.addEventListener("mouseout",function(){
    imgen_convercion.src="img/imagen conversion principal.jpg";
});