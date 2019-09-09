// microtasks vs macrotasks



console.log('start');

setTimeout(() => console.log('setTimeout'), 0)


const promise = Promise.resolve('promise')
promise.then(data => console.log(data))


console.log('fin');