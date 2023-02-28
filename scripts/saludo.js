function agradeser(){
    location.href="../html/saludos.html"
}
function volver(){
    location.href="../html/contacto.html"
}

let btn_saludar = document.getElementById("btn_en");
btn_saludar.addEventListener("click",agradeser);

let btn_volver = document.getElementById("btn_reset");
btn_volver.addEventListener("click",volver);