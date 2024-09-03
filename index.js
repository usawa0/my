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

function engine(elem, parent, ms = 10) {
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

function createBox({ parent, size, color }) {
  const elem = document.createElement('div');

  elem.style.width = size + 'px';
  elem.style.height = size + 'px';
  elem.style.background = color;
  elem.style.position = 'relative';
  parent.append(elem);

  return elem;
}

const container = document.querySelector('#container');

const box = createBox({
  parent: container,
  size: 500,
  color: 'azure',
});

const wBox1 = createBox({
  parent: box,
  size: 250,
  color: 'black',
});

const wBox2 = createBox({
  parent: wBox1,
  size: 125,
  color: 'azure',
});

const wBox3 = createBox({
  parent: wBox2,
  size: 60,
  color: 'black',
});

const wBox4 = createBox({
  parent: wBox3,
  size: 30,
  color: 'azure',
});

const wBox5 = createBox({
  parent: wBox4,
  size: 15,
  color: 'black',
});

const wBox6 = createBox({
  parent: wBox4,
  size: 7,
  color: 'azure',
});

engine(wBox1, box);
engine(wBox2, wBox1);
engine(wBox3, wBox2);
engine(wBox4, wBox3);
engine(wBox5, wBox4);
engine(wBox6, wBox5);
