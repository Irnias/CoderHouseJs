# Eventos

Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios y definir un comportamiento de la página o aplicación cuando se produzcan. 

JavaScript permite asignar una función a cada uno de los eventos. 
De esta forma, cuando se produce cualquier evento, JavaScript ejecuta su función asociada. Este tipo de funciones se denominan "event handlers" en inglés, y en castellano por "manejadores de eventos".
Los eventos se asocian a cada elemento al cual se lo quiere "escuchar".

### 1

Definir un boton con el llamado a una función directamente desde el elemento con el evento click

```
    <input type="button" value="Clickea el boton" onclick="onBtnClick()" />

    <script>
        function onBtnClick() {
            alert('Mensaje en el click');
        }
    </script>
```

### 2
Mostrar la lista de eventos disponibles desde el slide

https://docs.google.com/presentation/d/1s76cXcNOI06OJ9TJz2s9UYiobexySzk0RKkG55FzOT8/edit#slide=id.g85876b9c1d_0_9

### 3
Sumamos un nuevo boton con el dblclick

```
    <input type="button" value="Clickea el boton x 2" ondblclick="onBtnClick()" />
```

### 4
Agregamos un input para mostrar eventos que son exclusivos de cierto tipo de elementos: blur y focus

```
    <fieldset>
        <legend>blur</legend>
        <input type="text" name="name" onblur="onBlur()">
    </fieldset>    

    function onBlur() {
        console.log('blur');
    }
```

```
    <fieldset>
        <legend>focus</legend>
        <input type="text" name="name" onfocus="onFocus()">
    </fieldset>

    function onFocus() {
        console.log('onFocus');
    }            
```

### 5
Agregar un campo de texto con el evento input. Probar como ejecuta en cada cambio y pasar a mostrar el parametro event. Mostrar como extraer el valor del campo al pasar el contexto como parametro.

```
    <fieldset>
        <legend>input</legend>
        <input type="text" name="name" oninput="onInput()">
    </fieldset>    

    function onInput() {
        console.log('onChange')
    }    
```

```
    <fieldset>
        <legend>input</legend>
        <input type="text" name="name" oninput="onInput(event)">
    </fieldset>    

    function onInput(event) {
        console.log(event.target.value)
    }    
```

### 5.1
Agregar un segundo campo y mostrar como diferentes elementos apuntando a la misma función pero enviando diferente contexto actuan diferente.

```
    <fieldset>
        <legend>input</legend>
        <input type="text" name="name" oninput="onInput(event)">
        <hr>
        <input type="text" name="lastname" oninput="onInput(event)">
    </fieldset> 
``` 

Mostrar la información que puedo obtener del contexto

```

    function onInput(event) {
        console.log(event.target.value)

        console.log(event.target.name, event.target.value)
    } 
```

### 6
Crear un formulario para armar el ejemplo del buscador. 

```
    <fieldset>
        <form onsubmit="sendSearch(event)">
            <input type="text" id="name">
            <button type="submit">Search</button>
        </form>
    </fieldset>
```
Mostrar el comportamiento por defecto de un formulario antes de ver el prevent

```
    function sendSearch(event) {
        event.preventDefault();
    }
```

Ver como puedo acceder a un elemento de la forma tradicional conociendo su id


```
    function sendSearch(event) {
        event.preventDefault();

        let searchKey = document.getElementById('searchKey');
        let searchKeyValue = searchKey.value;
        console.log(searchKeyValue);
    }
``` 

Ver que puedo usar el contexto del form para acceder a sus elementos

```
    function sendSearch(event) {
        event.preventDefault();
        console.log(event.target.elements.searchKey.value);
    }
``` 

Sumar un checkbox al form para mostrar que se suman al contexto

```
    <fieldset>
        <form onsubmit="sendSearch(event)">
            <input type="text" name="searchKey">
            <input type="checkbox" name="advancedSearch">
            <button type="submit">Search</button>
        </form>
    </fieldset>

    function sendSearch(event) {
        event.preventDefault();
        console.log(event.target.elements.searchKey.value);
        console.log(event.target.elements.advancedSearch.checked);
    }    
```

### 7
Agregamos id al boton del formulario para poder editar su atributo disabled que ponemos por defecto. Sumamos el evento oninput al campo para contar los caracteres ingresados.

```
    <fieldset>
        <form onsubmit="sendSearch(event)">
            <input type="text" name="searchKey" oninput="enableButton(event)">
            <input type="checkbox" name="advancedSearch">
            <button type="submit" id="btnSearch" disabled>Search</button>
        </form>
    </fieldset>
```

Completamos la logica de la función para habilitar

```
    function enableButton(event) {
        let btnSearch = document.getElementById('btnSearch');
        if(event.target.value.length > 3) {
            btnSearch.disabled = false;
        } else {
            btnSearch.disabled = true;
        }
    }
``` 

(?) Refactor para simplificar y explicar el uso del !

```
    function enableButton(event) {
        let btnSearch = document.getElementById('btnSearch');
        btnSearch.disabled = !(event.target.value.length > 3);
        
    }
``` 

### 8
Mostrar como podemos asignar eventos desde el js sin necesidad de editar el HTML

```
    <input type="button" value="Clickea el boton" id="btnClick" />

    <script>
        let btnClick = document.getElementById('btnClick');
        btnClick.addEventListener('click', function(){
            alert('Mensaje en el click');
        })
    </script>
```