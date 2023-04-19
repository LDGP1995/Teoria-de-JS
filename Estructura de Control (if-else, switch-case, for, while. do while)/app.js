const edad=18;
if (edad>=18){
    console.log(`Puede entrar`);
}
else{console.log(`No puede entrar`)}

//Comprobar q una variable tiene un valor
let puntaje;
if (typeof puntaje!=`undefenied`){
    console.log(`El puntaje es ${puntaje}`);
}
// else{
//     console.log(`No hay puntaje`);
// }

// let hora=22;

// if (hora>0 && hora<=12){
//     console.log(`Buenos Dias`);
// }

// elseif (hora>12 && hora<=18){
//     console.log("Buenas Tardes");
// } 

// else { 
//     console.log("Buenas noches");
// }

let efectivo=300, 
    credito=300,
    totalCarrito=700, 
    disponible=efectivo+credito;

    if (totalCarrito<efectivo||totalCarrito<disponible||totalCarrito<credito){
        console.log("Puedo pagar");
    }
    else{
        console.log("No puedo pagar");
    }

//SWITCHES: PERMITE REVISAR MULTIPLES CONDICIONES CON SINTAXIS MAS ORDENADA
//(LOS IF SON MAS USADOS)
//------LOS SWITCHES SE RECOMIENDAN CUANDO HAY MUCHAS CONDICIONES------

const metodoPago= `tarjeta`;

switch(metodoPago){
    case 'efectivo': console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque': console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta': console.log(`El usuario pago con ${metodoPago}`);
        break;
    default: console.log(`El metodo de pago no es soportado`);
        break;
}

///Ieraciones for loop
// Este codio se repite una y otra vez hasta que la condicion se cumpla

for(let i=0; i<=10; i++){
    console.log(`El conteo es de ${i=10}`);
}

//while do while

let i=0;
while(i<10){
    console.log(`Numero:${i}`);
    i++;
    return;
}