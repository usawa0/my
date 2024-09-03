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
  }, 10);
}

function createBox(parent) {
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

const container = document.querySelector('#container');
const box = document.querySelector('#box');

const wBox1 = createBox(box);
const wBox2 = createBox(wBox1);
const wBox3 = createBox(wBox2);
const wBox4 = createBox(wBox3);
const wBox5 = createBox(wBox4);

engine(wBox1);
engine(wBox2);
engine(wBox3);
engine(wBox4);
engine(wBox5);
