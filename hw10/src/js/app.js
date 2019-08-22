import Notepad from './Notepad';
import renderNoteList from './view/renderNoteList';
import { initialNotes } from './db';
import { refs } from './utils/constant';
import deleteNote from './controller/deleteNote';
import editNote from './controller/editNote';
import changePriority from './controller/changePriority';
import filterNote from './controller/filterNote';
import addNote from './controller/addNote';
const notepad = new Notepad(initialNotes);
renderNoteList(refs.list, notepad.notes);

refs.form.addEventListener('submit', addNote);
refs.list.addEventListener('click', changePriority);
refs.list.addEventListener('click', deleteNote);
refs.search.addEventListener('input', filterNote);
refs.list.addEventListener('click', editNote);

export { notepad };