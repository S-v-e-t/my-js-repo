const country = 'Напишите название страны в которую нужно доставить товар';

let message = prompt(country);

const cancel = 'Отменено пользователем!';
let credite = 100;
const noDelivery = 'В вашей стране доставка не доступна';

if (message === null) {
  message = cancel;
} else {
  const countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

  switch (countryName) {
    case 'Китай':
      credite = 100;

      message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;

      break;

    case 'Южная америка':
      credite = 250;

      message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;

      break;

    case 'Австралия':
      credite = 170;

      message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;

      break;

    case 'Индия':
      credite = 80;

      message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;

      break;

    case 'Ямайка':
      credite = 120;

      message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;

      break;

    default:
      message = noDelivery;
  }
}

alert(message);
