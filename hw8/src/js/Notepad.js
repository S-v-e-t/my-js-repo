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
    this._notes.push(note);
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

  static Priority = {
    //свойство не поддерживается редактором, но в хроме всё ок
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

}
