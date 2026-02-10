"use strict";
// funciones con tipos complejos
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerDatosUsuario(id) {
    return {
        nombre: 'Diego',
        edad: 21,
    };
}
let usuario = obtenerDatosUsuario(1);
console.log(usuario);
