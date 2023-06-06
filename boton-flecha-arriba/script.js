// Botón flecha arriba
const scrollUpArrow = document.querySelector('#scroll-up-arrow');

scrollUpArrow.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollUpArrow.style.display = 'flex';
  } else {
    scrollUpArrow.style.display = 'none';
  }
});