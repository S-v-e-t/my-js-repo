
// STATIC methods vs OBJECT methods
// STATIC no new !!!!!
// const promiseCent =  new Promise.resolve('100')

const promiseCent =  Promise.resolve(100)

// deprecated  in the future
const promiseZero =  Promise.reject(0)

console.log(promiseCent);
console.log(promiseZero);