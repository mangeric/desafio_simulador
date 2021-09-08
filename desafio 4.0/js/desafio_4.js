

const iva = x =>x*0.21;
const suma = function(a,b){return a+b};
let precio_costo;
let nuevo_precio;


alert("ingrese precio de costo para sumarle el iva");

precio_costo =parseInt(prompt("ingrese precio"));

nuevo_precio=suma(precio_costo,iva(precio_costo));

console.log("el precio final "+nuevo_precio);


