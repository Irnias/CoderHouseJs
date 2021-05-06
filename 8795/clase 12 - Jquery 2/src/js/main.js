let $productscontainer;
let $productscontainer2;
let $productscontainer3;

var products = [{
    "name": "Hamburguesa Simple",
    "price": 5,
    "img": 'https://p0.piqsels.com/preview/91/794/323/burger-with-patty-and-lettuce-thumbnail.jpg'
}, {
    "name": "Hamburguesa Completa",
    "price": 5,
    "img": 'https://p0.piqsels.com/preview/91/794/323/burger-with-patty-and-lettuce-thumbnail.jpg'
}, {
    "name": "Bebida chica",
    "price": 5,
    "img": 'https://p2.piqsels.com/preview/990/556/906/coca-cola-red-can-tin.jpg'
}, {
    "name": "Bebida grande",
    "price": 5,
    "img": 'https://p0.piqsels.com/preview/91/794/323/burger-with-patty-and-lettuce-thumbnail.jpg'
}];

const renderProducts = () => {

    products.forEach( (product,index) => {
        $productscontainer.append(`<li class="list-group-item" data-id="${index}">${product.name}</li><img src="${product.img}" alt="aaa"/>`);
    })
    products.forEach( (product,index) => {
        $productscontainer2.append(`<li class="list-group-item" data-id="${index}">${product.name}</li>`);
    })
    products.forEach( (product,index) => {
        $productscontainer3.append(`<li class="list-group-item" data-id="${index}">${product.name}</li>`);
    })

}

const Ocultar1 = (event,) => {
    event.preventDefault();
    // console.log("holis");
    $productscontainer.show();

    if($productscontainer.is(":visible")){
        $productscontainer2.hide();
        $productscontainer3.hide();
    }

}

const Ocultar2 = (event) => {
    event.preventDefault();
    // console.log("holis");
    $productscontainer2.show();

    $productscontainer.hide();
    $productscontainer3.hide();
}

const Ocultar3 = (event) => {
    event.preventDefault();
    // console.log("holis");
    $productscontainer3.show();

    $productscontainer.hide();
    $productscontainer2.hide();

}



$('document').ready( () => {
    $productscontainer = $('#productsContainer');
    $productscontainer2 = $('#productsContainer2');
    $productscontainer3 = $('#productsContainer3');
    renderProducts();

    // $('#ocultar').on('click',  Ocultar );
    $('#ocultar').click( Ocultar1 );
    $('#ocultar2').click( Ocultar2 );
    $('#ocultar3').click( Ocultar3 );
})
