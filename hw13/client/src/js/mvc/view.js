import template from '../templates/note.hbs'; // импортируем новый темплейт
// import { notepad } from './model';
import refs from '../utils/refs';

// const refreshList = (data) => {
//   const notes = data || notepad.notes;

//   const htmlNotesList = notes.map(note => template(note)).join('\n');
//   refs.list.innerHTML = '';
//   refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
// };


const refreshList = (notes = []) => {
  const htmlNotesList = notes.map(note => template(note)).join('\n');
  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
};

refreshList();

export { refreshList };
