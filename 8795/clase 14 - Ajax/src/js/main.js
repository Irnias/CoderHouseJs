
$(document).ready( ()=> {

    $("form[name='searchForm']").validate(
        {
            rules: {
                search: {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                search: {
                    required: 'El campo de busqueda es obligatorio',
                    minlength: 'El campo debe tener un minimo de 3 caracteres'
                }
            },
        submitHandler:  (event) => {
            // console.log(event.elements.search.value);
            const keySearch = event.elements.search.value;
            searchProducts(keySearch);
        }
    })
})



const getCardHtml = (product) => {

    return `
    <div class="col-sm-4">
        <div class="card">
            <a href="#" class="imageProduct" onClick="getProduct('${product.id}', '${product.thumbnail}')"><img src="${product.thumbnail}" width="100%"></a>
            <div class="card-body">
                <p class="card-text">${product.title}</p>
                <p class="card-text">$${product.price}</p>
            </div>
        </div>
    </div>
    `;

}








const renderProducts = (products) => {
    $('#productsContainer').empty();
    products.forEach(product => {
        $('#productsContainer').append(getCardHtml(product));
    });
}


const searchProducts = (keySearch) => {

    const method = "GET";
    const url = "./archivo.js";
    
    $.ajax(
        {
            method,
            url,
            data: {
                q : keySearch,
            }
        }
    ).done( (data) => {
        console.log(data);
        renderProducts(data.results);
    }).fail( (error) => {
        console.log(error);
    })

}