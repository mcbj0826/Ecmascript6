// Antes de ES6

function  newFunction(name, age, country) {
    var name =  name  || 'oscar'
    var age = age || 32 
    var country = country || 'MX'
    console.log(name, age , country)

}

// Con ES6

function newFunction2 ( name = 'oscar' , age = 32 , country= 'Mx'){
    console.log(name, age, country);
}

newFunction2()
newFunction2('Ricardo', '23', 'CO')

//Template literals

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' '+world
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// Sin multilinea en los strings  Antes de Es6

let lorem = 'Hola quiero escribir una frase pica que queremos separar. \n'
+"Otra frase epica que necesitamos."

//Multilinea en los strings con ES6

let lorem2 = `Otra frase epica que necesitamos 
ahora es otra frase epica`

console.log(lorem)
console.log(lorem2)

//Sin Es6

let person = {
    'name' : 'Oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age)

//Con Es6

let {name , age, country }= person

console.log ( name, age , country)

//Unir arreglos en un solo elemento. 

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria','Yesica', 'Camila']


//operador de propagación ... agregando otros elementos.
let education = ['David', ...team1 , ...team2 ]

console.log(education)

//Variables antes  de ES6 (Var)  con ES6 (Let)

{
    var globalVar = 'Global Var'

}

{
    let globalLet = 'Global Let'
    console.log(globalLet)

}

console.log(globalVar)

//Con el tipo de dato const la variable no se puede reasignar a 
// Diferencia de como se hacia con Var

const a = 'b'
a = 'a'

console.log (a)

