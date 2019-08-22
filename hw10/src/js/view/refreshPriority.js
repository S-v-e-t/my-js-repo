import renderNoteList from './renderNoteList';
import { notepad } from '../app';
import { refs } from '../utils/constant';

function refreshPriority() {
  refs.list.innerHTML = '';
  renderNoteList(refs.list, notepad.notes);
}

export default refreshPriority;
