// Напиши функцию renderNoteList(listRef, notes),
// которая получает ссылку на DOM-узел списка ul.note-list и массив объектов заметок,
// вызывает createListItem(note) столько раз, сколько объектов в массиве,
// после чего добавляет все карточки в список.

function renderNoteList(listRef, notes) {
  // клонируем без дочерних элементов
  const elem = listRef.cloneNode(false);
  // console.log(elem);
  // добавляем новые дочерние элементы
  elem.append(...notes.map(e => createListItem(e)));
  // заменяем исходный элемент
  listRef.replaceWith(elem);
}
