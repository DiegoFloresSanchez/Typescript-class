// Parametros funcionales

function saludar (nombre: String, apellido ?: String): String {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`
    } else {
        return `Hola ${nombre}`
    }
}

console.log(saludar('Diego'));
console.log(saludar('Diego', 'Flores'));