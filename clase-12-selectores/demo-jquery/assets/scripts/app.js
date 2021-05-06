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

function addOrder(index) {
    order.push(products[index]);
    renderOrder();
}

function renderOrder() {
    columnOrder.show();
    orderContainer.empty();
    var total = 0;
    order.forEach(function(product, i) {
        orderContainer.append(`<li class="list-group-item">$${product.price} - ${product.name}</li>`);
        total = total + product.price;
    });
    $('#price-display').html(`$ ${total}`)
}

function renderProduct() {
    products.forEach(function(product, index) {
        productsContainer.append(`<li class="list-group-item" data-id="${index}">${index} - ${product.name}</li>`);
    })

    var listGroupItem = $('.list-group-item');
    listGroupItem.click(function(event) {
        var indexSelection = $(event.target).data("id");
        addOrder(indexSelection);
    });
}

$(document).ready(() => {
    productsContainer = $('#productsContainer');
    orderContainer = $('#orderContainer');
    columnOrder = $('#column-order');

    $('#btnConfirm').click(function() {
        $('#column-products').removeClass('col-sm-4');
        $('#column-products').addClass('col-sm-2');

        pay = $('input[name="pay"]:checked');
        console.log(pay);
        
        comment = $('input[name="comment"]');
        
        $('#pay-display').html(`<h2>${pay.val()}</h2>`)
        $('#comment-display').html(`<p>${comment.val()}</p>`)
    })

    renderProduct();
})