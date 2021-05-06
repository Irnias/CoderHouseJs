/*
Una función que reciba dos parámetros numéricos, luego los sume, 
calcule el promedio y luego devuelva como resultado el promedio. 
Fuera de la función, mostrar mediante console.log() el resultado.
*/

function promedioDeDosNumeros(numero1,numero2){
    var suma = numero1+numero2;
    var promedio = suma/2;
    return promedio;
}

console.log(promedioDeDosNumeros(100,500));
console.log(promedioDeDosNumeros(100,500));
console.log(promedioDeDosNumeros(100,500));
console.log(promedioDeDosNumeros(100,400));
console.log(promedioDeDosNumeros(100,500));
console.log(promedioDeDosNumeros(100,5));
console.log(promedioDeDosNumeros(100,10));
console.log(promedioDeDosNumeros(20,10));

//const promedioDeDosNumeros = (numero1,numero2) => { console.log((numero1+numero2)/2) }

var imputNumero1 = parseInt(prompt("Ingresa un numero"));
var imputNumero2 = Number(prompt("Ingresa otro numero"));

// var promedio = promedioDeDosNumeros(imputNumero1,imputNumero2);

// console.log( `El promedio de tus numeros ingresados es: ${promedio}` );
