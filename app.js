//Definición de variables
/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.*/

var textArea = document.getElementById("encode-box");


//Función que solo permitirá ingresar letras minúsculas y espacios en el textarea.
textArea.addEventListener("input", function(event) {
    var contenido = textArea.value;
    contenido = contenido.replace(/[^a-z\s]/g, '');
    textArea.value = contenido;
});

//Función para codificar el texto:
function encoding(){
    let  content = document.getElementById('encode-box').value;
    content = content.split('');
    
    for (var i = 0; i < content.length; i++) {
        if (content[i] === 'a') {
            content[i] = 'ai';
        } else if (content[i] === 'e') {
            content[i] = 'enter';
        } else if (content[i] === 'i') {
            content[i] = 'imes';
        } else if (content[i] === 'o') {
            content[i] = 'ober';
        } else if (content[i] === 'u') {
            content[i] = 'ufat';
        }
    }
    content = content.join('');
    textArea.value = content;
}

//Función para revertir la codificación
function decoding(){
    let  content = document.getElementById('decode-box').value;
    
    content = content.replace(/ai/g, 'a');
    content = content.replace(/enter/g, 'e');
    content = content.replace(/imes/g, 'i');
    content = content.replace(/ober/g, 'o');
    content = content.replace(/ufat/g, 'u');
    document.getElementById('decode-box').value = content;
}