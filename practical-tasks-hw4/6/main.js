/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];


const getAllPropValues = (arr, prop) => {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  const values = [];
  for (const key of arr) {
    if (prop in key) {
      values.push(key[prop]);
    }
  }
  return values;
};


  // Вызовы функции для проверки
// const resName = getAllPropValues(users, 'name');
// console.assert(
//   resName.length === 3
//   && resName[0] === 'Poly'
//   && resName[1] === 'Mango'
//   && resName[2] === 'Ajax',
//   'Error with prop "name"',
// ); // ['Poly', 'Mango', 'Ajax']

// const resMood = getAllPropValues(users, 'mood');
// console.assert(
//   resMood.length === 3
//   && resMood[0] === 'happy'
//   && resMood[1] === 'blissful'
//   && resMood[2] === 'tired',
//   'Error with prop "name"',
// );// ['happy', 'blissful', 'tired']

// const resActive = getAllPropValues(users, 'active');
// console.assert(
//   resActive.length === 0
//   && Array.isArray(resActive),
//   'Error: property that is not in the object',
// ); // []

// const resEmptyArray = getAllPropValues([], '');
// console.assert(
//   resEmptyArray.length === 0
//   && Array.isArray(resEmptyArray),
//   'Error: empty array',
// ); // []


// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name'),
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood'),
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active'),
); // []
