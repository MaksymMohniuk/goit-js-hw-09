import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.getElementsByName('delay');
const step = document.getElementsByName('step');
const amount = document.getElementsByName('amount');
const button = document.querySelector('button[type ="submit"]');

button.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const numberOfPromises = amount[0].value;
  const delayStep = step[0].value;
  const delayFirst = Number(firstDelay[0].value);
  for (let i = 1; i <= numberOfPromises; i +=1) {
    let position = i;
    let delay = delayFirst + delayStep * (position - 1);
  createPromise (position, delay).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};
form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
}, delay);
   });
  };