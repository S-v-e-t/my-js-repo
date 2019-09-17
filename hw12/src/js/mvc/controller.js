import shortid from 'shortid';

import { PRIORITY_TYPES } from '../utils/constants';
import refs from '../utils/refs';
import { notepad } from './model';
import { refreshList } from './view';
import {
  closeEditor,
  openEditor,
  notificationAdded,
  notificationDeleted,
  notificationError,
  notificationSave,
} from '../utils/libraries';

const state = {
  note: null,
};

refs.openEditor.addEventListener('click', openModalEditor);
refs.editorSave.addEventListener('click', saveData);
refs.list.addEventListener('click', deleteData);
refs.list.addEventListener('click', editeData);
refs.search.addEventListener('input', filterByText);
refs.search.addEventListener('blur', resetSearch);

function openModalEditor(e) {
  e.preventDefault();
  openEditor();
}

function reset() {
  refs.title.value = '';
  refs.body.value = '';
}

function checkEmpty() {
  const title = refs.title.value.trim() || '';
  const body = refs.body.value.trim() || '';
  if (title.length === 0 || body.length === 0) {
    notificationError();
    return true;
  }
  return false;
}

function saveData(e) {
  e.preventDefault();
  const title = refs.title.value;
  const body = refs.body.value;
  if (checkEmpty()) {
    return;
  }
  if (!state.note) {
    const id = shortid.generate();
    const priority = PRIORITY_TYPES.LOW;
    notepad.saveNote({
      id, title, body, priority,
    });
    notificationAdded();
  }
  if (state.note) {
    const { id } = state.note;
    state.note.title = title;
    state.note.body = body;
    notepad.updateNoteContent(id, { title, body }).then(notificationSave);
  }
  state.note = null;
  reset();
  closeEditor();
}

function deleteData({ target }) {
  state.note = null;
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset; //-
    li.remove();
    notepad.deleteNote(id);
    notificationDeleted();
  }
}

function editeData({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'edit-note') {
    const li = target.closest('.note-list__item');
    const { id } = li.dataset;
    const note = notepad.findNoteById(id);
    const { title, body } = note;
    refs.title.value = title;
    refs.body.value = body;
    state.note = note;
    openEditor();
  }
}

function filterByText(e) {
  e.preventDefault();
  const { value } = e.target;
  const filtered = notepad.filterNotesByQuery(value);
  refreshList(filtered);
}

function resetSearch(e) {
  e.preventDefault();
  refs.search.parentNode.reset();
}
