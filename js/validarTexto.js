//Valido condiciones de ingreso del texto

function validarTexto (texto) {
    console.log(texto)

    let mayusculas = /[A-Z]/g;
    let caracteresEspeciales = /[áéíóú]/g;

    if (texto.match(mayusculas)) {
        return true;
    }else if (texto.match(caracteresEspeciales)){
        return true;
    } else {
        return false;
    }

}