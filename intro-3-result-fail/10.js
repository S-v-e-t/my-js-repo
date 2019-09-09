// PROMISE THEN

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const pending = Math.random() > 0.5;
    pending ? resolve("Ukraine") : reject("while getting location");
  }, 500);
});

promise
  .then(
    data => `User location is ${data}`,
  )
  .then(data => `${data}. Today is ${new Date().toLocaleDateString()}`)
  .then(data => console.log(data))
  .catch(err => console.log(err));
