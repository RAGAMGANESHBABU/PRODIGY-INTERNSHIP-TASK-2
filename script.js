let timer;
let running = false;
let startTime = 0;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  
  display.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
    startStopButton.textContent = 'Pause';
    running = true;
  } else {
    clearInterval(timer);
    startStopButton.textContent = 'Resume';
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  startStopButton.textContent = 'Start';
  elapsedTime = 0;
  display.textContent = '00:00:00';
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
