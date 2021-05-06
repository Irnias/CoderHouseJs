let nombre = " Ramiro   ";
console.log( "length: " + nombre.length );
console.log( "toUpperCase: " + nombre.toUpperCase() );
console.log( "toLowerCase: " + nombre.toLowerCase() );
console.log( "replace: " + nombre.replace('i','I') );
console.log( "trim: " + nombre.trim() );

let nombres = ["Meli, Patria, Rama"];
console.log( nombres.split(',') );


var miFuncion = new Function("5+2");
var forma = "redonda";
var tamano = 1;
console.log( "typeof: " + typeof miFuncion ); 
console.log( "typeof: " + typeof forma ); 
console.log( "typeof: " + typeof tamano );

if (typeof forma == 'string'){
    //??
}

let colores = ['Amarillo', 'Negro', 'Blanco', 'Rosa'];
console.log( "colores[0]: " + colores[0] );
console.log( "colores[1]: " + colores[1] );

Array.isArray(colores);  //true si es una lista/arreglo/array false si no lo es.

console.log( colores.length );
console.log( colores.toString() );

console.log( colores.push('Violeta') ); 
console.log( colores.length );


console.log( colores.join(", ") );

var masColores = ["Rojo", "Azul", "Verde"];
console.log( masColores.concat() );
console.log( colores.slice(1,3) );