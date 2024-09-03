function moveDown(elem, step = 1) {
  // console.log('down');
  elem.style.top = elem.offsetTop + step + 'px';
}

function moveRight(elem, step = 1) {
  // console.log('right');
  elem.style.left = elem.offsetLeft + step + 'px';
}

function moveUp(elem, step = 1) {
  elem.style.top = elem.offsetTop - step + 'px';
  // console.log('up');
}

function moveLeft(elem, step = 1) {
  // console.log('left');
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

const field = document.querySelector('#field');

const box = createBox({
  parent: field,
  size: 400,
  color: 'azure',
});

const wBox1 = createBox({
  parent: box,
  size: 200,
  color: 'black',
});

const wBox2 = createBox({
  parent: wBox1,
  size: 100,
  color: 'azure',
});

const wBox3 = createBox({
  parent: wBox2,
  size: 50,
  color: 'black',
});

const wBox4 = createBox({
  parent: wBox3,
  size: 25,
  color: 'azure',
});

const wBox5 = createBox({
  parent: wBox4,
  size: 10,
  color: 'black',
});

engine(box, field);
engine(wBox1, box);
engine(wBox2, wBox1);
engine(wBox3, wBox2);
engine(wBox4, wBox3);
engine(wBox5, wBox4);
