console.log('funguju');

const header = document.querySelector('.navbar');
const isNavExpanded = document
  .querySelector('.navbar-toggler')
  .addEventListener('click', () => {
    header.classList.toggle('burgerMenu');
    console.log(header.classList);
  });
