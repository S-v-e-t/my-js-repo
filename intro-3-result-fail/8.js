const promise = new Promise((resolve, reject) => {
  reject("Error: while getting location");
  //  reject(new Error("Error: while getting location"))
});

console.error(promise);
