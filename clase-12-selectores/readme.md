# Clase 12

### 1

Armamos el html con la grilla de bootstrap

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-12"><h2>jQuery</h2></div>
                <div class="col-sm-4" id="column-products">A</div>
                <div class="col-sm-4" id="column-order">B</div>
                <div class="col-sm-4" id="column-detail">C</div>
            </div>  
        </div>
    </body>
    </html>
```

Sumamos bootstraps

```
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
```

### 2

Sumamos el objeto que vamos a iterar

```
    var products = [{
        "name": "Hamburguesa Simple",
        "price": 5,
    }, {
        "name": "Hamburguesa Completa",
        "price": 5,
    }, {
        "name": "Bebida chica",
        "price": 5,
    }, {
        "name": "Bebida grande",
        "price": 5,
    }];

    var order = [];
```

Definimos los elementos sobre los que vamos a trabajar

```
    $(document).ready(() => {
        $productsContainer = $('#productsContainer');
        $orderContainer = $('#orderContainer');
        $columnOrder = $('#column-order');            
    })
```

Definimos el contenedor en el que renderizar los productos

```
    <div class="col-sm-4" id="column-products">
        <ul class="list-group" id="productsContainer"></ul>
    </div>
```

### 3

Creamos la función renderPRoducts

```
    function renderProduct() {
        products.forEach(function(product, index) {
            $productsContainer.append(`<li class="list-group-item" data-id="${index}">${product.name}</li>`);
        })
    }
```

### 4 

Asignamos un evento a los botones

```
    $('.list-group-item').click(function(event) {
        var indexSelection = $(event.target).data("id");
        addOrder(indexSelection);
    });
```

### 5

Agregamos la función addOrder

```
    function addOrder(index) {
        order.push(products[index]);
    }
```

### 6 

Agregamos la función renderOrder()

```
    function renderOrder() {
        $orderContainer.empty();
        var total = 0;
        order.forEach(function(product, i) {
            $orderContainer.append(`<li class="list-group-item">$${product.price} - ${product.name}</li>`);
            total = total + product.price;
        });
    }
```