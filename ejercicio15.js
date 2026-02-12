"use strict";
// herencia con extends
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}
class Perro extends Animal {
    raza;
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    hacerSonido() {
        console.log(`${this.nombre} ladra`);
    }
    mostrarInfo() {
        console.log(`${this.nombre} es ${this.raza}`);
    }
}
const miPerro = new Perro("Max", "Golden retriever");
miPerro.hacerSonido();
miPerro.mostrarInfo();
