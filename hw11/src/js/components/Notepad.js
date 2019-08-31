// import { PRIORITY_TYPES } from './utils/constants';

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
    } else {
      note.priority = 0;
      this._notes.push(note);
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
