console.log("hola mundo")
console.log("aqui podemos escribir cualquier cosa")
console.log("adios")
console.log("no hay auto completado")
console.log("12345")
console.log("-1.123")

// tipos de datos
let nombre = "jhon"
console.log("nombre")
nombre = "alex"
console.log("nombre")

const pi = 3.1416
console.log("pi")

var loquesea = "hola"

let numero1 = 7
let numero2 = 9
let resultado = numero1 + numero2
console.log("resultado:", resultado, "algo")

// strings- texto
const ciudad = "bogota"
const pais = "colombia"
console.log(ciudad, pais)

//lenguaje debilmente tipado
//int. float - numeros 
const suma = 5
const edad = 20.5
const numeronegativo = "-10"
console.log("suma", 5 + "5")
console.log(suma + edad + numeronegativo)

//booleandos - booll - verdadero o falso
let esverde = true
let esmorado = false
// estructuras de datos
// array- vectores- listas
let listadenumeros = [20, -55, 100]
console.log(listadenumeros)

// ver un elemento de lista
console.log(listadenumeros[0])
console.log(listadenumeros[1])
console.log(listadenumeros[2])

let listaciudades = ["bogota", "medellin", "cali"]
console.log(listaciudades)

let listadelistas = [listadenumeros, listaciudades]
console.log(listadelistas)

// acceder al dato "medellin"
console.log(listadelistas[1][1])

// json (javascript object notation)-objetos
// clave - valor

let usuario = { nombre: "alex", edad: 23, ciudad: "bogota", ubicacion:{ latitud: 1.5356564543, longitud: -2.3432353}}
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.ubicacion.latitud)
