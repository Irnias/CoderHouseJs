const getFormData = () => {
    const $firstName = $('input[name="firstname"]');
    const $firtNameVal = $firstName.val();
    
    const $lastName = $('input[name="lastname"]');
    const $lastNameVal = $lastName.val();
    
    const $genderVal = $('input[name="gender"]:checked').val();
    
    const $terms = $('input[name="terms"]');
    const $termsChecked = $terms.is(':checked');

    const formData = {
        $firtNameVal : $firtNameVal ,
        $lastNameVal : $lastNameVal,
        $genderVal : $genderVal,
        $termsChecked : $termsChecked,
    }

    return formData;
}

$('document').ready(() => {
    
    let $botonSubmit = $('#formTestJquery');
    
    $botonSubmit.click( (evento) => {
        evento.preventDefault();
        const data = getFormData();
        if(data.$termsChecked == true ){
            console.log("holis");
            console.log(`Hola ${data.$firtNameVal}, ${data.$lastNameVal} sos ${data.$genderVal}`)
        }else{
            console.log("No aceptaste los tyc");
        }
    } );
    
})
