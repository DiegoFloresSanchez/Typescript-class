"use strict";
// Tipos de datos
Object.defineProperty(exports, "__esModule", { value: true });
var nombre = "Diego";
var edad = 21;
var programador = true;
var lenguaes = ["C", "Javascript", "Java", "C#"];
var pareja = ["edad", 30];
var meses;
(function (meses) {
    meses[meses["Enero"] = 0] = "Enero";
    meses[meses["Febrero"] = 1] = "Febrero";
    meses[meses["Marzo"] = 2] = "Marzo";
    meses[meses["Abril"] = 3] = "Abril";
    meses[meses["Mayo"] = 4] = "Mayo";
    meses[meses["Junio"] = 5] = "Junio";
    meses[meses["Julio"] = 6] = "Julio";
    meses[meses["Agosto"] = 7] = "Agosto";
})(meses || (meses = {}));
var calendario = meses.Febrero;
var nada = undefined;
var Null = null;
var Undefined = undefined;
var temporal = calendario;
