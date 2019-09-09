const notes = {
  array: ["one", "two"],
  getAsyncArray() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.array);
      }, 100);
    });
  },
  getArray() {
    return this.array;
  },
  add(elem) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.array.push(elem);
        resolve(elem);
      }, 1500);
    });
  },
  delete(etem) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.array = this.array.filter(e => etem !== e);
        resolve(this.array);
      }, 800);
    });
  }
};

notes
  .add("three")
  .then(elem => console.log(elem))
  .then(() => notes.getAsyncArray())
  .then(data => console.log(data))
  .then(() => notes.delete("one"))
  .then(data => data)
  .then(() => notes.getAsyncArray())
  .then(data => console.log(data))
  .catch(err => console.log(err));
