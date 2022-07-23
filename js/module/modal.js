const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const heroBtn = document.querySelector('.hero__btn');

const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

overlay.style.transitionDuration = '0.36s';
modal.style.transitionDuration = '0.36s';

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});

overlay.addEventListener('click', (event) => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
    modal.classList.remove('modal_open');
  }
});

// closeBtn.addEventListener('click', () => {
//   modal.classList.remove('modal_open');
//   overlay.classList.remove('overlay_open');
// });

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    name: form.name.value,
    surname: form.surname.value,
    telephone: form.telephone.value,
  };
  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((person) => {
      modalTitle.textContent = `${person.name}, ваша заявка успешно отправлена! Номер заявки: ${person.id}`;
      form.remove();
      setTimeout(() => {
        overlay.classList.remove('overlay_open');
        modal.classList.remove('modal_open');
      }, 3000);
    });
});
