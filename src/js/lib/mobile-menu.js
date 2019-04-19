function openMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenuwWapper = document.querySelector('.header-menu');
  mobileMenuwWapper.classList.toggle('header-menu-active');
  hamburger.classList.toggle('hamburger-active');
}

export default openMenu;
