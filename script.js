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
let espaciovacio = null
console.log(usuario.apellido)
let algo
console.log(algo)

const noesnumero= NaN
const multiplication = 10* "hola"
console.log(multiplication)



const listaanimales = [ 
    "perro",
    "gato",
    "oso",
    "gallina"
]
    console.log("tamaño del array", listadeanimales.length
    )
    for(let i= 0; i < listadeanimales.length;i++){ 
        console.log(i)
        console.log(listadeanimales [i])
    }
for(let contador =0; contador ===10; contador=contador+1) {console.log(contador)
    console.log(listadeanimales[contador])
}




let numero = 1  
if (numero===10){
    console.log("numero es 10")
} else if(numero ===11) {
    console.log("numero es 11")
} else if (numero===12) {
    console.log("numero es 12")
} else{
    console.log("no es ni 10 ni 11 ni 12 ")
}

let texto= "c"
if (texto ==="a"//texto==="b"// texto==="c"){
    console.log("la condicion es verdadera")    
} else {
    console.log(el texto no es ni "a" ni "b")
}

let numero3 = 20
if (numero3> 0 && numero3 < 10){
    console.log("nuestro numero esta entre el 0 y el 10")
} else{
    console.log("nuestro numero no esta entre el 0 y el 10")
}

let contador= 0
while (contador< 5){
    console.log(contador)
    console.log(listaanimales[contador])

    contador++
}

function sumar (valor1,valor2){
    console.log ("parametro1:",valor1)
    console.log ("parametro1:",valor2)
    return resultado

    const sumar =()> {}


    console.log("esta funcion esta sumando")
    console.log("mostrar el resultado")
}
sumar(5,10)
sumar(20,40)

console.log("resultado de la suma",sumar(5,10))
