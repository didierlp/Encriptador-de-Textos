

function recuperarTexto() {

    let datoHtml = document.getElementById("mensaje").value;
    encriptarTexto(datoHtml);

    return;
}

function recuperarTextoEncriptado() {

    let datoHtml = document.getElementById("mensaje").value;
    desencriptarTexto(datoHtml);
    return;
}

function encriptarTexto(valor) {
    let letra = valor.split("");

    for (i = 0; i < letra.length; i++) {
        switch (letra[i]) {
            case "a": letra[i] = "ai";

                break;
            case "e": letra[i] = "enter";

                break;
            case "i": letra[i] = "imes";

                break;
            case "o": letra[i] = "ober";

                break;
            case "u": letra[i] = "ufat";

                break;

            default:
                break;
        }
    }

    asignarValorElemento(letra.join(""));
    

}
function asignarValorElemento(valor) {
    let elementoHtml = document.querySelector(".output-texto");
    elementoHtml.innerHTML = valor;
    return;
}

function desencriptarTexto(valor) {
  

   let textoDesencriptado = 
   valor.replaceAll("ai", "a").replaceAll("enter", "e").
   replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");

   asignarValorElemento(textoDesencriptado)
    

    return;
}
