let leaveFeedback = document.querySelector('.feedback-button');
let submitBtn = document.querySelector('#submit-purple');
let cancelButton = document.querySelector('#cancel-button');
let xButton = document.querySelector('.close-modal');
let modal = document.querySelector('#feedback-modal');
const buttons = document.querySelectorAll('.li-wrapper li button');

leaveFeedback.addEventListener('click', () => {
   modal.style.display = 'flex';
   setTimeout(() => {
      modal.classList.add('visible');
   }, 200);
});

submitBtn.addEventListener('click', () => {
   modal.style.display = 'flex';
   setTimeout(() => {
      modal.classList.add('visible');
   }, 200);
});

cancelButton.addEventListener('click', () => {
   modal.style.display = 'none';
   setTimeout(() => {
      modal.classList.remove('visible');
   }, 200);
});

xButton.addEventListener('click', () => {
   modal.style.display = 'none';
   setTimeout(() => {
      modal.classList.remove('visible');
   }, 200);
});

buttons.forEach((button) => {
   button.addEventListener('click', () => {
      button.classList.toggle('selected');
      buttons.forEach((btn) => {
         if (btn !== button) {
            btn.classList.remove('selected');
         }
      });
   });
});