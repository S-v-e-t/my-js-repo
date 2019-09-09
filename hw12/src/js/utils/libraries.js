import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import { NOTIFICATION_MESSAGES } from './constants';
// Create an instance of Notyf
const notyf = new Notyf();

MicroModal.init();

// id
// MicroModal.show('note-editor-modal'); // [1]
// MicroModal.close('note-editor-modal');   //[2]
const closeEditor = () => {
  MicroModal.close('note-editor-modal');
};

const openEditor = () => {
  MicroModal.show('note-editor-modal');
};

// notyf.success(message);
// notyf.error(message);
const {
  NOTE_DELETED_SUCCESS,
  NOTE_ADDED_SUCCESS,
  NOTE_SAVE_SUCCESS,
  EDITOR_FIELDS_EMPTY,
} = NOTIFICATION_MESSAGES;
const notificationDeleted = (msg) => {
  const message = msg || NOTE_DELETED_SUCCESS;
  notyf.success(message);
};
const notificationAdded = (msg) => {
  const message = msg || NOTE_ADDED_SUCCESS;
  notyf.success(message);
};
const notificationSave = (msg) => {
  const message = msg || NOTE_SAVE_SUCCESS;
  notyf.success(message);
};
const notificationError = (msg) => {
  const message = msg || EDITOR_FIELDS_EMPTY;
  notyf.success(message);
};

export {
  closeEditor,
  openEditor,
  notificationAdded,
  notificationDeleted,
  notificationError,
  notificationSave,
};
