
const producto1= "pizza",
      precio1=30,
      producto2="Hamburguesa",
      precio2=40;


//!Forma antigua de hacer un template
let html;

/*html="<ul>" + 
    '<li>Orden:' + producto1 + '</li>' +
    '<li>Precio:'+ precio1 + '</li> '+
    '<li>Precio:'+ producto2 + '</li> '+
    '<li>Precio:'+ precio2 + '</li>' +
    '<li>Total:'+ (precio2 + precio1)+'</li>' +
    '</ul>';

    document.getElementById("app").innerHTML=html;
*/
/*
//!Forma actual de hacer un template
html = `
     <ul> 
        <li>Orden: ${producto1} </li>
        <li>Precio:${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio: ${precio2} </li>
     </ul>`;

     document.getElementById("app").innerHTML=html;

*/
//!Forma actual de hacer un template con funcion
html = `
     <ul> 
        <li>Orden: ${producto1} </li>
        <li>Precio:${precio1} </li>
        <li>Orden: ${producto2} </li>
        <li>Precio: ${precio2} </li>
        <li>Total: ${total(precio1,precio2)} </li>
     </ul>`;


function total(precio1,precio2){
    return precio1+precio2;
}

     document.getElementById("app").innerHTML=html;