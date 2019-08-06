/*
  Напишите скрипт для создания галлереи изображений.

  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// массив объектов const galleryItems в файле db.js

const ref = {
  gallery: document.querySelector('.gallery'),
};

function createElem(tag, className, url = null, alt = null) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (url) {
    element.src = url;
  }
  if (alt) {
    element.alt = alt;
  }
  return element;
}

function createItem({ url, alt }) {
  const li = createElem('li', 'gallery-item');
  const img = createElem('img', 'gallery-img', url, alt);
  li.append(img);
  return li;
}

function renderNoteList(ref, arr) {
  // клонируем без дочерних элементов
  const elem = ref.cloneNode(false);
  //  добавляем новые дочерние элементы
  elem.append(...arr.map(e => createItem(e)));
  // заменяем исходный элемент
  ref.replaceWith(elem);
}

renderNoteList(document.querySelector('.gallery'), galleryItems);
// renderNoteList(document.querySelector('.gallery'), galleryItems2);
