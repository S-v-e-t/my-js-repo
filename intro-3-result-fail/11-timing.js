// Кто придет первым?

console.log("start");

setTimeout(() => console.log("setTimeout"), 0);

const promise = new Promise((r, e) => {
  r("promise");
});

const promiseAsync = new Promise((r, e) => {
  setTimeout(() => {
    r("promise + setTimeout");
  }, 0);
});

promise.then(d => console.log(d)).catch(err => console.log(err));
promiseAsync.then(d => console.log(d)).catch(err => console.log(err));

console.log("fin");
