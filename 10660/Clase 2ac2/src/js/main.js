// function nombreDeLaFuncion () {
//     //pasa algo
//     console.log('pasaAlgo');
// }


// for(let i=0;i<10;i++){
//     nombreDeLaFuncion();
// }

// let e = 0;
// while(e < 10){
//     nombreDeLaFuncion();
//     e++;
// }

// let lista = [1,2,3,4];

// lista.forEach( (element) => {
//     console.log(element);
// })



// function sumar(elemento1,elemento2){
//     return  elemento1+elemento2;
// }

// const elevarCuadrado = elemento1 => elemento1*elemento1;

// const PAIS = "ARGENTINA";

// let resultado = sumar(50,200);
// // alert(resultado);

// console.log(sumar(500,200));

// una variable con un numero
// un bucle que muestr la tabla de multiplicar de ese numero

// const NUMERO_A_MULTIPLICAR = 8;

// for(let i = 0;i<=10;i++){
//     // let string = NUMERO_A_MULTIPLICAR + "x" + i + " = " + NUMERO_A_MULTIPLICAR*i ;
//     let stringLiteral = `${NUMERO_A_MULTIPLICAR} x ${i} = ${NUMERO_A_MULTIPLICAR*i}`;
//     console.log(stringLiteral);
// }


//4
//funcion que calcule los numeros primos
//ciclo, que en base a esa funcion, muestre en cosola solo los primos.

const funcionParaAveriguarNumeroPrimo = (x) => {

    for (var i = 2; i*i <= x; i++) {
        if ( x % i === 0) {
          return false;
        }
    }
    return true;
}



console.log(funcionParaAveriguarNumeroPrimo(3));

// let contExterno = 0;
// for(let i = 0; contExterno<100;i++){
//     if(funcionParaAveriguarNumeroPrimo(i)){
//         console.log(i);
//         contExterno++;
//     }
// }



//5
// function sumarCalcProm(elemento1,elemento2){
//     return  (elemento1+elemento2)/2;
// }
// const sumarCalcProm = (el1,el2) => (el1+el2) / 2;

// let input1 = parseInt(prompt("Ingrese un numero"));
// let input2 = parseInt(prompt("Ingrese otro numero"));

// let resultado = sumarCalcProm(input1,input2);
// alert(resultado);