"use strict";
// clase básica con constuctor
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    // atributos
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const persona1 = new Persona("Diego", 25);
persona1.saludar();
