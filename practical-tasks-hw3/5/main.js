/* eslint-disable linebreak-style */
//   Напиши фукнцию findLongestWord(str), которая принимает
//   параметром произвольную строку и возвращает самое длинное слово в этой строке.

//   Важное условие - в строке могут быть только пробелы, символы букв и цифр!
// */

function findLongestWord(str) {
  const arr = str.split(' ');
  // eslint-disable-next-line linebreak-style
  let longestWord = '';

  for (let i = 0; i < arr.length; i += 1) {
    longestWord = longestWord.length > arr[i].length ? longestWord : arr[i];
  }
  return longestWord;
}

// Вызовы функции для проверки
console.log(
  findLongestWord('The quick brown fox jumped over the lazy dog'),
); // 'jumped'

console.log(
  findLongestWord('Google do a roll'),
); // 'Google'

console.log(
  findLongestWord('May the force be with you'),
); // 'force'
