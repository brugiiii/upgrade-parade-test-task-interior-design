const refs = {
  navButtonEl: document.querySelector('.nav-button'),
  dropDownEl: document.querySelector('.details-list'),
};

refs.navButtonEl.addEventListener('click', onClick);

function onClick() {
  console.log(1);
  refs.dropDownEl.classList.toggle('is-hidden');
}
