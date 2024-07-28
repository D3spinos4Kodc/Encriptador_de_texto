// Función para validar el texto (solo letras minúsculas y sin acentos)
function validarTexto(texto) {
    let esValido = true;
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter < 'a' || caracter > 'z') {
            if (caracter !== ' ') {
                esValido = false;
                break;
            }
        }
    }
    return esValido;
}

// Función para encriptar el texto
function encriptar() {
    let textoEntrada = document.getElementById('texto-entrada').value;
    if (validarTexto(textoEntrada)) {
        let textoEncriptado = textoEntrada
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
    } else {
        alert("El texto contiene caracteres no permitidos. Use solo letras minúsculas y sin acentos.");
    }
}

// Función para desencriptar el texto
function desencriptar() {
    let textoEntrada = document.getElementById('texto-entrada').value;
    if (esTextoEncriptado(textoEntrada)) {
        let textoDesencriptado = textoEntrada
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        mostrarResultado(textoDesencriptado);
    } else {
        alert("Texto no válido para desencriptar.");
    }
}

// Función para mostrar el resultado en la sección de salida
function mostrarResultado(texto) {
    // Ocultar el contenedor de placeholder
    document.getElementById('salida-placeholder').style.display = 'none';
    // Mostrar el contenedor de resultado
    document.getElementById('resultado').style.display = 'block';
    // Colocar el texto en el contenedor de resultado
    document.getElementById('texto-resultado').textContent = texto;
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
    let textoResultado = document.getElementById('texto-resultado');
    let rango = document.createRange();
    rango.selectNode(textoResultado);
    window.getSelection().removeAllRanges(); // Quita cualquier selección anterior
    window.getSelection().addRange(rango); // Selecciona el contenido del nodo
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Limpia la selección después de copiar
    alert('Texto copiado al portapapeles');
}

// Función para verificar si una cadena está encriptada
function esTextoEncriptado(cadena) {
    let expresionEncriptacion = /(enter|imes|ai|ober|ufat)/;
    return expresionEncriptacion.test(cadena);
}

// Función para verificar si el campo de texto está vacío y manejar la visibilidad de los contenedores
function verificarCampo() {
    let textoEntrada = document.getElementById('texto-entrada').value;
    let botonEncriptar = document.getElementById('boton-encriptar');
    let botonDesencriptar = document.getElementById('boton-desencriptar');
    
    if (textoEntrada.trim() === '') {
        // Mostrar el contenedor de placeholder
        document.getElementById('salida-placeholder').style.display = 'block';
        // Ocultar el contenedor de resultado
        document.getElementById('resultado').style.display = 'none';
        // Deshabilitar botones de encriptar y desencriptar
        botonEncriptar.disabled = true;
        botonDesencriptar.disabled = true;
    } else {
        // Habilitar botones de encriptar y desencriptar
        botonEncriptar.disabled = false;
        botonDesencriptar.disabled = false;
    }
}

// Inicializar la aplicación con la imagen visible en la sección de salida
window.onload = function() {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('salida-placeholder').style.display = 'block';

    // Agregar evento de entrada para verificar el campo de texto
    document.getElementById('texto-entrada').addEventListener('input', verificarCampo);
    
    // Deshabilitar los botones al inicio
    document.getElementById('boton-encriptar').disabled = true;
    document.getElementById('boton-desencriptar').disabled = true;
};
