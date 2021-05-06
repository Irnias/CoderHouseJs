### Workshop

## On Load

Armamos un pequeño para mostrar que funciona si hacemos referencia a un elemento que ya fue renderizado

```
    <body>
        <button id="btn">Click me</button>

        <script>
            const btn = document.getElementById('btn');
            btn.addEventListener('click', (event)=>{
                alert('click');
            })
        </script>

    </body>
``` 

Generamos un error al mover el script al header ya que se busca un elemento que no existe

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            const btn = document.getElementById('btn');
            btn.addEventListener('click', (event)=>{
                alert('click');
            })
        </script>    
    </head>
    <body>
        <button id="btn">Click me</button>
    </body>
    </html>
``` 

Configuramos el onLoad para que se elimina el error ya que se ejecuta el codigo cuando el documento ya esta cargado. Usamos load explicando que se dispara cuando el dom y todos los documentos asociados estan cargados.

```
    <script>

        window.addEventListener('load', (event)=>{
            console.log(event);
            const btn = document.getElementById('btn');
            btn.addEventListener('click', (event)=>{
                alert('click');            
            })
        });
        
    </script> 
```

Cambiamos por DOMContentLoaded y explicamos que en este caso se espera a la construcción del DOM sin esperar por imagenes u otro contenido.
```
    <script>

        window.addEventListener('DOMContentLoaded', (event)=>{
            console.log(event);
            const btn = document.getElementById('btn');
            btn.addEventListener('click', (event)=>{
                alert('click');            
            })
        });
        
    </script> 
```

### Vinculo con un archivo JS

Sacamos a un archivo index.js el script del header para mostrar como vincular un archivo. Recomendar hacerlo en el footer para evitar código que interrumpa el renderizado.

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <button id="btn">Click me</button>
        <script src="./index.js" ></script>
    </body>
    </html>
``` 

### Ejemplo productos

Armar el html inicial

```
<body>
    <div id="productContainer">

    </div>
    <div id="selectedProducts">

    </div>    
    <script src="productos.js"></script>
</body>
```

Configurar datos y onload en script

```
    const products = [{
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

    window.addEventListener('DOMContentLoaded', (event)=>{
        console.log('loaded')    
    })
```

Llevamos los datos de productos a un archivo data.js y cargamos junto al script. Mostramos que el orden de los archivos es importante por las dependencias entre ellos.

```
    <script src="data.js"></script>
    <script src="productos.js"></script>
```

Agregamos el contenido del card al html para mostrar que es lo que vamos a crear de forma dinamica

```
    <div class="card">
        <h2 class="title">Name</h2>
        <img src="https://picsum.photos/300/200">
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit tempus hendrerit.</p>
        <p class="price">$100</p>
        <button>Select</button>
    </div>
```

### 1
Armamos el script base para recorrer los productos

```
window.addEventListener('DOMContentLoaded', (event)=>{
    products.forEach(product => {
        
    })
})
```

Armamos la funcion que crea de form dinamica cada card. Remarcamos que es una representación del html que armamos antes.

```
function buildProductCard() {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Hola mundo';

    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    div.appendChild(title);

    return div;
}
```

Completamos con el llamado a la función para hacer el render de los datos

```
    window.addEventListener('DOMContentLoaded', (event)=>{
        const productContainer = document.getElementById('productContainer');
        products.forEach(product => {
            const card = buildProductCard();
            productContainer.appendChild(card);
        })
    })
```

Completar la función buildCard con datos estaticos que copien el diseño del html

```
    function buildProductCard() {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = 'Hola mundo';

        const image = document.createElement('img');
        image.src = "https://picsum.photos/300/200"

        const description = document.createElement('p');
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit tempus hendrerit.'

        const price = document.createElement('p');
        price.textContent = 100;

        const button = document.createElement('button');
        button.classList.add('btnProduct');

        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(description)
        div.appendChild(price)
        div.appendChild(button);

        return div;
    }
```

Eliminar del html el template que teniamos de base

Agregar el parametro a la función para comenzar a recibir los datos de cada producto

