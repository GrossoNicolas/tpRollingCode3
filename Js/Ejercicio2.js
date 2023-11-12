// Pedir al usuario que ingrese nombres de ciudades
const ciudades = [];

while (true) {
    const ciudad = prompt("Ingresa el nombre de una ciudad (o presiona Cancelar para terminar):");

    if (ciudad === null) {
        // El usuario presionó Cancelar, salir del bucle
        break;
    }

    ciudades.push(ciudad);
}

// Mostrar el arreglo generado
document.write("Arreglo de ciudades:", ciudades);

// Mostrar la longitud del arreglo
document.write("Longitud del arreglo:", ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write(`<p>Primera ciudad: ${ciudades[0]}</p>`);
document.write(`<p>Tercera ciudad: ${ciudades[2]}</p>`);
document.write(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`);

// Añadir la ciudad de París en la última posición
ciudades.push("París");

// Mostrar por pantalla el elemento que ocupa la segunda posición
document.write("Ciudad en la segunda posición:", ciudades[1]);

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo actualizado
document.write("Arreglo actualizado:", ciudades);
