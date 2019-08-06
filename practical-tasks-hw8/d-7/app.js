const ref = {
  root: document.querySelector("#root")
};

const getRandomHEXByte = () => {
  let res = Math.floor(Math.random() * 256).toString(16);
  return (res = res.length > 1 ? res : "0" + res);
};

const getRandomColor = () =>
  `#${getRandomHEXByte()}${getRandomHEXByte()}${getRandomHEXByte()};`;

  // Описание из ТЗ
const INIT = {
  SIZE: 30,
  STEP: 10
};

(function createBoxes(n) {
  const container = document.createElement("div");
  new Array(n).fill("").map((e, i) => {
    const div = document.createElement("div");
    div.style.cssText = `width: ${INIT.SIZE + i * INIT.STEP}px;
      height: ${INIT.SIZE + i * INIT.STEP}px;
      background-color: ${getRandomColor()};`;
    container.appendChild(div);
  });
  ref.root.appendChild(container);
})(6);
