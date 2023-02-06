
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

flatpickr("input#datetime-picker", {});

const button = document.querySelector('[data-start]');
console.log(button);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };