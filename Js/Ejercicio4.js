function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

const numero = parseInt(prompt("Introduce un número entero:"));
const resultado = esParOImpar(numero);
document.write(resultado);
