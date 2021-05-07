import DomBuilder from './DomBuilder';
import Api from './Api';

function getProduct(id, thumbnail) {

    const urlProduct = `https://api.mercadolibre.com/items/${id}/description`;
    $.ajax({
        method: "GET",
        url: urlProduct
    }).done((data) => {

        $('.description').html(data.plain_text);
        $('#thumbnail').attr('src', thumbnail);
        $('#productModal').modal('show');

    }).fail((error) => {
        console.log(error);
    });
}

$(document).ready(() => {
    const URL = 'https://api.mercadolibre.com/sites/MLA/search';
    const domBuilder = new DomBuilder();
    const api = new Api(URL,'POST');
    const parent = $('#productsContainer');
    $("form[name='searchForm']").validate({
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
        submitHandler: function (event) {
            const keySearch = event.elements.search.value;
            api.setData({ q : keySearch });
            api.callApi();
            domBuilder.renderProducts(api.getResult(),parent);
        }
    })
})