class TodoList {
    //metodo para mostrar todo en el dom

    constructor(contenedor){
        this.contenedorDeTareas = contenedor;
        this.todo = this.loadLocalStorage();
        this.renderTodo();
    }
    
    addTodo(tarea){
        this.todo.push(tarea);
        if(this.todo.length > 0) {
            // contenedorDeTareas.appendChild(this.buildItem(todo[todo.length-1]));
            this.contenedorDeTareas.appendChild(this.buildItem(tarea));
        }
        this.saveOnLocalStorage()
        // localStorage.setItem('todoList-MiWeb', JSON.stringify(this.todo) );
    }

    renderTodo(){
        this.todo.forEach( elemento => {
            this.contenedorDeTareas.appendChild(this.buildItem(elemento));
        })
    }

    buildItem(tarea){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = tarea;
        return nuevoElemento;
    }

    saveOnLocalStorage(){
        localStorage.setItem('todoList-MiWeb', JSON.stringify(this.todo) );
    }

    loadLocalStorage(){
        // if(localStorage.getItem('todoList-MiWeb')) {
        //     return JSON.parse(localStorage.getItem('todoList-MiWeb'));
        // } else {
        //     return [];
        // }
        return (localStorage.getItem('todoList-MiWeb')) ? JSON.parse(localStorage.getItem('todoList-MiWeb')) : [] ;
    }

    
    //metodo guardar en el local stoage

    
    //metodo para borrarlo del dom
    //metodo para borrar del local storage

}