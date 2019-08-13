/* eslint-disable no-undef */
refs.search.addEventListener('input', filterNote);

function filterNote(event) {
  const filteredNote = notepad.filterNotesByQuery(event.target.value);

  renderNoteList(refs.list, filteredNote);
}
