const correctPassword = 'jqueryismyjam';
const userPassword = prompt('Введите пароль доступа');

if (userPassword === correctPassword) {
  alert('Доступ в секретный бункер разрешен!');
} else if (userPassword === null) {
  alert('Была нажата отмена');
} else if (userPassword !== correctPassword) {
  alert('Неверный пароль, активирована система защиты!');
}
