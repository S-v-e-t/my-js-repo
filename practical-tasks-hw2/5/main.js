// Напиши скрипт, который проверяет произвольную строку
//   в переменной message и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.

const message = 'May the force be with you';
const arr = message.split(' ');

let longestWord = '';

for (let i = 0; i < arr.length; i += 1) {
  longestWord = longestWord.length > arr[i].length ? longestWord : arr[i];
}


console.log(longestWord); // 'force'


