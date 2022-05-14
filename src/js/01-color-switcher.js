const { startBtn, stopBtn, body, resetBtn } = refs;

const INTERVAL_TIME = 1000;
let intervalId = null;

// - Вешаем слушателей
startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);
resetBtn.addEventListener('click', resetBtnColorHandler);

// - Генерации рамдомного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// - Вешает рандомный цвет на body
function getBodyColor() {
  return (body.style.backgroundColor = getRandomHexColor());
}

// - Обработчик кнопки Старт
function startBtnHandler({ target }) {
  if (target.dataset.action.start) {
    return;
  }
  console.log(target);

  if (!target.disabled) {
    target.disabled = true;

    intervalId = setInterval(getBodyColor, INTERVAL_TIME);

    resetBtn.classList.remove('is_active');
    body.classList.remove('body_switcher');
  }
}

// - Обработчик кнопки Стоп
function stopBtnHandler({ target }) {
  if (target.dataset.action.stop) {
    return;
  }
  console.log(target);

  clearInterval(intervalId);

  if (startBtn.disabled) {
    startBtn.disabled = false;
    resetBtn.classList.add('is_active');
  }
}

// - Сброс инлайн цвета
function resetBtnColorHandler({ target }) {
  if (target.dataset.action.reset) {
    return;
  }
  console.log(target);

  if (!body.classList.contains('body_switcher')) {
    body.classList.add('body_switcher');
    resetBtn.classList.remove('is_active');
  }
  return (body.style.backgroundColor = '');
}
