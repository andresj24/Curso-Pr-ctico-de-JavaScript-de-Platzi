//código del cuadrado

console.group("cuadrados");

/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return  lado * 4;
}

//console.log("el perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("el área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//código del triangulo

console.group("triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("la altura del triángulo mide: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


//console.log("el perímetro del triángulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//console.log("el área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//código del circulo

console.group("círculo");

function diametroCirculo(radio){
    return radio * 2;
}

const pi = Math.PI;
//console.log("el valor de pi es: " + pi);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd();

//Aqui se interactua con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrada() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function validarTriangulo(ladoA, ladoB, ladoBase) {
    if(ladoA == ladoB){
        
    }
}