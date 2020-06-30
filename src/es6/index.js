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
