//Definición de variables


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