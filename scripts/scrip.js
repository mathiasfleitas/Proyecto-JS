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
function venta_de_moneda(moneda,monto){
        if(moneda=="usd"){
           let conversion = monto*40;
            return conversion;
        }
        else if(moneda=="ar"){
            let conversion=monto*0.35;
             conversion=parseFloat(conversion);
             return conversion;
         }
        else if(moneda=="br"){
            let conversion=monto*9;
             return conversion;
         }

}
let compra_o_venta = prompt("Ingrese si quiere: comprar , vender o salir:");

while(compra_o_venta!="salir"){
    let moneda = prompt("Ingrese: usd (para dolares), ar (para pesos argentinos), br (para reales)");
    let monto = parseInt(prompt("Ingrese un monto a convertir"));
    if(typeof(monto)=="number"&&compra_o_venta=="comprar"){
        let conversion= compra_de_moneda(moneda,monto);
        console.log("Monto ingresado: ",monto);
        console.log("El valro de la conversion es:",conversion);
        compra_o_venta = prompt("Ingrese si quiere: compra , vender o salir:");
        
    }
    else if(typeof(monto)=="number"&&compra_o_venta=="vender"){
        let conversion= venta_de_moneda(moneda,monto);
        console.log("Monto ingresado: ",monto);
        console.log("El valro de la conversion es:",conversion);
        compra_o_venta = prompt("Ingrese si quiere: compra , vender o salir:");

    }
}
if(compra_o_venta == "salir"){
    console.log("Gracias por utilizar el convertidor");
}