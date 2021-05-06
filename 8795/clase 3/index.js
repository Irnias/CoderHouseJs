function calcularPromedio(numero1,numero2){
    console.log(numero1);
    console.log(numero2);
      var suma = numero1+numero2;
      console.log(suma);
      var promedio = suma/2;
      return promedio;
  }
  
  var imputNumero1;
  var imputNumero2;
  var i = -30;
  do{
     imputNumero1 = Number(i); 
     imputNumero2 = Number(i+10);
     console.log("Dando vueltas en el ciclo");
     i++;
  }while(imputNumero1 < 1 || imputNumero2 < 1);
  
  var promedio = calcularPromedio(imputNumero1,imputNumero2);
  
  console.log( `El promedio de tus numeros ingresados es: ${promedio}` );
  