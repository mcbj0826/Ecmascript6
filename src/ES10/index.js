//metodo flat profundidad

let array = [1,2,3, [1,2,3 [1,2,3]]]

console.log(array.flat(2))

// flat map 

let array = [1,2,3,4,5]

console.log(array.flatMap(value =>[value , value *2]));

//trimStart para eliminar espacios

let hello = '           hello world'
console.log(hello)
console.log(hello.trimStart())


// eliminar espacios al final del texto 

let hello = 'hello World        '
console.log(hello)
console.log(hello.trimEnd())

//Optional catch bin

try {

}catch {
    error
}

// convertir de arreglo a objetos con from entries.


let entries =[['name', 'Oscar'], ['age', 32]]
console.log(Object.fromEntries(entries))


//bver descripciones 

let mysymbol = 'My symbol'
let symbol = Symbol(mysymbol)
console.log(symbol.description)