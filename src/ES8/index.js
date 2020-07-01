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

// promesas con Async y Await.

const helloWorld =() => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Hello World'), 3000)
            : reject(new Error('test error'))

    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

//

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    }
    catch{
        console.log(error)
    }
}

anotherFunction()