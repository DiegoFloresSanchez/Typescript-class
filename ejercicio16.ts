// clases abstractas

abstract class FiguraGeometrica {
    abstract calcularArea(): number;

    mostrarArea(): void {
        console.log(`El area es ${this.calcularArea()}`);
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor (private largo: number, private alto: number){
        super();
    }

    calcularArea(): number {
        return this.alto * this.largo;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(private radio: number,) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }
}

const rectangulo = new Rectangulo(10, 5);
rectangulo.mostrarArea();

const circulo = new Circulo(8);
circulo.mostrarArea();