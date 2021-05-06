var n = 0;
while (n < 10) {  
  if( n % 2 === 0) {
    console.log(n + ' Es número par');} 
  else {
    console.log(n + ' No es número par');
  }
  n= n + 1; 
}

/**
 * Mostrar los primeros 100 números pares
 */
var i = 0;
var pares = 0;
while(pares < 100) {
  if( i % 2 === 0) {
    console.log(i + ' es número par');
    pares += 1;
  }
  i += 1; 
}