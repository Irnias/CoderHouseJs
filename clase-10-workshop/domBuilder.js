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

    this.button = function(content, className, id) {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.setAttribute('data-id', id);
        return button;
    }
}