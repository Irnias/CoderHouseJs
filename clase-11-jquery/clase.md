## Librerias

En JS, una librería (o biblioteca) es un archivo de JavaScript que contiene muchas funciones, y esas funciones realizan alguna tarea útil para tu app o web.

## Jquery

jQuery es una librería que sirve para manipular el DOM, controlar eventos, agregar animaciones y ejecutar llamadas AJAX, entre otras cosas.

## Cargando JQuery

```
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
```

### 1

Armamos un load listener para reemplazarlo posteriormente por jquery

```
window.addEventListener('load', function () {
  console.log('ready');
})

```

### 2

Incluimos y comprobamos que funcione

```
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script>
                $('document').ready(()=> {
                    console.log('ready');
                })
            </script>
        </head>
        <body>
            
        </body>
    </html> 
```

### 3 Selectores

El uso de jquery nos va a facilitar el uso de selectores

```
    <div id="containerId"></div>

    <div class="containerClass"></div>

    <input type="text" name="fieldText" />
```

### 4 diferencias entre selector nativo y jquery

Mostramos la diferencia entre los 2 selectores. El de jquery devuelve un objeto jquery con muchas mas funciones.

```
    const containerId = document.getElementById('containerId');
    const $containerId = $('#containerId');

    console.log(containerId);
    console.log($containerId);
```

Remarcar que son diferentes mostrando como se accede a la misma funcion de 2 formas diferentes

```
    console.log(containerId.textContent);
    console.log($containerId.text());
```

### 5 by class

Creamos varios elementos con class para demostrar que con unico selector podemos aplicar a todas

```
    <script>
        $('document').ready(() => {
            
            const containerClass = document.getElementsByClassName('containerClass');
            Array.from(containerClass).forEach(container => {
                container.textContent = 'Hola mundo';
            });
            
            /*
            const $containerClass = $('.containerClass');
            $containerClass.text('lorem ipsum');
            

            console.log($containerClass);
            */
        })
    </script>

    <div class="containerClass"></div>
    <div class="containerClass"></div>
    <div class="containerClass"></div>
```

### 6 form

Armamos un formulario para ver como se agrupan y podemos acceder a los metodos para obtener todos sus valores

```
    <script>
        $('document').ready(() => {
            $form = $('form[name="form"]');
            console.log($form.serializeArray());
        })
    </script>
    <form name="form">
        <input type="text" name="firstname" value="firstname"/>
        <input type="text" name="lastname" value="lastname" />
        <input type="radio" value="F" name="gender" checked /> F
        <input type="radio" value="M" name="gender" /> M
        <input type="checkbox" name="terms" checked>
        <input type="submit" value="Save">
    </form>
```

### 7 acceder a elementos sin necesidad de un form

```
    $firstname = $('input[name=firstname]');
    console.log($firstname.val());

    $gender = $('input[name=gender]');
    console.log($gender.val());

    $terms = $('input[name=terms]');
    console.log($terms.is(':checked'));
```