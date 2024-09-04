function moveDown(elem, step = 1) {
  elem.style.top = elem.offsetTop + step + 'px';
}

function moveRight(elem, step = 1) {
  elem.style.left = elem.offsetLeft + step + 'px';
}

function moveUp(elem, step = 1) {
  elem.style.top = elem.offsetTop - step + 'px';
}

function moveLeft(elem, step = 1) {
  elem.style.left = elem.offsetLeft - step + 'px';
}

function engine(elem, ms = 10) {
  const parent = elem.parentElement;
  const elemHeight = elem.clientHeight;
  const elemWidth = elem.clientWidth;
  const parentHeight = parent.clientHeight - elemHeight;
  const parentWidth = parent.clientWidth - elemWidth;

  setInterval(() => {
    if (elem.offsetTop <= parentHeight && elem.offsetLeft <= 0) {
      moveDown(elem);
    } else if (
      elem.offsetTop >= parentWidth &&
      elem.offsetLeft <= parentHeight
    ) {
      moveRight(elem);
    } else if (elem.offsetTop >= 0 && elem.offsetLeft >= elemHeight) {
      moveUp(elem);
    } else if (elem.offsetTop <= 0) {
      moveLeft(elem);
    }
  }, ms);
}

function createBox() {
  const elem = document.createElement('div');

  elem.style.background = 'azure';
  elem.style.width = 500 + 'px';
  elem.style.height = 500 + 'px';
  elem.style.position = 'relative';

  document.body.append(elem);
}

function createWrappedBox(parent) {
  // const parent = container.lastElementChild;
  const elem = document.createElement('div');
  const elemSize = parent.clientHeight / 2;
  const parentColor = getComputedStyle(parent).backgroundColor;
  const elemColor = parentColor === 'rgb(240, 255, 255)' ? 'black' : 'azure';

  elem.style.background = elemColor;
  elem.style.width = elemSize + 'px';
  elem.style.height = elemSize + 'px';
  elem.style.position = 'relative';

  parent.append(elem);

  return elem;
}

document.onclick = (event) => {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BODY') {
    createBox();
    return;
  }
  if (event.target.tagName === 'DIV' && !event.target.firstElementChild) {
    engine(createWrappedBox(event.target));
    return;
  }
};

const box = document.querySelector('#box');

const wBox1 = createWrappedBox(box);
const wBox2 = createWrappedBox(wBox1);
const wBox3 = createWrappedBox(wBox2);
const wBox4 = createWrappedBox(wBox3);
const wBox5 = createWrappedBox(wBox4);

const wBoxes = [wBox1, wBox2, wBox3, wBox4, wBox5];

for (let i = 0; i < 5; i++) {
  setTimeout(() => engine(wBoxes[i]), i * 1000);
}
