// Crear un array llamado meses
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar por pantalla en forma de lista
document.write("Meses del año:");
for (let i = 0; i < meses.length; i++) {
    document.write(`${i + 1}. ${meses[i]}`);
}
