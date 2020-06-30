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

// Objeto Mejorada ES6

let name = 'Oscar '
let age = 32

obj2= {name, age }

//sin ES6 (ES5)
obj = { name: name, age:age }

console.log(obj2)

//Arrow Function

const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]

//sin ES6

let listOfNames = names.map(function(item){
    console.log(item.name)
})

//COn ES6

let listOfNames2 = names.map(item => console.log(item.name))

//2 forma

const listOfNames3 = (name, age, country) => {
    // Aqui va el Código
}

// 3forma

const listOfNames4 = name =>{
   // ... Awui va el código
}

// 4 forma

const square = num => num * num


//Promesas para manejar el Asyncronismo

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if(true) {
            resolve ('Hey')
        }else {
            reject ('Ups!!')

        }
    })
}

helloPromise()
    .then (response => console.log(response))
    .then (() => console.log('hola'))
    .catch(error => console.log(error))






