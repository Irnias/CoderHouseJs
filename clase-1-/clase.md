# Sintaxis y variables

[Eloquent JS](https://eloquentjs-es.thedojo.mx/)

## Javascript

JavaScript se introdujo en 1995 como una forma de agregar programas a páginas web en el navegador Netscape Navigator. El lenguaje ha sido desde entonces adoptado por todos los otros navegadores web principales.

Después de su adopción fuera de Netscape, un documento estándar fue escrito para describir la forma en que debería funcionar el lenguaje JavaScript, para que las diversas piezas de software que decían ser compatibles con JavaScript en realidad estuvieran hablando del mismo lenguaje. Este se llamo el Estándar ECMAScript, por Ecma International que hizo la estandarización.

[Especificación ECMA 2015](http://www.ecma-international.org/ecma-262/6.0/index.html)

[Compatibilidad ECMA de Firefox](https://developer.mozilla.org/es/docs/Web/JavaScript/Novedades_en_JavaScript/ECMAScript_6_support_in_Mozilla)

`JAVASCRIPT  es el lenguaje y ecmascript es la especificación, cada versión del lenguaje. El lenguaje esta en constante evolución pero su adopción es lenta. Debemos tener siempre en cuenta la compatibilidad`

![ecmaScript](https://miro.medium.com/max/2400/1*7RxGAl4LXmd8jNy86yi5kg.png)


![](https://cevichejs.com/images/1-javascript/JavaScriptTimeline.jpg)

### Importancia de Javascript en la web moderna

JavaScript, está integrado en cada navegador web moderno y, por lo tanto, está disponible en casi todos los dispositivos.

### HTML, CSS y JS

`En esto recide la importancia de Javascript. Junto con HTML y CSS son las unicas tecnologias para trabajar en el browser`.

#### HTML

```html
<div>
  <h1 class="title">Title<h1>
  <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis massa purus, et auctor est aliquam vulputate. </p>
  <button id="btn">Click</button>
</div>
```

![](./html.png)

#### CSS
```css
.title {
  font-family: arial;
  font-size: 14px;
	border-bottom: 1px solid #CCC;
}

.content {
  font-family: arial;
  font-size: 10px;
}

button {
	background-color: #FFF;
	border: 1px solid #CCC;
	padding: 6px 12px;
	border-radius: 10px
}
```
![](./html-css.png)

#### JavaScript

```javascript
btn = document.getElementById('btn');
content = document.getElementsByClassName('content')[0];
btn.addEventListener('click', function(){
	content.style.display = 'none'
})
```

### Backend y Frontend

![Cliente servidor](https://techterms.com/img/lg/client-server_model_1253.png)

![Avanzado](./avanzado.png)

## lenguaje de programación

Un lenguaje de programación es un lenguaje artificialmente construido que se utiliza para instruir ordenadores. 

Al igual que los lenguajes humanos, los lenguajes de computación permiten que las palabras y frases sean combinadas de nuevas maneras, lo que nos permite expresar siempre nuevos conceptos.

La programación es el acto de construir un programa—un conjunto de instrucciones precisas que le dicen a una computadora qué hacer. 

## Algortimo

Conjunto ordenado de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un tipo de problemas.

```
1- Solicitar el nombre
2- Solicitar año de nacimiento
3- Mostrar la edad
```

```
2- Solicitar año de nacimiento
1- Solicitar el nombre
3- Mostrar la edad
```

```
3- Mostrar la edad
2- Solicitar año de nacimiento
1- Solicitar el nombre
```

```js
name = prompt('Su nombre');
year = prompt('Año de nacimiento');

result = 2020 - year;

alert('Tienes ' +result+ ' años ' + name);
```

## Sintaxis

Modo de combinarse y ordenarse las palabras y las expresiones dentro del discurso.

La sintaxis de un lenguaje de programación se define como el conjunto de reglas que deben seguirse al escribir el código fuente de los programas para considerarse como correctos para ese lenguaje de programación.

[uniwebsidad.com](https://uniwebsidad.com/libros/javascript/capitulo-1/sintaxis)

- No se tienen en cuenta los espacios en blanco y las nuevas líneas.
- Se distinguen las mayúsculas y minúsculas.
- No se define el tipo de las variables.
- No es necesario terminar cada sentencia con el carácter de punto y coma (;).
- Se pueden incluir comentarios.

```js
// Solicitamos el nombre
name = prompt('Su nombre');
year = prompt('Año de nacimiento');

result = 2020 - year;

// Mostamos el resultado
alert('Tienes ' +result+ ' años ' + name);
```


## Entorno de trabajo

### Visual Studio Code

[Vidual Studio Code](https://code.visualstudio.com/)

### JS en HTML

- Crear el documento .html
- Agregar el tag script
- Ingresar el código del ejemplo anterior

### JS externo

- Editar el tag script del punto anterior
- Extraer al documento script.js el código

## Variables

Una variable es una pieza de información guardada en la memoria. Se define con un nombre y un valor.

```
 country = 'Argentina';
 population = 45000000;
```
## Definición de variables

Hablamos de las 3 opciones disponibles

- var es una opción deprecada y no la vamos a usar
- let nos permite definir el ambito de la variable en el ambito en el que esta definida
- const es constante que no cambia de valor

### Tipos de variables

Podemos definir variables de diferente tipo. En ejemplo anterior definimos una cadena de texto y un numero

```
 let country = 'Argentina'; // string
 let population = 450000; // number
```

Existen tambien de tipo boolean, object

### Lenguaje no tipado

Una caracteristica de JS es que es un lenguaje no tipado. No es necesario definir el tipo de valor que tendra la variable al momento de crearla.

```
let population = 45000000;
let population = '45 millones';
```

Esto lleva a tener especial atención ya que cambiar el tipo de una variable puede alterar el funcionamiento

```
let population = 45000000;
let sup = 2780400;

let densidad = population / sup;

// 16.18472162278809
```

```
let population = '45000000';
let sup = 2780400;

let densidad = population / sup;

// 16.18472162278809 por que hace la conversion automatica

```

```
let population = '45 millones';
let sup = 2780400;

let densidad = population / sup;

// NaN por que no puede hacer la conversion

```

### Operaciones con variables

En el ejemplo anterior ya hicimos la primera operacion con variables. Una operacion nos va a permitir crear un nuevo valor operando con valores ya disponibles.

```
// Repetimos el ejemplo
let population = '45000000';
let sup = 2780400;

let densidad = population / sup;
```

### Operadores

- Suma (+)
- Resta (-)
- Division (/)
- Multiplicación (*)
- Comparacion (===)

```javascript
  a = 5;
  b = 5;

  x = a + b;

  // 10
```

```javascript
  a = '5';
  b = '5';

  x = a + b;

  // 55
```

```javascript
  a = '5';
  b = 5;

  x = a + b;

  // 55
```

```javascript
  a = '5';
  b = '5';

  x = a + b;

  // 25
```

Cuando se usa el operador + se debe hacer sobre valores numericos para obtener un resultado numerico. Caso contrario lo que interpreta js es que se estan intentando concatenar texto.

```
  a = 'Hola';
  b = 'mundo'

  x = a + b;

  // "Holamundo"
```



#### Parseo



## Input

Al desarrollar un script estamos buscando resolver un problema ejecutando una serie de tareas. Si nuestro codigo es estatico el resultado de ese código siempre será el mismo. Para variar ese resultado necesitamos ingresar información para su procesamiento. Tendremos muchas vias para realizar esto (conexion a una base de datos, información del sistema, interacción del usuario).

### Prompt

El prompt es el la forma más simple que nos da el navegador para ingresar información. Lo vamos a usar para nuestros primeros pasos antes de pasar a opciones más avanzadas.

```
firstname = prompt('Cual es tu primer nombre');
lastname = prompt('Cual es tu segundo nombre');

fullname = firstname + lastname
```

* Hablar de string template y la facilidad para leer este tipo de cadenas

fullname = `${firstname} ${lastname}`;

## Output

El resultado de nuestro código debe ser mostrado para que sea realmente util. Para eso tambien usaremos 2 elementos que nos provee el browser en una primera instancia: console.log y alert

### Console

Muestra los resultados en la consola

### Alert

Muestra un mensaje de alerta 
