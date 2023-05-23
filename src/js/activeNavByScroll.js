import throttle from 'lodash.throttle';

window.addEventListener('scroll', throttle(onScroll, 100));

function onScroll() {
  let scrollDistance = window.scrollY;

  document.querySelectorAll('section').forEach((el, i) => {
    if (el.offsetTop <= scrollDistance) {
      document.querySelectorAll('.nav-list__link').forEach(el => {
        if (el.classList.contains('current')) {
          el.classList.remove('current');
        }
      });

      document
        .querySelectorAll('.nav-list__item')
        [i].querySelector('a')
        .classList.add('current');
    }
  });
}
