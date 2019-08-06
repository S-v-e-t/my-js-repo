/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// 1-й способ
// const listItems = document.querySelectorAll('.categories > li');

// const getItemsContent = items => [...items].map(item => {
//   const head = item.childNodes[0].nodeValue.trim(); 
//   const itemsLength = item.childNodes[1].children.length;
  
//   console.log(`Категория: ${head} \n Количество вложенных li: ${itemsLength}`);
// });

// getItemsContent(listItems);


// 2-й способ
const ref = {
  categories: document.querySelectorAll(".categories > li"),
  result: document.querySelector(".result")
};

 // console.log(ref.categories);

function getData (list) {
    const texts = [...list].map(e => e.firstChild.textContent.trim());
    console.log('texts', texts);
    const quantityInners = [...list].map(e => e.querySelectorAll('ul > li').length);
    console.log('quantityInners', quantityInners);
};

function getData(list) {
  return [...list].map(
    e => `Категория: ${e.firstChild.textContent.trim()}
Количество вложенных li: ${e.querySelectorAll("ul > li").length}`
  ).join('\n');
};

 // ref.result.textContent = getData(ref.categories);
console.log(getData(ref.categories));