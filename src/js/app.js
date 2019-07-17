import bodymovin from './lib/lottie_light.min';
import logoAnimation from './data/data.json';
import openMenu from './lib/mobile-menu';
import lazyLoadImages from './lib/lazyLoadImages';

bodymovin.loadAnimation({
  container: document.getElementById('logo-animation-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: logoAnimation
});

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', openMenu );

document.addEventListener('DOMContentLoaded', lazyLoadImages);
