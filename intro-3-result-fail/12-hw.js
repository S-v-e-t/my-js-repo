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
    //  синхронно
    //  this.array.push(elem)
    //  return elem;

    // асинхронно
    // setTimeout(() => this.array.push(elem), 500);
    // return elem; // проблема асинхронности - возврат результата

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.array.push(elem);
        resolve(elem);
      }, 500);
    });
  },
  delete(etem) {
    // this.array = this.array.filter(e => etem !== e);
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
  .then(data => console.log(notes.getArray()))
  .catch(err => console.log(err));
notes
  .getAsyncArray()
  .then(data => console.log(data))
  .catch(err => console.log(err));
notes
  .delete('one')
  .then(data => console.log(notes.getArray()))
  .catch(err => console.log(err));
