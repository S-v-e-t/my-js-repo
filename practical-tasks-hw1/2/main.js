const day = 17;
const month = 10;
const year = 2048;
const date = `Доброе утро, сегодня ${day}\\${month}\\${year}, за бортом отличная погода!`;

const test = 'Доброе утро, сегодня 17\\10\\2048, за бортом отличная погода!';
console.assert(date === test, 'Error in date');
console.log(date);
