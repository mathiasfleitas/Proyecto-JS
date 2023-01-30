// convertidor de moneda
/* se ingresa la moneda que a que se quiere convertir, depues el moneto y les dara el monto equivalente de pesas uruguayos a las siguientes monedas*/
function compra_de_moneda(moneda,monto){
    if(moneda=="usd"){
       let conversion = monto/40;
        return conversion;
    }
    else if(moneda=="ar"){
        let conversion=monto/0.35;
         conversion=parseFloat(conversion);
         return conversion;
     }
    else if(moneda=="br"){
        let conversion=monto/9;
         return conversion;
     }

}
let moneda = prompt("Ingrese: usd (para dolares), ar (para pesos argentinos), br (para reales) o salir");

while(compra_o_ventas!="salir" && compra_o_ventas=="compra"){
    let monto = parseInt(prompt("Ingrese un monto a convertir"));
    let conversion= compra_de_moneda(moneda,monto);
    if(typeof(monto)=="number"){
        console.log("Monto ingresado: ",monto);
        console.log("El valro de la conversion es:",conversion);
        moneda = prompt("Ingrese: usd (para dolares), ar (para pesos argentinos), br (para reales) o salir");
        
    }

}  

if(compra_o_ventas == "salir"){
    console.log("Gracias por utilizar el convertor");
}  
