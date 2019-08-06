/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

(function addPagination(n) {
  const links = new Array(n).fill('').map((e, i) => ({
    href: `../d-${i + 1}/index.html`,
    isActive: false,
  }));

  function getCurrentPage(str) {
    const arr = str.split('/');
    return arr[arr.length - 2].slice(2) - 1;
  }
  //   console.log(document);
  //   console.log(getStr(document.URL));
  //   console.log((document.domain));
  const ul = document.createElement('ul');
  ul.classList.add('pagination');
  document.body.append(ul);

  function render(arr, root) {
    const current = getCurrentPage(document.URL);
    const parent = root.cloneNode(false);
    const list = arr.map((e, i) => {
      const li = document.createElement('li');
      li.classList.add('pagination-item');
      const a = document.createElement('a');
      a.classList.add('pagination-link');
      if (current === i) {
        a.classList.add('active');
      }
      a.href = e.href;
      a.textContent = i + 1;
      a.setAttribute('data-item', i);
      li.append(a);
      return li;
    });
    parent.append(...list);
    root.replaceWith(parent);
  }
  render(links, ul);
}(7));
