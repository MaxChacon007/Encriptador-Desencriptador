
function encriptarTexto() {
    console.log ("hola");

    let aux = document.getElementById("mensaje").value;
    
   let cont = aux.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
               
                document.getElementById("text1").innerHTML=cont;
               }
              


function desencriptarTexto() {

    let aux = document.getElementById("mensaje").value;
    //console.log(aux)
    let cont = aux
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

document.getElementById("text1").innerHTML=cont;
//console.log(cont)



}

function copiarTexto() {
    let resultado = document.getElementById("text1").innerHTML;
    console.log(resultado);

    navigator.clipboard.writeText(resultado);
}