```
    function buildProductCard(product) {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = product.name;

        const image = document.createElement('img');
        image.src = product.img

        const description = document.createElement('p');
        description.textContent = product.description

        const price = document.createElement('p');
        price.textContent = product.price;

        const button = document.createElement('button');
        const button.textContent = 'select'
        button.classList.add('btnProduct');

        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(description)
        div.appendChild(price)
        div.appendChild(button);

        return div;
    }
```

### 3 OBJETO

Creamos un objecto para manipular el dom. Recalcamos que es una abstracción, no esta relacionado al listado de productos

```
const DOMBuilder = function() {
    this.h2 = function(title) {
        const h2 = document.createElement('h2');
        h2.textContent = title;
        return h2
    }


    this.img = function(src) {
        const img = document.createElement('img');
        img.src = src;

        return img;
    }

    this.p = function(content) {
        const p = document.createElement('p');
        p.textContent = content;
        
        return p
    }

    this.button = function(content, className) {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        return button;
    }
}

const domBuilder = new DOMBuilder();
```
Modificamos buildCard usando el objeto remarcando que queda código más simple que puede seguir mejorando

```
    function buildProductCard(product) {
        const div = document.createElement('div');
        div.classList.add('card');

        const title = domBuilder.h2(product.name);
        const image = domBuilder.img(product.image);
        const description = domBuilder.p(product.description);
        const price = domBuilder.p(`$ ${product.price}`);
        const button = domBuilder.button('Select', 'btnProduct');

        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(description)
        div.appendChild(price)
        div.appendChild(button);

        return div;
    }
```

### 4 Listeners a los botones

Vamos a aplicar el listener a todos los botones que se crearon en la lista. Usamos el querySelectorAll para obtener todos los elementos con la misma clase. Agregamos una función para manipular los clicks.

```
    function onSelectClick() {
        console.log('onSelectClick');
    }
    
    ...

    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(btnProduct => {
        btnProduct.addEventListener('click', onSelectClick);
    });
```

### 5 Obtener el id

Necesitamos obtener el id del elemento al que le estoy haciendo click. Para eso sumamos en el button un data-set con el id. Lo sumamos en el objeto con los datos.

```
    this.button = function(content, className, id) { <------------- id
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.setAttribute('data-id', id); <--------------Set Attribute
        return button;
    }

    ...

    const button = domBuilder.button('Select', 'btnProduct', product.id); <--------- Nuevo ID
```

Al momento de gestionar el click en el botón y conociendo el contexto podemos acceder al dato del id

https://developer.mozilla.org/es/docs/Learn/HTML/como/Usando_atributos_de_datos

```
    function onSelectClick(event) {
        console.log(event.target.dataset.id);
    }
```

### 6

Conociendo el ID lo podemos ir a buscar a la lista de productos. Mostramos la opción con forEach y la nueva opción de programación funcional con find

```
    function onSelectClick(event) {
        const selectedId = parseInt(event.target.dataset.id);
        
        let selectedProduct = {};
        products.forEach(product => {
            if(product.id === selectedId) {
                selectedProduct = product;
            }
        })
        
        const selectedProduct = products.find(product => product.id === selectedId);

        console.log(selectedProduct);
        
    }
```

### 7

Agregamos un array vacio donde guardar la selección 

```
    const selectedProducts = [];
```

Sumamos el elemento seleccionado y llamamos a una nueva función que crea la card reutilizando la funcion build card

``
    function onSelectClick(event) {
        const selectedId = parseInt(event.target.dataset.id);
        
        let selectedProduct = {};
        products.forEach(product => {
            if(product.id === selectedId) {
                selectedProduct = product;
            }
        })
        
        //const selectedProduct = products.find(product => product.id === selectedId);

        selectedProducts.push(selectedProduct);
        buildSelectedProducts()
    }
```

### 8

Armamos la función para hacer el render de los elementos seleccionados

```
    function buildSelectedProducts() {
        const selectedProductsContainer = document.getElementById('selectedProductsContainer');
        const lastProduct = selectedProducts[selectedProducts.length-1];
        const card = buildProductCard(lastProduct);
        selectedProductsContainer.appendChild(card); 
    }
``` 