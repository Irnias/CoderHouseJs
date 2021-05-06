function getFormData() {
    const firstname = $('input[name=firstname]');
    const firstnameValue = firstname.val();

    const lastname = $('input[name=lastname]');
    const lastnameValue = lastname.val();    
    
    const $gender = $('input[name=gender]:checked');
    const genderValue = $gender.val();

    const $terms = $('input[name=terms]');
    const termsValue = $terms.is(':checked');

    const formData = {
        firstname: firstnameValue,
        lastname: lastnameValue,
        gender: genderValue,
        terms: termsValue,
        date: new Date()
    }

    return formData;
}

$('document').ready(()=>{
    const $btnSend = $('#btnSend');

    $btnSend.click(()=>{
        const data = getFormData();
        console.log(data);
    })

});