const total = 100;
const ordered = 50;

if (ordered > total) {
  alert('На складе недостаточно товoаров!');
} else if (ordered === total) {
  alert('Вы забираете весь товар cо склада!');
} else if (ordered < total) { alert('Заказ оформлен, с вами свяжется менеджер'); }
