# Control de flujos

## Condicionales

Hasta el momento nuestro código es lineal pero podemos tomar ese flujo y definir puntos de bifurcacion para lograr diferentes resultados.

### if

La sintaxis basica de un if

```javascript
if(condicion) {
  // Ejecutar
}

```

La condicion es un valor boolean que tenes que evaluar para saber si ejecutamos el bloque de código.

Recordamos que una variable puede ser boolean comparando 2 variables

```javascript
  limitAge = 18;
  age = 20;

  isEnabled = age > limitAge;

  // true
```

```javascript
  limitAge = 18;
  age = 14;

  isEnabled = age > limitAge;

  // false
```

Podemos completar el ejemplo 

```javascript
if(isEnabled) {
  console.log('Es mayor de edad');
}

```

### if Else

El if nos permite ejecutar un bloque de código solo si se cumple la condición y tambien un bloque para la condición no se cumple.

```javascript
if(condicion) {
  
} else {

}
```

### Condiciones anidadas

Podemos anidar cuantas condiciones sean necesarias pero no es recomendable por lo dificil de leer de el código.

```javascript
var age = 5;

if(age < 12) {
  alert("Todavía eres muy pequeño");
} else if(age < 19) {
  alert("Eres un adolescente");
} else if(age < 35) {
  alert("Aun sigues siendo joven");
} else {
  alert("Piensa en cuidarte un poco más");
}
```

## Operadores

### Es Igual

```
var firstVar = "0";
var secondVar = 0;

console.log(firstVar == secondVar);
```

### Igualdad estricta

```javascript
var firstVar = "0";
var secondVar = 0;

console.log(firstVar === secondVar);
```


### Es Distinto

```
  var firstVar = 100;
  var secondVar = 0;

  console.log(firstVar != secondVar);
```

### Diferencia estricta

```
var firstVar = 100;
var secondVar = "1";

console.log(firstVar !== secondVar);
```

### Mayor, menor, mayor igual, menor igual

```
var limitAge = 13;
var userAge = 5;

console.log(userAge < limitAge);
```

```
var limitAge = 13;
var userAge = 13;

console.log(userAge <= limitAge);
```

### and (&&)

### o ||

### not !

### Combinación de operadores

``` javascript
var limitDown = 10;
var limitUp = 18;

var userAge = 5;

var isEnable = (userAge >= limitDown && userAge <= limitUp)

console.log(isEnable);
```

## Ejercicios

1- Mostrar un prompt con el mensaje "Ingrese su nombre". Al ingresar el nombre mostrar en consola el mensaje "Hola [Nombre ingresado]" y guardar en una variable.

2- Mostrar un prompt con el mensaje "¿Cúal es tu edad [Nombre ingresado]?" utilizar el valor guardado en el pto 1. Si el valor ingresado es menor a 18 mostrar un alerta con el mensaje "No puedes ingresar" si es mayor "Bienvenido";

3- Guardar en una variable el nombre de una pelicula, mostrar en un prompt una pregunta para adivinar la pelicula seleccionada. Mostrar un alerta con el resultado de la respuesta "correcta" o "incorrecta". En caso de ser correcta sumar 1 punto en una variable.

4- Guardar en una variable el año de estreno de la pelicula, preguntar mediante un prompt por el año de la pelicula. Mostrar un alerta con el resultado de la respuesta "correcta"
 o "incorrecta". En caso de ser correcta sumar 1 punto en una variable.

5- Mostrar en un alert el puntaje sumado por las respuestas en los puntos 3 y 4. 
