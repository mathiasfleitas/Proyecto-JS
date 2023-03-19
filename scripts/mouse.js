
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

function saludar(){

    Swal.fire({
        title: 'BIENVENIDO A BANCO URUGUAY',
        imageUrl:"img/logo.jpg",
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
}

setTimeout(saludar,1500);

function mostrar_posicion( posicion ){

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "f1732fd807db18e0d49f146e02791d4b";


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then( response=> response.json() )
        .then( data =>{
                    let clima = document.getElementById("clima");
                    let div_clima = document.createElement("div");
                        div_clima.innerHTML=`<h4>Clima en la cuidad</h4>
                                             <p>Lugar: ${data.name}</p>
                                             <p>Temperatura:${data.main.temp}</p>
                                             <p>Clima: ${data.weather[0].description} </p>`;
    
         clima.append(div_clima);

        })

}
   

navigator.geolocation.getCurrentPosition( mostrar_posicion );