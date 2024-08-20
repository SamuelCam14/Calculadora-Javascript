const numeros = [];
let operador = null;

function agregar(valor) {
    document.querySelector('.display').value += valor;
}

function limpiar() {
    document.querySelector('.display').value = '';
}

function sumar() {
    numeros.push(parseFloat(document.querySelector('.display').value));
    limpiar();
    operador = '+';
}

function restar() {
    numeros.push(parseFloat(document.querySelector('.display').value));
    limpiar();
    operador = '-';
}

function multiplicar() {
    numeros.push(parseFloat(document.querySelector('.display').value));
    limpiar();
    operador = '*';
}

function dividir() {
    numeros.push(parseFloat(document.querySelector('.display').value));
    limpiar();
    operador = '/';
}

function calcular() {
    numeros.push(parseFloat(document.querySelector('.display').value));
    limpiar();

    let resultado = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        switch (operador) {
            case '+':
                resultado += numeros[i];
                break;
            case '-':
                resultado -= numeros[i];
                break;
            case '*':
                resultado *= numeros[i];
                break;
            case '/':
                resultado /= numeros[i];
                break;
        }
    }

    document.querySelector('.display').value = resultado;
    numeros.length = 0;
    operador = null;
}