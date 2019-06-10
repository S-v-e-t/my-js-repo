const x = prompt('Введите произвольное целое число');

if (x === null) {
  alert('Ну и ладно, пока!');
} else if (Number.isInteger(+x)) {
  alert('Спасибо!');
} else if (Number.isNaN(+x)) {
  alert('Необходимо было ввести целое число!');
}
