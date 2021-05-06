## DOM

El DOM, o Modelo de Objetos del documento es lo que permite interactuar a JS con los diferentes elementos HTML de una web, como también poder operar sobre ellos y modificarlos.

El DOM funciona mediante una transformación del código HTML que contiene la estructura de una web, a una representación estructural del documento, en forma de árbol, mediante la cual podemos acceder usando JS, y operar sobre los elementos.

### 1.0
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

    </script>
    <style>

    </style>
</head>
<body>
    <div>Hola mundo</div>
</body>
</html>
```

### 2.0
Poner el script abajo para evitar comentar el onLoad
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style></style>    
</head>
<body>
    <div>
        <h2>Hola mundo</h2>
    </div>
    <div>
        <h3>Seleccione su menú</h3>
        <ul>
            <li>Menú 1</li>
            <li>Menú 2</li>
            <li>Menú 3</li>
        </ul>
    </div>
    <script>
    </script>    
</body>
</html>
```

### 3.0
Mostrar que en el objeto document tenemos tenemos todo el arbol html
```
console.log(document)
console.log(document.firstChild)
console.log(document.body.children);
```
Mostrar que se puede llegar a un elemento siguiendo el arbol de nodos pero que no es eficiente. Modificar la estructura del html para generar un error en la busqueda del nodo.
```
console.log(document.body.children[0].children[0]);
console.log(document.body.children[0].children[0].textContent);
```

### 4.0
Agregar un id al h2 para mostrar como acceder a los nodos de una forma directa
```
<h2 id="title">Hola mundo</h2>
```
Explicar el metodo getElementById
```
console.log(document.getElementById('title').textContent);
```

### 5.0
Agregamos 2 bloques de contenido con class para poder mostrar las diferencias entre id y class
```
<p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse felis velit, bibendum id congue sit amet, condimentum in erat.</p>
```
Remarcar que className devuelve una lista de htmlCollection
```
    console.log(document.getElementsByClassName('content'));
```

Mostrar querySelector, la diferencia de sintaxis y que en el caso de las clases solo retorna el primero

```
console.log(document.querySelector('.content'));
```

### 6.0
Armar un script que muestre un mensaje diferente dependiendo la hora del día

```
    <script>
        let date = new Date();
        let currentHour = date.getHours();
        let titleContainer = document.getElementById('title');

        let msg = '';
        if(currentHour >= 6 && currentHour < 12){
            msg = 'Hora del desayuno';
        } else if(currentHour >= 12 && currentHour < 15){
            msg = 'Hora del almuerzo';
        } else if(currentHour >= 15 && currentHour < 20){
            msg = 'Hora de la merienda';
        } else if(currentHour >= 20){
            msg = 'Hora de la cena';
        } else {
            msg = 'Cerrado';
        }

        titleContainer.textContent = msg;
    </script>   
```

### 6.1 Refactor con array

```
    <script>
        let date = new Date();
        let currentHour = date.getHours();
        let titleContainer = document.getElementById('title');

        let hours = [
            [6, 12, 'Hora del desayuno'],
            [12, 15, 'Hora del almuerzo'],
            [15, 20, 'Hora de la merienda']
        ]

        let msg = 'Cerrado';
        
        hours.forEach(hour => {
            if(currentHour >= hour[0] && currentHour < hour[1]) {
                msg = hour[2];
            }
        })

        titleContainer.textContent = msg;
    </script> 
```

### 6.2 Mostrar alternativo con for
Mostrar la posibiliadd de usar el break con el for
```
    for(let i=0; i< hours.length; i++){
        if(currentHour >= hours[i][0] && currentHour < hours[i][1]) {
            msg =  hours[i][2];
            break;
        }
    }
```

#### Ejercicio
Sumar al array un elemento nuevo y mostrarlo en el texto que acompaña al titulo. 

### 7.0 
Modificamos la lista para agregar un elemento

```
    <ul id='menu-container'>
        <li>Menú 1</li>
        <li>Menú 2</li>
        <li>Menú 3</li>
    </ul>
```

```
let menuContainer = document.getElementById('menu-container');

    let item = document.createElement('li');
    item.textContent = 'Nuevo item';
    menuContainer.appendChild(item);
```