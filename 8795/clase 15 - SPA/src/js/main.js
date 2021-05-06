console.log(3);


const renderComponent = (componente) => {

    $('#root').empty();

    switch (componente) {
        case 'home':
            $('#root').html(homeComponent);
            break;
        case 'user':
            $('#root').html(userComponent);
            break;
        case 'product':
        $('#root').html(productComponent);
        break;

        default:
            break;
    }

}

function addEventListeners() {
   
}

$(window).ready( () => {
    $('#root').html(homeComponent);

    $('#homeComponent').on('click', () => renderComponent('home') );
    $('#userComponent').on('click', () => renderComponent('user') );
    $('#productComponent').on('click', () => renderComponent('product') );
})