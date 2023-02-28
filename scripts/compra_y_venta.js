


function convertir_de_moneda(moneda,monto){
    if(moneda=="dolares"){
       let conversion = monto/40;
        return conversion;
    }
    else if(moneda=="peso argentino"){
        let conversion=monto/0.35;
         conversion=parseFloat(conversion);
         return conversion;
     }
    else if(moneda=="real"){
        let conversion=monto/8;
         return conversion;
     }
    else if(moneda=="euro"){
        let conversion=monto/44;
        return conversion;
    }
}     
function venta_de_moneda(moneda,monto){
        if(moneda=="dolares"){
           let conversion = monto*38;
            return conversion;
        }
        else if(moneda=="peso argentino"){
            let conversion=monto*0.05;
             conversion=parseFloat(conversion);
             return conversion;
         }
        else if(moneda=="real"){
            let conversion=monto*7;
             return conversion;
         }
         else if(moneda=="euro"){
            let conversion=monto*39;
            return conversion;
        }

}
function comprar_de_moneda(moneda,monto){
    if(moneda=="dolares"){
       let conversion = monto*40;
        return conversion;
    }
    else if(moneda=="peso argentino"){
        let conversion=monto*0.35;
         conversion=parseFloat(conversion);
         return conversion;
     }
    else if(moneda=="real"){
        let conversion=monto*8;
         return conversion;
     }
     else if(moneda=="euro"){
        let conversion=monto*44;
        return conversion;
    }

}
class Historial{
    constructor(nombre,accion,moneda,monto,conversion){
        this.nombre=nombre;
        this.accion=accion;
        this.moneda=moneda;
        this.monto=monto;
        this.conversion=conversion;
    }

}
let nuevo_historial=[];

function datos_tomados(){
    let nombre= document.getElementById("in_nombre").value;
    
    
    let compra_o_venta = document.getElementById("sel_accion").value;
    
    
    let moneda = document.getElementById("sel_moneda").value;
   
    
    let monto = document.getElementById("monto").value;

    conversion_moneda(nombre,compra_o_venta,moneda,monto);
 }
    
function conversion_moneda(nombre,compra_o_venta,moneda,monto){
    
    if(compra_o_venta=="comprar"){
       
        conversion = comprar_de_moneda(moneda,monto);
        
    }
    else if(compra_o_venta=="vender"){
        conversion = venta_de_moneda(moneda,monto);
    }

    else if(compra_o_venta=="Pasar a:"){
        conversion= convertir_de_moneda(moneda,monto);
    }

    let historial_usuario = new Historial(nombre,compra_o_venta,moneda,monto,conversion);
    nuevo_historial.push(historial_usuario);

    let nuevo_historial_json = JSON.stringify(nuevo_historial);
    localStorage.setItem("historial",nuevo_historial_json);

    mostrar_hitorial();
} 
function mostrar_hitorial(){

    let mostrar_json = localStorage.getItem("historial");
    nuevo_historial = JSON.parse(mostrar_json);

    let tbody=document.getElementById("tbody_convertir");
    tbody.innerHTML="";
    
    for(let datos of nuevo_historial){
        
        let tr = document.createElement("tr");
            tr.innerHTML= `<td class="nom">${datos.nombre}</td>
                          <td class="ac">${datos.accion}</td>
                          <td class="mone">${datos.moneda}</td>
                          <td class="mont">${datos.monto}</td>
                          <td class="conv">${datos.conversion}</td>
                          <td><button class="btn_borrar">Borrar</button></td>`;


    tbody.append(tr);
    }
    let btn_eliminar = document.querySelectorAll(".btn_borrar");
    console.log(btn_eliminar);
    for(let btn of btn_eliminar){
        btn.addEventListener("click",borrar);
    }
}
function borrar(elemento){
     let table = elemento.target.parentNode.parentNode;
     
     let eliminar_nombre = table.querySelector(".nom").textContent;
     
     let eliminar_accion = table.querySelector(".ac").textContent;
     
     let eliminar_moneda = table.querySelector(".mone").textContent;

     let eliminar_monto = table.querySelector(".mont").textContent;

     let eliminar_conversion = table.querySelector(".conv").textContent;

     function eliminar_elemento(usuario_historia){
        return usuario_historia.nombre!=eliminar_nombre,
                usuario_historia.accion!=eliminar_accion,
                usuario_historia.moneda!=eliminar_moneda,
                usuario_historia.monto!=eliminar_monto,
                usuario_historia.conversion!=eliminar_conversion;
     }
     let borrar_elemento = nuevo_historial.filter(eliminar_elemento);
     nuevo_historial=borrar_elemento;

    let nuevo_historial_json = JSON.stringify(nuevo_historial);
    localStorage.setItem("historial",nuevo_historial_json);


     mostrar_hitorial();
}
let btn_convercion = document.getElementById("btn_con");

btn_convercion.addEventListener("click",datos_tomados);



/*
    function buscar_usuario(nuevo_historial){
        return nuevo_historial.nombre==nombre;
    }
    let resultado_busqueda=nuevo_historial.filter(buscar_usuario);
    console.log(resultado_busqueda);
    
    
}
*/