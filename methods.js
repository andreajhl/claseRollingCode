let opcion  = prompt(`Calculadora.

1. sumar
2. restar
3. multiplicar
4. exponente`
);

if(opcion == 1) {
    let num1 = prompt('ingrese numero 1');
    let num2 = prompt('ingrese numero 2');

    if(num1.length !== 0 && num2 > 0) {
        let suma = Number(num1) + Number(num2);
        console.log(suma);
    }else {
        console.log('tienes que ingresar numeros')
    }

} else if(opcion == 2) {
    let num1 = prompt('ingrese numero 1');
    let num2 = prompt('ingrese numero 2');

    if(num1.length !== 0 && num2 > 0) {
        let resta = Number(num1) - Number(num2);
        console.log(resta);
    }else {
        console.log('tienes que ingresar numeros')
    }

}else if(opcion == 3) {
    let num1 = prompt('ingrese numero 1');
    let num2 = prompt('ingrese numero 2');

    if(num1.length !== 0 && num2 > 0) {
        let multiplicacion = Number(num1) * Number(num2);
        console.log(multiplicacion);
    }else {
        console.log('tienes que ingresar numeros')
    }

}else if(opcion == 4) {
    let num1 = prompt('ingrese numero 1');
    let num2 = prompt('ingrese numero 2');

    if(num1.length !== 0 && num2 > 0) {
        let exponencial = Number(num1) ** Number(num2);
        console.log(exponencial);
    }else {
        console.log('tienes que ingresar numeros')
    }
}

