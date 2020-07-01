const obj = {
    name : 'Oscar',
    age : '32',
    country: 'MX'
}
//Operador de reposo
let { country, ...all} = obj
console.log(all)

const obj = {
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

//Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject (new Error('Test Error'))
    })
}

helloWorld()
    .then (response => console.log (response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))


// Promise Finally con settimeout

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Hello World'),3000)
            : reject (new Error('Test Error'))
    })
}

helloWorld()
    .then (response => console.log (response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

// para manejo de fechas.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)