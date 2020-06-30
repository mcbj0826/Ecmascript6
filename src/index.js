//Object.entries devolver el objeto de una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//Object Values devuelve los valores de un objeto a un arreglo.

const values = Object.values(data)
console.log(values)
console.log(values.length)

//Padstart

const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12, '-----'))
console.log('food'.padEnd(12, ' -----'))

