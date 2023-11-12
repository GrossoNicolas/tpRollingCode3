function calcularPerimetroRectangulo(a, b) {
    return 2 * (a + b);
}

const ladoA = parseFloat(prompt("Ingresa la longitud del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Ingresa la longitud del lado B del rectángulo:"));

const perimetro = calcularPerimetroRectangulo(ladoA, ladoB);
document.write(`El perímetro del rectángulo es: ${perimetro}`);
