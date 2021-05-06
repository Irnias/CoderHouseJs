let datosResponse;
let errorResponse;

const cargarDatos = (datos) => {
    datosResponse = datos;
    console.log(datos)
    completarDom()
}
const cargarError = (error) => {
    errorResponse = error;
}

const completarDom = () =>{
    $('#userName').html(datosResponse.login);
    $('#userlocation').html(datosResponse.location);
    $('#user-img').attr('src',datosResponse.avatar_url);
    $('#repos').html(datosResponse.public_repos);
    $('#gists').html(datosResponse.public_gists);
    $('#followers').html(datosResponse.followers);
}

$(document).ready( () => {
    
    $('#btn').click( (event) => {
        event.preventDefault();
        let user = $('#user').val();
        apiController(`https://api.github.com/users/${user}`,'GET');
    })
    // let data = {
    //     q : 'Celulares'
    // }
    // let resultado2 = apiController('https://api.mercadolibre.com/sites/MLA/search','GET', data);
    // console.log(resultado2);
})


// fetch("").then( () => {} ).catch( () => {} )

