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