// Función para encriptar un texto
function encriptarTexto(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Función para desencriptar un texto
function desencriptarTexto(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Función para manejar el evento de click en el botón
function manejarClic() {
    let inputTexto = document.getElementById('texto');
    let resultado = document.getElementById('resultado');
    
    if (document.getElementById('encriptar').checked) {
        resultado.innerText = encriptarTexto(inputTexto.value);
    } else {
        resultado.innerText = desencriptarTexto(inputTexto.value);
    }
}

// Función para copiar el texto en el portapapeles
function copiarTexto() {
    let resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
}

// Asignar funciones a eventos
document.getElementById('botonProcesar').addEventListener('click', manejarClic);
document.getElementById('botonCopiar').addEventListener('click', copiarTexto);