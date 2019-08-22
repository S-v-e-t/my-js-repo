/* eslint-disable no-undef */
// refs.search.addEventListener('input', filterNote);
import { notepad } from '../app';
import renderNoteList from '../view/renderNoteList';
import { refs } from '../utils/constant';

function filterNote(event) {
  const filteredNote = notepad.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filteredNote);
};

export default filterNote;
