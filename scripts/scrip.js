// convertidor de moneda
/*  se convierte el monto de ingresas en el valor equivalente a la moneda que selcionaste y poder vender las moneda que tenes y te da el equivalente esn pesos uruguayos*/
function compra_de_moneda(moneda,monto){
    if(moneda=="dolares"){
       let conversion = monto/40;
        return conversion;
    }
    else if(moneda=="peso_argentino "){
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
        else if(moneda=="peso_argentino"){
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

let nombre=prompt("Ingrese su nombre:");

let compra_o_venta = prompt("Ingrese si quiere: comprar , vender, historial o salir:");

while(compra_o_venta!="salir"&&compra_o_venta!="historial"){
    
    let moneda = prompt("Ingrese: dolares, peso_argentino, real, euro");

    let conversion=0;

    

    if(compra_o_venta=="comprar"){
        let monto = parseInt(prompt("Ingrese un monto que desea convertir:"));
        conversion = compra_de_moneda(moneda,monto);
        console.log("El usuario es:",nombre);
        console.log("La accion es:",compra_o_venta);
        console.log("Tipo de moneda es:",moneda);
        console.log("El monto a convertir: ",monto);
        console.log("La convercion es: ",conversion);
        let historial_usuario = new Historial(nombre,compra_o_venta,moneda,monto,conversion);
        nuevo_historial.push(historial_usuario);
        nombre=prompt("Ingrese su nombre:");
        compra_o_venta = prompt("Ingrese si quiere: comprar , vender, historial o salir:");
        
    }
    else if(compra_o_venta=="vender"){
        let monto = parseInt(prompt("Ingrese que desea vender: "));
        conversion = venta_de_moneda(moneda,monto);
        console.log("El usuario es:",nombre);
        console.log("La accion es:",compra_o_venta);
        console.log("Tipo de moneda es:",moneda);
        console.log("El monto vendido es: ",monto);
        console.log("El valor de la venta es:",conversion);
        let historial_usuario = new Historial(nombre,compra_o_venta,moneda,monto,conversion);
        nuevo_historial.push(historial_usuario);
        nombre=prompt("Ingrese su nombre:");
        compra_o_venta = prompt("Ingrese si quiere: comprar , vender, historial o salir:");

    }
    
    
  
}
if(compra_o_venta == "salir"){
    console.log("Gracias por utilizar el convertidor");
}
else if(compra_o_venta=="historial"){
    function buscar_usuario(nuevo_historial){
        return nuevo_historial.nombre==nombre;
    }
    let resultado_busqueda=nuevo_historial.filter(buscar_usuario);
    console.log(resultado_busqueda);
    
    
}