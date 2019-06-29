/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/


const countTotalSalary = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    sum += obj[key];
  }
  return sum;
};

const sum = obj => Object
  .keys(obj)
  .reduce((acc, key) => acc += obj[key], 0);
console.log('sum', sum({
  mango: 100,
  poly: 150,
  alfred: 80,
}));

// console.assert(
//   countTotalSalary({}) === 0,
//   'Error: sum for no properties',
// ); // 0

// console.assert(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }) === 330,
//   'Error: sum for 3 properties. !== 330',
// ); // 330


// Вызовы функции для проверки
console.log(
  countTotalSalary({}),
); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
