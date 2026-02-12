// herencia con extends

class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`)
    }
}

class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, raza: string) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(): void {  // override (sobreimposición)
        console.log(`${this.nombre} ladra`)
    }

    mostrarInfo(): void {
        console.log(`${this.nombre} es ${this.raza}`)
    }
}

const miPerro = new Perro ("Max", "Golden retriever")
miPerro.hacerSonido();
miPerro.mostrarInfo();