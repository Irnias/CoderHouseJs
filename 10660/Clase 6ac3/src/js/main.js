//let name = document.getElementById('name');
//let lasName = document.getElementById('lastName');



// document.addEventListener('DOMContentLoaded'){
//     let btn = document.getElementById('btnSend').addEventListener('click', function(){
        
//         let name = document.getElementById('name');
//         let lasName = document.getElementById('lastName');

    
//     } );
// }

const getFormData = () => {

    const $terms = $('input[name=terms]');
    if(!$terms.is(':checked')){
        return 'Lo lamento, no aceptaste los tyc';
    }

    const $firstName = $('input[name=firstname]');
    const $lastName = $('input[name=lastname]');
    const $gender = $('input[name=gender]:checked');
    const $textArea = $('#decinosTusOpiniones');

    const formData = {
        $firstName : $firstName,
        $lastName : $lastName,
        $gender : $gender,
        $textArea : $textArea,
        $terms : $terms
    }

    // const formDataMasFacil = {
    //     $firstName,
    //     $lastName,
    //     $gender,
    //     $textArea,
    //     $terms
    // }

    return formData;
    
}

$('document').ready( () => {
    const $boton = $('#btnSend');

    $boton.click((event) =>{
        event.preventDefault()
        const data = getFormData();
        console.log(data);
    })
})