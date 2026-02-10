// clase básica con constuctor

class Persona {
    // atributos
    nombre: string;
    edad: number;

    constructor (nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;

    }

    saludar(): void {
        console.log (`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona ("Diego", 25);
persona1.saludar();