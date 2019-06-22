/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
//  Напиши функцию findLargestNumber(numbers),
//   которая получает массив чисел numbers, и возвращает
//   самое большое число в массиве.


// function findLargestNumber(numbers) {
//   return Math.max(...numbers);
// }

findLargestNumber = numbers => Math.max(...numbers);

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3]),
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5]),
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74]),
); // 128
