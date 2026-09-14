const button = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => entries.forEach(({target, isIntersecting}) => {
  if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
}), {threshold: .08});
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
