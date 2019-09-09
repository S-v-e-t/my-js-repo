/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
// import { __values } from 'tslib';
// import { PRIORITY_TYPES } from '../utils/constants';
import Storage from '../localstorage';
import { notepad } from '../mvc/model';

class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    return this._notes.find(e => e.id === id);
  }

  saveNote(note) {
    if (note.priority) {
      this._notes.push(note);
      Storage.save('Notes', notepad.notes);
    } else {
      note.priority = 0;
      this._notes.push(note);
      Storage.save('Notes', notepad.notes);
    }
    return note;
  }

  deleteNote(id) {
    this.notes.splice(this.notes.findIndex(elem => elem.id === id), 1);
  }

  updateNoteContent(id, updatedContent) {
    Object.assign(this.findNoteById(id), updatedContent);
  }

  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    const newArr = [];
    for (const obj of this._notes) {
      const titleLower = obj.title.toLowerCase();
      const bodyLower = obj.body.toLowerCase();
      if (titleLower.includes(query) || bodyLower.includes(query)) {
        newArr.push(obj);
      }
    }
    return newArr;
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}

export default Notepad;


// const notes = {
//   array: ['one', 'two'],
//   getAsyncArray() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(this.array);
//       }, 100);
//     });
//   },
//   getArray() {
//     return this.array;
//   },
//   add(elem) {
//     //  синхронно
//     //  this.array.push(elem)
//     //  return elem;

//     // асинхронно
//     // setTimeout(() => this.array.push(elem), 500);
//     // return elem; // проблема асинхронности - возврат результата

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         this.array.push(elem);
//         resolve(elem);
//       }, 500);
//     });
//   },
//   delete(etem) {
//     // this.array = this.array.filter(e => etem !== e);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         this.array = this.array.filter(e => etem !== e);
//         resolve(this.array);
//       }, 800);
//     });
//   },
// };

// notes
//   .add('three')
//   .then(elem => console.log(elem))
//   .then(data => console.log(notes.getArray()))
//   .catch(err => console.log(err));
// notes
//   .getAsyncArray()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// notes
//   .delete('one')
//   .then(data => console.log(notes.getArray()))
//   .catch(err => console.log(err));
