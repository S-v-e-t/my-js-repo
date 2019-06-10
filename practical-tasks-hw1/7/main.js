const value = Number.parseInt(Math.random() * 100);

const type = value % 2 === 0 ? 'even' : 'odd';

console.log(`${value} is ${type}`);
