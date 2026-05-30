const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.carousel').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  let index = 0;
  const update = () => { track.style.transform = `translateX(-${index * 100}%)`; };
  carousel.querySelector('.prev')?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  carousel.querySelector('.next')?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });
});
