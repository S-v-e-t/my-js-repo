/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email.

  В prototype функции-конструктора добавь метод getInfo(),
  который выводит в консоль значения полей login и email.

  Обрати внимание, метод всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, выведи их в консоль.
*/

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function ()
{ console.log(`login: ${this.login}, email: ${this.email}`);
};


const account = new Account('Mangozedog', 'mango@dog.woof');
const user = new Account('Sosa', 'hose@sosa.cap');
const userTwo = new Account('Edmar', 'edmar@delaserda.com');
const userTree = new Account('Sasha', 'goalkeeper@gorianov.star');

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
user.getInfo();
userTwo.getInfo();
userTree.getInfo();
