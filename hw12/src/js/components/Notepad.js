/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
// import { __values } from 'tslib';
// import { PRIORITY_TYPES } from '../utils/constants';
import storage from '../storage';
import { notepad } from '../mvc/model';
import { refreshList } from '../mvc/view';


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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes.push(note);
        storage.save('key-note', this._notes);
        refreshList();
        resolve(note);
      }, 200);
    });
  }


  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._notes = this._notes.filter(el => el.id !== id);
        storage.save('key-note', this._notes);
        resolve(this._notes);
      }, 500);
    });
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


