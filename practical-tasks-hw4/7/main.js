/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает
* эти два массива и возвращает массив объектов со свойствами name и price.
*/

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const products = combine(names, prices);

// console.log(products); // массив объектов со свойствами name и price


const goodsNames = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const getProducts = (names, $) => {
  if (names.length !== $.length) return 'Error: length of arrays is no ===';
  const res = [];
  for (const i in names) {
    // {'Радар': 1000}
    // { ['Радар']: 1000}
    res.push({ [names[i]]: $[i] });
  }
  return res;
};
console.log(getProducts(goodsNames, prices)); // массив объектов со свойствами name и price
