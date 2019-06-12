const ADMIN_PASSWORD = 'm4ng0h4ckz';
const message = prompt('Введите пароль администратора');

if (message === ADMIN_PASSWORD) {
  alert('Добро пожаловать!');
} else if (message === null) {
  alert('Была нажата отмена');
} else {
  message !== ADMIN_PASSWORD;

  alert('Доступ запрещен, неверный пароль!');
}
