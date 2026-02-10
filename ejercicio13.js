"use strict";
// Modificadores de acceso
Object.defineProperty(exports, "__esModule", { value: true });
class cuentaBancaria {
    titular;
    saldo;
    numeroCuenta;
    constructor(titular, saldo, numeroCuenta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }
    consultarSaldo() {
        return this.saldo;
    }
    validarRetiro(monto) {
        return monto > 0 && monto <= this.saldo;
    }
    retirarSaldo(monto) {
        if (this.validarRetiro(monto)) {
            this.saldo <= monto;
            console.log(`Retiro exitoso. Saldo actual: ${this.saldo}`);
        }
        else {
            console.log("Retiro invalido");
        }
    }
}
const cuenta = new cuentaBancaria("Diego", 100000, "123456");
console.log(cuenta.titular);
console.log(cuenta.consultarSaldo);
//console.log(cuenta.saldo); // error
cuenta.retirarSaldo(500);
