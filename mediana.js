function calcularMediaAritmetica(listica) {
    const sumaLista = listica.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / listica.length;

    return promedioLista;
} 

function calMediana() {
    const inputNumber = document.getElementById("input-number");
    const numberValue = inputNumber.value;

    let numeros = Array.from(numberValue.split(","), Number);

    const list = numeros.sort((a,b) => a - b);
    //console.log(list);
    
    const mitadLista = parseInt(list.length / 2);

    function esPar(numerito) {
        if ( numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(list.length)) {
        const elemento1 = list[mitadLista - 1];
        const elemento2 = list[mitadLista];

        const elemento = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = elemento;
        const result = document.getElementById("resultMediana");
        result.innerText = "La mediana es: " + mediana;  
    } else {
        mediana = list[mitadLista];  
        const result = document.getElementById("resultMediana");
        result.innerText = "La mediana es: " + mediana;  
    }
};

