# Json - Storage

### JSON

JavaScript Object Notation (JSON) es un formato basado en texto plano para representar datos estructurados en la sintaxis de objetos de JavaScript. 

Es comúnmente utilizado para transmitir datos en aplicaciones web. Desde el servidor al cliente o entre aplicaciones en el server.

Aunque es muy parecido (casi similar) a la sintaxis de JavaScript, puede ser utilizado independientemente de JavaScript, y muchos entornos de programación poseen la capacidad de leer (convertir; parsear) y generar JSON.


### 1

Mostrar multiples ejemplos de objetos en js. Remarcar la posibilidad de poner diferentes tipos de datos

```
    let product = {
        "name" : "Playstation",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["consola", "sony", "gaming"]
    }
```

```
    let user = {
        "name" : "José",
        "lastname" : "San Martin",
        "birthday" : "1756-01-01"
    }
```

### 2

Comentar que un json se puede definir en el js o como un archivo aparte de formato json. En principio los vamos a definir en el js.

Crear un archivo .json y mostrar las diferencias con el que se define en js. Importancia de validar el archivo para evitar errores.

```
    {
        "name" : "Playstation",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["consola", "sony", "gaming"]
    }
```

### 3

Definir una lista de objetos, comentar que no es mas que un array de objetos.

```
    let products = [{
        "name" : "Playstation",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["consola", "sony", "gaming"]
    },{
        "name" : "Iphone",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["phone", "apple"]
    },{
        "name" : "Chromecast",
        "description" : "",
        "price" : 1,
        "available" : false,
        tags : ["tv", "google"]
    }]
```

### 4

Al ser un array vamos a poder iterar sobre sus elementos y obtener la información accediendo a las propiedades de cada uno.

```
    let products = [{
        "name" : "Playstation",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["consola", "sony", "gaming"]
    },{
        "name" : "Iphone",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["phone", "apple"]
    },{
        "name" : "Chromecast",
        "description" : "",
        "price" : 1,
        "available" : false,
        tags : ["tv", "google"]
    }]

    products.forEach(product => {
        console.log(product.name)
    })
```

### Ejemplo menú

Retomamos el ejemplo de la clase de DOM para reemplazar el array por un json. Copiar el archivo de la carpeta demo de clase 8.

```
let hours = [
    [6, 12, 'Hora del desayuno'],
    [12, 15, 'Hora del almuerzo'],
    [15, 20, 'Hora de la merienda'],
    [20, 23, 'Hora de la cena']
];
```

```
    let hours = [{
            open: 6,
            close: 12,
            message: 'Hora del desayuno'
        },{
            open: 12,
            close: 15,
            message: 'Hora del almuerzo'
        },{
            open: 15,
            close: 20,
            message: 'Hora de la merienda'
        },{
            open: 20,
            close: 24,
            message: 'Hora del desayuno'
        }
    ]

    ...

    hours.forEach(hour => {
        if(currentHour >= hour.open && currentHour < hour.close) {
            msg = hour.message;
        }            
    });
```

## Storage

El objeto Storage (API de almacenamiento web) nos permite almacenar datos de manera local en el navegador, sin necesidad de realizar alguna conexión con el servidor.
Hay dos tipos de almacenamiento: localStorage y sessionStorage. Uno es indefinido en el navegador, y otro es temporal, hasta cerrar la pestaña.

### 1

Usamos localStorage para guardar 1 dato. Mostrar en la consola del browser en que lugar se guardo el elemento

```
    localStorage.setItem('Nombre', 'Miguel Antonio');
```

Recuperamos 1 dato desde el localstorage

```
    localStorage.getItem('Nombre');
```

#### SessionStorage

Usamos los mismos ejemplos cambiando el objeto y remarcando la diferencia entre ambos

```
    sessionStorage.setItem('Nombre', 'Miguel Antonio');
```

Recuperamos 1 dato desde el sessionStorage

```
    sessionStorage.getItem('Nombre');
```

Mostramos como eliminar elementos

```
localStorage.removeItem('Nombre');
sessionStorage.removeItem('Nombre');

localStorage.clear() //elimina toda la información
sessionStorage.clear() //elimina toda la información

```

### Guardar objetos en el storage

Al intentar guardar un objeto en el storage debemos convertirlo en un string. Para eso usamos stringfy

```
    let product = {
        "name" : "Playstation",
        "description" : "",
        "price" : 1,
        "available" : true,
        tags : ["consola", "sony", "gaming"]
    }

    sessionStorage.setItem('product', product);

    console.log(sessionStorage.getItem('product'))
```

```
    ...
    sessionStorage.setItem('product', JSON.stringify(product));
    ...
```

Para recuperar los datos vamos a usar parse para convertir un string con formato json nuevamente en un objeto

```
    ...
    let fromStorage = JSON.parse(sessionStorage.getItem('product'));
    console.log(fromStorage);
    ...
```

## Ejemplo todo

Recuperamos el ejemplo del todo para agregar storage