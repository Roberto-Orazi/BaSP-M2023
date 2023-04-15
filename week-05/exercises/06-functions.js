console.log('--EXERCISE 6: FUNCTIONS')
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
console.log('-Exercise 6.a')
num1 = Math.floor(Math.random() * 100)
num2 = Math.floor(Math.random() * 100)
function suma(num1,num2){
    return num1 + num2    
}
console.log(suma(num1,num2))
//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log('-Exercise 6.b')
num3 = 'a'
num4 = 10
function suma2(num3,num4){
    if (isNaN(num3) || isNaN(num4)) {
        alert('Uno de los parametros ingresados no es un numero');
        return NaN;
      }
    return num3 + num4    
}
console.log(suma2(num3,num4))
//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('-Exercise 6.c')
function validateInteger(num){
    return Number.isInteger(num)
}
var num5 = 0.5
var num6 = 1
console.log(validateInteger(num5))
console.log(validateInteger(num6))
//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).
console.log('-Exercise 6.d')
var num7 = Math.floor(Math.random() * 100) * 0.33
var num8 = Math.floor(Math.random() * 100)
function suma3(num7, num8) {
  if (!validateInteger(num7) || !validateInteger(num8)) {
    alert('Los parametros ingresados Tienen que ser enteros')
    num7 = Math.round(num7)
    num8 = Math.round(num8)
  } else {
    num7 = parseInt(num7)
    num8 = parseInt(num8)
  }
  return num7 + num8
}
console.log(suma3(num7,num8))
//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.
console.log('-Exercise 6.e')
var num9 = Math.floor(Math.random() * 100) * 0.33
var num10 = Math.floor(Math.random() * 100)
function validarEnteros(num, num0) {
  if (!validateInteger(num) || !validateInteger(num0)) {
    alert('Los parametros ingresados Tienen que ser enteros')
    num = Math.round(num)
    num0 = Math.round(num0)
  }
  return [num, num0]
}
function suma4(num, num0) {
  var numValidado = validarEnteros(num, num0)
  return numValidado[0] + numValidado[1]
}
console.log(suma4(num9, num10))