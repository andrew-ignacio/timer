// Clock
const timer = document.querySelector('.timer');

// Buttons
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let seconds = 0;
let clock;

function getTimeInSeconds(seconds) {
  const date = new Date(seconds * 1000);

  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function startTimer() {
  clock = setInterval(() => {
    seconds++;
    timer.innerHTML = getTimeInSeconds(seconds);
  }, 1000);
}

start.addEventListener('click', (event) => {
  clearInterval(clock);
  startTimer();

  timer.classList.remove('inactive');
})

pause.addEventListener('click', (event) => {
  clearInterval(clock);

  timer.classList.add('inactive');
})

reset.addEventListener('click', (event) => {
  clearInterval(clock);
  timer.innerHTML = '00:00:00';
  seconds = 0;

  timer.classList.add('inactive');
})
