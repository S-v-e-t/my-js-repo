/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
// import refreshList from '../mvc/view';
import * as api from '../services/api';

class Notepad {
  constructor() {
    this._notes = [];
  }

  getSyncNotes() {
    return this._notes;
  }

  getNotes() {
    return api.getNotes().then((notes) => {
      this._notes = notes;
      return this._notes;
    });
  }

  findNoteById(id) {
    return this._notes.find(e => e.id === id);
  }

  saveNote(note) {
    return api.saveNote(note).then((savedNote) => {
      this._notes.push(savedNote);
      return savedNote;
    });
  }

  deleteNote(id) {
    return api.delNote(id).then(() => {
      this._notes = this._notes.filter(el => el.id !== id);
    });
  }

  updateNoteContent(id, updatedContent) {
    return api.updateNote(id, updatedContent).then(() => {
      Object.assign(this.findNoteById(id), updatedContent);
      return (this);
    });
  }

  updateNotePriority(id, priority) {
    this.findNoteById(id).priority = priority;
  }

  filterNotesByQuery(query) {
    return this._notes.filter(note => note.body.toLowerCase().includes(query.toLowerCase()));
  }

  filterNotesByPriority(priority) {
    return this._notes.filter(e => e.priority === priority);
  }
}

export default Notepad;
