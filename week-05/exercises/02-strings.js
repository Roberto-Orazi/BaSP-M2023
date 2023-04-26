console.log('--EXERCISE 2: STRINGS')
//a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
//toUpperCase).
console.log('-Exercise 2.a')
var a = 'mayusculas'
console.log(a.toUpperCase())
//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
//caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.b')
var b = 'mayusculas'
var c = b.substring(0, 5)
console.log(c)
//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
//guardando el resultado en una nueva variable (utilizar substring).
console.log('-Exercise 2.c')
var d = 'mayusculas'
var e = d.substring(7,10)
console.log(e)
//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
//mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
//toLowerCase y el operador +).
console.log('-Exercise 2.d')
var f = 'mayusculas'
var g = f.substring(0,1)
var h = f.substring(1,10)
console.log(g.toUpperCase() + h)
//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
//primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('-Exercise 2.e')
var i = 'pala bra'
var j = ' '
var k = i.indexOf(j)
console.log(k)
//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
//operador +).
console.log('-Exercise 2.f')
var m = 'minusculas mayusculas'
var n = m.substring(0,1)
var o = m.substring(1,10)
var p = m.substring(11,12)
var q = m.substring(12,21)
console.log(n.toUpperCase() + o + ' ' + p.toUpperCase() + q)

