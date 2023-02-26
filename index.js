var Mousetrap = require('mousetrap');
const { parse } = require('path');

let resultado = document.getElementById("resultado");
let actual = document.getElementById("actual");
let botonUno = document.getElementById("botonUno");
let botonDos = document.getElementById("botonDos");
let botonTres = document.getElementById("botonTres");
let botonCuatro = document.getElementById("botonCuatro");
let botonCinco = document.getElementById("botonCinco");
let botonSeis = document.getElementById("botonSeis");
let botonSiete = document.getElementById("botonSiete");
let botonOcho = document.getElementById("botonOcho");
let botonNueve = document.getElementById("botonNueve");
let botonCero = document.getElementById("botonCero");
let botonSuma = document.getElementById("botonSuma");
let botonResta = document.getElementById("botonResta");
let botonDiv = document.getElementById("botonDiv");
let botonMul = document.getElementById("botonMul");
let botonDel = document.getElementById("botonDel");
let botonClear = document.getElementById("botonClear")
let botonIgual = document.getElementById("botonIgual")


botonUno.addEventListener('click', () => {actual.innerHTML += '1'; gestionarCero()});
botonDos.addEventListener('click', () => {actual.innerHTML += '2'; gestionarCero()});
botonTres.addEventListener('click', () => {actual.innerHTML += '3'; gestionarCero()});
botonCuatro.addEventListener('click', () => {actual.innerHTML += '4'; gestionarCero()});
botonCinco.addEventListener('click', () => {actual.innerHTML += '5'; gestionarCero()});
botonSeis.addEventListener('click', () => {actual.innerHTML += '6'; gestionarCero()});
botonSiete.addEventListener('click', () => {actual.innerHTML += '7'; gestionarCero()});
botonOcho.addEventListener('click', () => {actual.innerHTML += '8'; gestionarCero()});
botonNueve.addEventListener('click', () => {actual.innerHTML += '9'; gestionarCero()});
botonCero.addEventListener('click', () => {actual.innerHTML += '0'; gestionarCero()});
botonSuma.addEventListener('click', () => operar("suma"));
botonResta.addEventListener('click', () => operar("resta"));
botonDiv.addEventListener('click', () => operar("div"));
botonMul.addEventListener('click', () => operar("mult"));
botonDel.addEventListener('click', clickDel);
botonClear.addEventListener('click', clickClear)
botonIgual.addEventListener('click', clickIgual)

// variable para guardar funcion en cola que se ejecuta hasta que se seleccione otra operacion
let cola;

function gestionarCero() {
    let num = actual.innerHTML
    if (num.length > 0 && num[0] == '0') {
        actual.innerHTML = num.slice(1)
    } else if (num.length === 1 && num[0] === 0) {
        actual.innerHTML = '0';
    }
}

// se apacha una operacion y se llama la función que va a llamar o agregar a la cola

function operar(operacion) {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    //si no hay en cola, no hace nada y entra a la cola
    if ((cola === undefined || cola === '' || cola === 0) && valorResultado === 0) {
        resultado.innerHTML = valorActual;
    }
    if ((cola === undefined || cola === '' || cola === 0) && valorResultado !== 0) {
        cola = operacion;
    }
    //si ya hay en cola, se ejecuta la operacion en cola y la nueva es la siguiente
    else {
        calcular(cola)
        cola = operacion;
    }
}

function clickIgual () {
    let valorActual = parseInt(actual.innerHTML);
    if (cola === undefined || cola === '' || cola === 0) {
        resultado.innerHTML = valorActual;
        actual.innerHTML = '0';
    } else {
        calcular(cola)
        cola = undefined;
    }
}


function calcular(operacion) {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    if (operacion === 'suma') {
        resultado.innerHTML = valorActual + valorResultado;
    } else if (operacion === 'resta') {
        resultado.innerHTML = valorResultado - valorActual;
    } else if (operacion === 'mult') {
        resultado.innerHTML = valorResultado * valorActual;
    } else if (operacion === 'div') {
        resultado.innerHTML = valorResultado / valorActual;
    }
    actual.innerHTML = '0';
    return;
}

function clickDel() {
    let act = actual.innerHTML;
    if (act.length === 1 && act === '0') {
        return;
    } else if (act.length === 1 && act !== '0') {
        actual.innerHTML = '0';
        return;
    }
    if (act.length > 0) {
        actual.innerHTML = act.slice(0, -1);
        return;
    }
}

function clickClear() {
    actual.innerHTML = '0';
    resultado.innerHTML = '0';
}

Mousetrap.bind('1', () => {actual.innerHTML += '1'; gestionarCero()});
Mousetrap.bind('2', () => {actual.innerHTML += '2'; gestionarCero()});
Mousetrap.bind('3', () => {actual.innerHTML += '3'; gestionarCero()});
Mousetrap.bind('4', () => {actual.innerHTML += '4'; gestionarCero()});
Mousetrap.bind('5', () => {actual.innerHTML += '5'; gestionarCero()});
Mousetrap.bind('6', () => {actual.innerHTML += '6'; gestionarCero()});
Mousetrap.bind('7', () => {actual.innerHTML += '7'; gestionarCero()});
Mousetrap.bind('8', () => {actual.innerHTML += '8'; gestionarCero()});
Mousetrap.bind('9', () => {actual.innerHTML += '9'; gestionarCero()});
Mousetrap.bind('0', () => {actual.innerHTML += '0'; gestionarCero()});
Mousetrap.bind('+', () => operar("suma"));
Mousetrap.bind('-', () => operar("resta"));
Mousetrap.bind('*', () => operar("mult"));
Mousetrap.bind('/', () => operar("div"));
Mousetrap.bind('=', clickIgual);
Mousetrap.bind('return', clickIgual);
Mousetrap.bind('backspace', clickDel);
