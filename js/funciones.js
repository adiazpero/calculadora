var num1 = '';
var num2 = '';
var signo = '';



function capturarNumero(numero) {
    document.getElementById('display').innerHTML += numero;
}

function capturarOperacion(operacion) {
    num1 = parseFloat(document.getElementById('display').innerHTML);
    document.getElementById('display').innerHTML = '';
    signo = operacion;
    console.log(signo)
}

function calcularResultado() {
    num2 = parseFloat(document.getElementById('display').innerHTML);
    document.getElementById('display').innerHTML = '';
    document.getElementById('display').innerHTML = operacion(num1, num2);

}

function operacion(a, b) {
    switch (signo) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '%':
            return b / a;
            break;
        default:
            return 'error';
    }

}


function operacionEspecial(simbolo) {
    num1 = parseFloat(document.getElementById('display').innerHTML);
    signo = simbolo;
    document.getElementById('display').innerHTML = calcularOperacionEspecial();
}

function calcularOperacionEspecial() {
    switch (signo) {
        case '1/':
            return 1 / num1;
        case 'raiz':
            return Math.sqrt(num1);
        case 'cuadrado':
            return num1 * num1;

    }
}

function resetCalculadora() {
    num1 = '';
    num2 = '';
    signo = '';
    document.getElementById('display').innerHTML = '';
}