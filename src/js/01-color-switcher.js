const btnStart = document.querySelector('button[data-start]');
// console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
// console.log(stopBtn);

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);

let intervalId;

function startTimer() {
    btnStart.disabled = true;
    btnStop.disabled = false;
intervalId = setInterval(changeColor, 1000);
};

function stopTimer() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(intervalId);
};

function changeColor() {
    document.body.style.background = getRandomHexColor();
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };