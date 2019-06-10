const name = 'Mango';
const date = '14/08/2137';
const roomType = 'люкс';
const message = `${name} прибывает на отдых ${date} в ${roomType}`;

// eslint-disable-next-line quotes
const test = `Mango прибывает на отдых 14/08/2137 в люкс`;
console.assert(message === test, 'Error in message');
console.log(message);
