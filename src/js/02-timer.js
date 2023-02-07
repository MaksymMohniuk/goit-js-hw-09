
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

flatpickr("input#datetime-picker", {});

const button = document.querySelector('[data-start]');
// console.log(button);
let countDownDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      countDownDate = selectedDates[0];
      console.log(selectedDates[0]);

      if(countDownDate < Date.now) {
        alert('Please choose a date in the future')
        return;
      }
      if(countDownDate > Date.now) {
        button.disabled = false;
        const diff = countDownDate - Date.now;
        return diff;
      }
    },
  };

