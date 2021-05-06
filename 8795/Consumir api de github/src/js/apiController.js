const apiController = ( url,method,data = null ) => {
    $.ajax({
        // url: url,
        url,
        // method: method,
        method,
        // data: data,
        data
    }).done( (datos) => {
        cargarDatos(datos);
    }
    ).fail( (error) => {
        cargarError(error)
    });
}
