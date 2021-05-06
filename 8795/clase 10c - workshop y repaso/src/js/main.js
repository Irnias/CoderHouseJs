let dombuilder = new DomBuilder();

const root = document.getElementById('product-container');


function onSelectClick(event) {

    const selectedId = event.target.id;
    
    let selectedProduct = {};
    products.forEach(product => {
        if(parseInt(product.id) === parseInt(selectedId)) {
            selectedProduct = product;
        }
    });

    selectedProducts.push(selectedProduct);
    buildSelectedProducts();
}

function buildSelectedProducts() {
    const selectedProductsContainer = document.getElementById('productos-en-carrito');
    const lastProduct = selectedProducts[selectedProducts.length-1];

    const card = buildProductCard(lastProduct);
    selectedProductsContainer.appendChild(card);
}

function buildProductCard(producto){

    const div = document.createElement('div');
    div.appendChild(dombuilder.h2(producto.name));
    div.appendChild(dombuilder.descripcion(producto.description));
    div.appendChild(dombuilder.img(producto.image));
    div.appendChild(dombuilder.p(producto.price));
    div.appendChild(dombuilder.button('Comprar','btnProduct',producto.id));

    return div;
}



products.forEach( producto => {

    const div = buildProductCard(producto);
    root.appendChild(div);
});

window.onload = () =>{

    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(btnProduct => {
        btnProduct.addEventListener('click', onSelectClick);
    })

}