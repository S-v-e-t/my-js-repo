/* eslint-disable linebreak-style */
/*
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];

function addUniqueNumbers() {
  for (let i = 0; i < arguments.length; i += 1) {
    if (!uniqueNumbers.includes(arguments[i])) {
      uniqueNumbers.push(arguments[i]);
    }
  }
  return uniqueNumbers;
}


// unction addUniqueNumbers(...numbers) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (!uniqueNumbers.includes(numbers[i])) {
//       uniqueNumbers.push(numbers[i]);
//     }
//   }
//   return uniqueNumbers;
// }

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
