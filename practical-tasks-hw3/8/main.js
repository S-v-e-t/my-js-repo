/* eslint-disable linebreak-style */
/*
  Напиши функцию filterFromArray(arr), которая
  объявляет 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Функция возвращает новый массив, который содержит только
  те элементы исходного массива, которые не совпадают
  ни с одним из числовых аргументов.
*/

// function filterFromArray(arr, ...numbers) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (arr.includes(numbers[i])) {
//       const index = arr.indexOf(numbers[i]);
//       arr.splice(index, 1);
//     }
//   }
//   return arr;
// }


// function filterFromArray(arr, ...numbers) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (arr.includes(numbers[i])) {
//       arr.splice(arr.indexOf(numbers[i]), 1);
//     }
//   }
//   return arr;
// }


const filterFromArray = (arr, ...numbers) => arr.filter(item => !numbers.includes(item));

// Вызовы функции для проверки
console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]


console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
