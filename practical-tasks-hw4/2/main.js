/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};


// const best = (obj) => {
//   const entries = Object.entries(obj);
//   // console.log(entries);
//   let [name, tasks] = ['', 0];
//   for (const value of entries) {
//     // console.log(value);
//     [name, tasks] = value[1] > tasks
//       ? [value[0], value[1]]
//       : [name, tasks];
//   }
//   return name;
// };

const getNameWithTheBestTfasks = (obj) => {
  const keys = Object.keys(obj); // ['ann', 'david', ...]
  const max = 0;
  let name = '';
  for (const key of keys) {
  // ann        29  >  0 ?   ann  : ''
  // ann        35  >  29 ? david : ann
    name = obj[key] > max ? key : name;
  }
  return name;
};

console.log('Username with the best number of tasks is', getNameWithTheBestTfasks(tasksCompleted));
