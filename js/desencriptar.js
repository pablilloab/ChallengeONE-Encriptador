//Capturo texto ingresado por el usuario para desencriptar
let botonDesencriptar = document.querySelector("#desencriptar");

botonDesencriptar.addEventListener("click", ()=>{
    let textoUsuario = document.querySelector("#texto-encriptar").value;
    let textoDesencriptado = desencriptar(textoUsuario);

    let resultado = document.querySelector("#resultado");
    resultado.value = textoDesencriptado;
})


//Funcion para desencriptar texto.
function desencriptar (textoUsuario) {
    let textoEncriptado = "";
    for (const clave in claves) {
        textoEncriptado = textoUsuario.replaceAll(claves[clave],clave);
        //se actualiza el texto del usuario con las modificaciones ya realizadas.
        textoUsuario = textoEncriptado;        
    }
    return (textoEncriptado);
}