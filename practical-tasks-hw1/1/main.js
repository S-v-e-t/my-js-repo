const name = 'Генератор защитного поля';
let price = 1000;
price = 2000;
const info = `Выбран «${name}», цена за штуку ${price} кредитов`;


const test = 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов';
console.assert(info === test, 'Error in info');
console.log(info);
