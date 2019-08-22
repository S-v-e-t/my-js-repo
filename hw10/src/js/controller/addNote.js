/* eslint-disable no-alert */
/* eslint-disable no-undef */

import shortid from 'shortid';
import { notepad } from '../app';
import { refs, PRIORITY_TYPES } from '../utils/constant';
import addListItem from '../view/addListItem';
import createListItem from '../view/createListItem';
// refs.form.addEventListener('submit', addNote);

function addNote(event) {
  event.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    id: shortid.generate(),
    title,
    body,
  };

  notepad.saveNote(note);
  // console.log(notepad.notes);
  event.target.reset();
  addListItem(refs.list, note);
}

export default addNote;