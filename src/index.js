const container = document.querySelector('.container');
const heart = document.querySelector('.heart');

const initialNum = 30; // 创建heart的数量
let curHeartNum = 0; // 当前数量

function createHeart() {
  const curHeart = heart.cloneNode(true);
  curHeart.style.color = getRandomColor();
  const leftRandom = Math.random() * 100;
  curHeart.style.fontSize = `${Math.random() * 2 + 1}rem`;
  curHeart.style.animationDuration = Math.random() * 4 + 3 + "s";
  curHeart.style.left = `calc(${leftRandom}% - ${heart.clientWidth / 2}px)`;
  curHeart.addEventListener('animationiteration', () => {
    curHeart.remove();
    curHeartNum -= 1;
  }, { once: true });
  container.appendChild(curHeart);
  curHeartNum += 1;
}

function getRandomColor() {
  const cr = parseInt(Math.random() * 255, 10);
  const cg = parseInt(Math.random() * 255, 10);
  const cb = parseInt(Math.random() * 255, 10);
  const ca = parseInt( Math.random() * 100 + 20, 10);
  return `#${cr.toString(16)}${cg.toString(16)}${cb.toString(16)}${ca}`;
}

// 数量监测
setInterval(() => {
  if (curHeartNum < initialNum) {
    createHeart();
  }
}, 20);
