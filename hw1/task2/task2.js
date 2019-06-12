const credits = 23580;
const pricePerDroid = 3000;

const order = prompt('Введите количество дроидов, которое Вы желаете купить');

const totalPrice = order * pricePerDroid;
const balance = credits - totalPrice;

if (order === null) {
  alert('Отменено пользователем');
} else if (order <= 0) {
  alert('Некорректное число дроидов!');
} else if (Number.isNaN(+order)) {
  alert('Это не похоже на число. Введите корректное число дроидов!');
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(`Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`);
}
