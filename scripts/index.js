// Clock
const timer = document.querySelector('.timer');

// Buttons
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let seconds = 0;

function getTimeInSeconds(seconds) {
  const date = new Date(seconds * 1000);

  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function startTimer() {
  const clock = setInterval(() => {
    seconds++;
    timer.innerHTML = getTimeInSeconds(seconds);
  }, 1000);
}

start.addEventListener('click', (event) => {
  startTimer();
})

pause.addEventListener('click', (event) => {

})

reset.addEventListener('click', (event) => {

})
