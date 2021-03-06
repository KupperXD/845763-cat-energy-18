var mainNav = document.querySelector('.main-nav');
var headerToggle = document.querySelector('.header-page__toggle');

mainNav.classList.remove('main-nav--nojs');
headerToggle.classList.remove('header-page__toggle--nojs');

headerToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--opened');
    headerToggle.classList.add('header-page__toggle--opened');
  } else {
    mainNav.classList.add('main-nav--close');
    mainNav.classList.remove('main-nav--opened');
    headerToggle.classList.remove('header-page__toggle--opened');
  }
});
