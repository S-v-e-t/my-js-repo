// Есть массив имен пользователей
// Используя методы массива, последовательно выполнить указанные операции


const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
// users.splice(0, 1);  1-й способ
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// users.length = 2;     -1-й способ
// users.splice(2, 1);   -2-й способ
// users.splice(2); //     -3-й способ
users.pop(); // 4-й способ
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift('Lux');
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi');
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
const userToDelete = users.splice(2, 1); // 1-способ

console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = 'Jay';
users.splice(2, 0, 'Kong'); // 1-способ


console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]


// как сделать два последних задания, обращаясь к переменной а не индексу?
