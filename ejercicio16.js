"use strict";
// clases abstractas
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
    mostrarArea() {
        console.log(`El area es ${this.calcularArea()}`);
    }
}
class Rectangulo extends FiguraGeometrica {
    largo;
    alto;
    constructor(largo, alto) {
        super();
        this.largo = largo;
        this.alto = alto;
    }
    calcularArea() {
        return this.alto * this.largo;
    }
}
class Circulo extends FiguraGeometrica {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}
const rectangulo = new Rectangulo(10, 5);
rectangulo.mostrarArea();
const circulo = new Circulo(8);
circulo.mostrarArea();
