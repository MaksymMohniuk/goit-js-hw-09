
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

flatpickr("input#datetime-picker", {});

const button = document.querySelector('[data-start]');
// console.log(button);
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');
let countDownDate;
const diff = 0;
let intervalId;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      countDownDate = selectedDates[0];
      console.log(selectedDates[0]);

      if(countDownDate < Date.now()) {
        button.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future')
        return;
      }
      if(countDownDate > Date.now()) {
        button.disabled = false;
        const diff = countDownDate - Date.now();
      }
    },
  };

  flatpickr("input#datetime-picker", options);

  button.addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000)
  });

  function startTimer() {
    const diff = countDownDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(diff);
    outputDays.textContent = `${addZero(days)}`;
    outputHours.textContent = `${addZero(hours)}`;
    outputMinutes.textContent = `${addZero(minutes)}`;
    outputSeconds.textContent = `${addZero(seconds)}`;
    if (diff <= 999) {
      clearInterval(intervalId)}
  }

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function addZero(number) {
    return String(number).padStart(2, 0);
  }


 