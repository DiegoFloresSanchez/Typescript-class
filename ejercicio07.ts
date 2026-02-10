// funciones con tipos complejos

function obtenerDatosUsuario(id: number): {nombre: String, edad: number} {
    return {
        nombre: 'Diego',
        edad: 21,
    }
}

let usuario = obtenerDatosUsuario(1);
console.log(usuario)