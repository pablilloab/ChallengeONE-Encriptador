//Archivo que encripta el texto ingresado por el usuario.

//Objeto con claves

const claves = {
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
};


//Capturo texto ingresado por el usuario para encriptar
let botonEncriptar = document.querySelector("#encriptar");

botonEncriptar.addEventListener("click", () => {

    let textoUsuario = document.querySelector("#texto-encriptar").value;
    let textoEncriptado = encriptar(textoUsuario);   
    
    let resultado = document.querySelector("#resultado");
    resultado.value = textoEncriptado;
               
})


//Funcion para encriptar texto.
function encriptar (textoUsuario) {
    let textoEncriptado = "";
    for (const clave in claves) {
        textoEncriptado = textoUsuario.replaceAll(clave,claves[clave]);
        //se actualiza el texto del usuario con las modificaciones ya realizadas.
        textoUsuario = textoEncriptado;        
    }
    return (textoEncriptado);
}





