/*Ejercicios Basicos JS Nivel 7
    21.Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado.Ejemplo: mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    22.Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array.Ejemplo: miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
    23.Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares.Ejemplo: miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
    */

//Soluciones:

//--------------------------------------------------------------------------------------------

//E21S1.Solucion Simple:
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 21:")

const arrayCuadrado = (arreglo) => {
     let cuadrados = arreglo.map(function(num){
        return num*num
    })
    console.log(`Array original ${arreglo}, array al cuadrado ${cuadrados}`)
}
arrayCuadrado([1,2,3,4])

//E21S2.Another solution with validatios

const devolverCuadrados = (arr=undefined) => {
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    for (let num of arr) {
        if(typeof num !== "number") return console.error('El arreglos solo puede contener numeros')
    }

    const newArr = arr.map(el => el*el)

    return console.log(`Array original ${arr}, array al cuadrado ${newArr}`)
}
devolverCuadrados([2,3,"x"])

//E21S2 Arrow function single
const array2 = (arreglo) => {

        let cuadrados = arreglo.map(num =>  num*num)
        
        console.log(cuadrados)
    }
    array2([2,4,5,12])

//--------------------------------------------------------------------------------------------

//E22S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 22:")

const minMax = (arreglo) => {
    let max = arreglo[0]
    let min = arreglo[0]
    arreglo.forEach(element => {
        if (element>max) max=element
        if (element<min) min=element
    });
    console.log(`En el arreglo: [${arreglo}] el valor minimo es: ${min} y el valor maximo es: ${max}`)
}
minMax([1,2,3,4,5])

//E22S2

const arrayMinMax = (arr = undefined) => {
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    for (let num of arr) {
        if(typeof num !== "number") return console.error('El arreglos solo puede contener numeros')
    }

    return console.info(`Arreglo Original [${arr}]\nValor mayor ${Math.max(...arr)},\nel valor menor ${Math.min(...arr)}`)
}
arrayMinMax([4,5,2,9])

//--------------------------------------------------------------------------------------------

//E23S1.Solución Simple
console.log("-----------------------------------------------------------------------------------")
console.log("Ejercicio 23:")

const parImpar = (arreglo) => {
    let pares=[]
    let impares =[]
    pares = arreglo.filter(num => num%2===0)
    impares = arreglo.filter(num => num%2===1)
    console.log(`Arreglo Original[${arreglo}], 
        Arreglo de Pares[${pares}], 
        Arreglo de impares[${impares}]`)
}
parImpar([1,2,3,4,5,6,7,8,9])

//E23S2 validations
const separarParesImpares = (arr = undefined) => {
    if (arr===undefined) return console.warn('No ingesaste un arreglo')
    if (!(arr instanceof Array)) return console.error('El valos que ingresaste no es un arreglo')
    if (arr.length===0) return console.error('No puedes ingresar un arreglo vacio')
    for (let num of arr) {
        if(typeof num !== "number") return console.error('El arreglos solo puede contener numeros')
    }

    return console.info({ //like a object
        pares:arr.filter(num => num%2 ===0),
        impares:arr.filter(num => num%2 ===1)
    })
}
separarParesImpares([11,12,21,22,44,53,67,72,81,84])