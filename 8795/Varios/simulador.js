function Simulador(){
    this.monto = '';
    this.inversion = '';
    this.CargarMonto = function (monto){
        this.monto = monto;
    }
    this.CalcularRendimiento = function () {
        var Rendimiento = this.monto * this.inversion / 12
    alert(Rendimiento)
    }
    this.SeleccionarInversion = function (inversion){
        switch (inversion) {
            case 'FCI': this.inversion = 0.28; break;
            case 'PLAZOFIJO': this.inversion =  0.3; break;
            case 'CAUCION': this.inversion = 0.25; break;
            default: alert('Elegi una inversion valida.'); break;
        }
    }
}
var cotizador = new Simulador;
cotizador.CargarMonto(parseInt(prompt("Ingrese el capital a invertir")));
cotizador.SeleccionarInversion('PLAZOFIJO');
cotizador.CalcularRendimiento();