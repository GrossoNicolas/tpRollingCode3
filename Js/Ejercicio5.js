function determinarTipoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

const cadenaUsuario = prompt("Ingresa una cadena de texto:"); // Solicitar al usuario que ingrese la cadena.
const resultado = determinarTipoCadena(cadenaUsuario);
document.write(resultado);
