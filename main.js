"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
var fn = function (a, b, c) {
    // condiciones de los parametros de entrada
    if (a + b + c > 40) {
        throw new Error("El número de empanadas no puede pasar de 40.");
    }
    if ((a + b + c) % 3 !== 0) {
        throw new Error("El número de empanadas tiene que ser divisible entre 3.");
    }
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("El numero de empanadas tiene que ser un numero entero.");
    }
    var precioTotal = 0;
    // array de los precios
    var preciosEmpanadas = [];
    for (var i = 0; i < a; i++) {
        preciosEmpanadas.push(12);
    }
    for (var i = 0; i < b; i++) {
        preciosEmpanadas.push(14);
    }
    for (var i = 0; i < c; i++) {
        preciosEmpanadas.push(16);
    }
    // array de la media de los precios
    var mediaEmpanadas = [];
    while (preciosEmpanadas.length > 1) {
        var primerPrecio = preciosEmpanadas.shift();
        var ultimoPrecio = preciosEmpanadas.pop();
        var mediaPrecio = (primerPrecio + ultimoPrecio) / 2;
        mediaEmpanadas.push(mediaPrecio);
        mediaEmpanadas.push(mediaPrecio);
    }
    // añadir la empanada al array en caso de que falte 
    if (preciosEmpanadas.length === 1) {
        mediaEmpanadas.push(preciosEmpanadas.pop());
    }
    // ordenar los precios de mayor a menor
    mediaEmpanadas.sort(function (a, b) { return b - a; });
    console.log(mediaEmpanadas);
    // precio total calculo
    for (var i = 0; i < mediaEmpanadas.length; i++) {
        if (i % 3 === 0) {
            precioTotal += mediaEmpanadas[i];
        }
    }
    console.log(precioTotal);
    return precioTotal;
};
exports.fn = fn;
