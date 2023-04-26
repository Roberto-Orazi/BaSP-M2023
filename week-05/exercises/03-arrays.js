console.log('--EXERCISE 3: ARRAYS')
//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
//"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('-Exercise 3.a')
var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(mes[4],mes[5],mes[6],mes[7],mes[8],mes[9],mes[10])
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('-Exercise 3.b')
console.log(mes.sort())
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('-Exercise 3.c')
var mesesc = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mesesc.unshift('nuevoprimero')
mesesc.push('nuevoultimo')
console.log(mesesc);
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('-Exercise 3.d')
var mesesd = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mesesd.shift()
mesesd.pop()
console.log(mesesd);
//e. Invertir el orden del array (utilizar reverse).
console.log('-Exercise 3.e')
var mesese = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(mesese.reverse())
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('Exercise 3.f')
var mesesf = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(mesesf.join('-'))
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('-Exercise 3.g')
var mesesg = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
copiaMesesG = mesesg.slice(4,11)
console.log(copiaMesesG)
