console.log('--EXERCISE 4: IF AND ELSE')
//a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log('-Exercise 4.a')
var num = Math.random()
if (num >= 0.5)
console.log('The number is:',num ,'and its greater than or equal to 0,5')
else
console.log('The number is:',num ,'and its Lower than 0,5')
//b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//  “Bebe” si la edad es menor a 2 años; “Niño” si la edad es entre 2 y 12 años; “Adolescente” entre 13 y 19 años;
//  “Joven” entre 20 y 30 años; “Adulto” entre 31 y 60 años; “Adulto mayor” entre 61 y 75 años; “Anciano” si es mayor a
//  75 años.
console.log('-Exercise 4.b')
var Age = Math.floor(Math.random() * 100)
if(Age>0 && Age <2)
console.log('Bebe')
else if(Age>=2 && Age <=12)
console.log('Niño')
else if(Age>12 && Age <=19)
console.log('Adolescente')
else if(Age>19 && Age <=30)
console.log('Joven')
else if(Age>30 && Age <=60)
console.log('Adulto')
else if(Age>60 && Age <=75)
console.log('Adulto mayor')
else if(Age>75)
console.log('Anciano')
console.log(Age)