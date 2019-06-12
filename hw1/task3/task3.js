// const country = 'Напишите название страны в которую нужно доставить товар';
// let message = prompt(country);
// const cancel = 'Отменено пользователем!';
// const noDelivery = 'В вашей стране доставка не доступна';
// if (message === null) {
//   message = cancel;
// } else {
//   const countryName = message;
//   switch (message) {
//     case 'китай':
//       const credite = 100;
//       message = `Доставка в ${countryName} будет стоить ${credite} кредитов`;
//       break;
//     case 'южная америка':
//       const credite1 = 250;
//       message = `Доставка в ${countryName} будет стоить ${credite1} кредитов`;
//       break;
//     case 'австралия':
//       const credite2 = 170;
//       message = `Доставка в ${countryName} будет стоить ${credite2} кредитов`;
//       break;
//     case 'индия':
//       const credite3 = 80;
//       message = `Доставка в ${countryName} будет стоить ${credite3} кредитов`;
//       break;
//     case 'ямайка':
//       const credite4 = 120;
//       message = `Доставка в ${countryName} будет стоить ${credite4} кредитов`;
//       break;
//     default:
//       message = noDelivery;
//   }
// }
// alert(message);

const message = prompt(
  'Пожалуйста, укажите куда доставить товар: Китай, Южная Америка, Австралия, Индия, Ямайка',
);

if (message === null) {
  alert('Отменено пользователем');
} else {
  const messageUser = message.toLowerCase();

  switch (messageUser) {
    case 'китай':
      alert('Доставка в Китай будет стоить 100 кредитов');
      break;
    case 'южная америка':
      alert('Доставка в Южную Америку будет стоить 250 кредитов');
      break;
    case 'австралия':
      alert('Доставка в Австралию будет стоить 170 кредитов');
      break;
    case 'индия':
      alert('Доставка в Индию будет стоить 80 кредитов');
      break;
    case 'ямайка':
      alert('Доставка на Ямайку будет стоить 120 кредитов');
      break;

    default:
      alert('В вашей стране доставка не доступна!');
  }
}
