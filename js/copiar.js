//Funcionalidad para el boton copiar.

let botonCopiar = document.querySelector("#copiar");


botonCopiar.addEventListener("click",()=>{    
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado);
});




