const domBuilder = new DOMBuilder();

function buildProductCard(product) {
    const div = document.createElement('div');
    const title = domBuilder.h2(product.name);
    const image = domBuilder.img(product.image);
    const description = domBuilder.p(product.description)
    const price = domBuilder.p(product.price);
    const button = domBuilder.button('Select', 'btnProduct', product.id);

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(button);

    return div;
}

function buildSelectedProducts() {
    const selectedProductsContainer = document.getElementById('selectedProductsContainer');
    const lastProduct = selectedProducts[selectedProducts.length-1];

    const card = buildProductCard(lastProduct);
    selectedProductsContainer.appendChild(card);
}

function onSelectClick(event) {
    const selectedId = event.target.dataset.id;
    
    let selectedProduct = {};
    products.forEach(product => {
        if(parseInt(product.id) === parseInt(selectedId)) {
            selectedProduct = product;
        }
    });

    selectedProducts.push(selectedProduct);
    buildSelectedProducts();
}

window.addEventListener('DOMContentLoaded', ()=> {
    const productContainer = document.getElementById('productContainer');
    
    products.forEach(product=> {
        const card = buildProductCard(product);
        productContainer.appendChild(card);
    });

    const btnProducts = document.querySelectorAll('.btnProduct');
    btnProducts.forEach(btnProduct => {
        btnProduct.addEventListener('click', onSelectClick);
    })
});