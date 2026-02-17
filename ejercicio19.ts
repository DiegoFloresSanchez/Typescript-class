// Metodos y propieades estáticas

class Matematicas {
    static PI: number= 3.14159;

    static calcularAreaCirculo(radio: number): number {
        return this.PI * radio ** 2;
    }

    static calcularPerimetroCirculo(radio:number): number {
        return 2 * this.PI * radio;
    }
}

console.log(Matematicas.PI);
console.log(Matematicas.calcularAreaCirculo(5));
console.log(Matematicas.calcularPerimetroCirculo(5));