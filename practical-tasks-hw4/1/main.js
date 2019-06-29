/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/*
  Напиши скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - заменяет значение premium на false

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


// user.mood = 'happy';
// user.hobby = 'javascript';
// user.premium = false;

function addProps(prop, value, obj) {
  obj[prop] = value;
}
function changeValue(prop, value, obj) {
  obj[prop] = value;
}

addProps('mood', 'happy', user);

changeValue('hobby', 'javascript', user);
changeValue('premium', false, user);

const stringEntriesByEntries = (obj) => {
  let res = '{\n';
  const entries = Object.entries(obj);
  for (const item of entries) {
    res += `${item[0]}: ${typeof item[1] === 'string' ? `'${item[1]}'` : item[1]},\n`;
  }
  return `${res}}`;
};

console.log('user = ', stringEntriesByEntries(user));

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log('value: ', user[key]);
// }

// const entries = Object.entries(user);

// for (const entrie of entries) {
//   const key = entrie[0];
//   const value = entrie[1];

//   console.log(`${key}: ${value}`);
// }
