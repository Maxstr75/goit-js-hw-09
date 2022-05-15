const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let interval = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

refs.startBtn.addEventListener('click', onClickIntervalStart);
function onClickIntervalStart() {
  interval = setInterval(() => {
    getBodyColor();
  }, 1000);
}

refs.stopBtn.addEventListener('click', onStopBtnClick);
function onStopBtnClick() {
  clearInterval(interval);
}
