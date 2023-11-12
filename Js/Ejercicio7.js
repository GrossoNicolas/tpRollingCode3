function mostrarTablaMultiplicar(numero) {
    document.write(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        document.write(`${numero} x ${i} = ${resultado}`);
    }
}

const numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar:"));

if (!isNaN(numero)) {
    mostrarTablaMultiplicar(numero);
} else {
    document.write("Por favor, ingresa un número válido.");
}
