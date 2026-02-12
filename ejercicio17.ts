// interfaces

interface Vehiculo {
    marca: string;
    modelo: string;
    acelerar(): void;
    frenar(): void;
}

class Automovil implements Vehiculo {
    marca: string;
    modelo: string;
    private velocidad: number = 0;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar(): void {
        this.velocidad += 30;
        console.log(`${this.marca} ${this.modelo} acelra: Velocidad ${this.velocidad}`);
    }

    frenar(): void {
        this.velocidad = Math.max(0, this.velocidad - 10);
        console.log(`${this.marca} ${this.modelo} acelra: Velocidad ${this.velocidad}`);
    }
}

const auto = new Automovil("Audi", "RSQ8");
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.frenar();