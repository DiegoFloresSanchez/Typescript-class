// Composición vs herencia

class Motor {
    encender(): void {
        console.log("Motor encendido");
    }

    apagar(): void {
        console.log("Motor apagado");
    }
}

class Automovil {
    private motor: Motor;        // composición (todo-parte)
    marca: string;

    constructor(marca: string) {
        this.motor = new Motor();
        this.marca = marca;
    }

    arrancar(): void {
        console.log(`${this.marca} arrancando...`);
        this.motor.encender();
    }

    detener(): void {
        console.log(`${this.marca} deteniéndose...`)
        this.motor.apagar();
    }
}

const miAuto = new Automovil("Audi RSQ8");
miAuto.arrancar();
miAuto.detener();