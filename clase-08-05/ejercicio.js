let num1 = Number(prompt('Ingrese el 1er numero'));
let num2 = parseInt(prompt('Ingrese el 2er numero'));

if(Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log('debes ingresar un numero');
}else if(num1 > num2){
    console.log(num1 + num2);
}else if(num1 < num2) {
    console.log(num2 - num1);
}else {
    console.log(Math.pow(num1, 2));
    console.log(mun1 * num2);
}