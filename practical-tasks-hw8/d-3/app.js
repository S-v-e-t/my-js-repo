/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const ref = {
  list: document.querySelector('.list'), // ref.list = Xss423rDFDFsf45wrdfdfsf
};

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const elements2 = ['AAA', 'BBB'];

function setDataList(arr, parent) {
  ref.list.innerHTML = '';
  // const list = document.createElement("ul");  // list = fgdfg465fsdgsds3424235
  // list.classList.add("list");
  const arrayLi = arr.map((e) => {
    const li = document.createElement('li');
    li.textContent = e;
    li.classList.add('list-item');
    return li;
  });
  parent.append(...arrayLi);
}

setDataList(elements, ref.list);
// setDataList(elements2, ref.list);
