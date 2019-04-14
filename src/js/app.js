import bodymovin from 'lottie-web';
import logoAnimation from './data/data.json';

let logoAnim = bodymovin.loadAnimation({
  container: document.getElementById('logo-animation-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  animationData: logoAnimation
});
