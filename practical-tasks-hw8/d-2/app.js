/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const ref = {
  list: document.querySelector('.list'),
};

// console.log(ref.list);

function setColor(elem) {
  elem.firstElementChild.style.color = 'red';
  elem.lastElementChild.style.color = 'blue';
}

setColor(ref.list);
