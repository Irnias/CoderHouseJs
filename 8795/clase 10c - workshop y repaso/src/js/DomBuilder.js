function DomBuilder (){
    // titulo
    this.h2 = (titulo) => {
        const h2 = document.createElement('h2');
        h2.innerHTML = titulo;

        return h2;
    }
    
    // imagen
    this.img = (src) => {
        const img = document.createElement('img');
        img.src = src;

        return img;
    }

    // precio
    this.p = (content) => {
        const p = document.createElement('p');
        p.textContent = content;
        
        return p
    }
    
    // boton
    this.button = (content, className, id) => {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.id = id;
        // button.setAttribute('id', id) //Hace lo mismo que el de arriba
        return button;
    } 
    
    // descripcion
    this.descripcion = (desc) => {
        const descripcion = document.createElement('p');
        descripcion.textContent = desc;
        
        return descripcion;
    }

    // tags
}


