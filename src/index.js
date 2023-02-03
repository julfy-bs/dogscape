import './pages/index.css';
import Game from './scripts/components/Game.js';

const app = document.querySelector('.page');

window.addEventListener('load', () => {
  new Game(app);
});

window.addEventListener('resize', () => {
  window.location.reload();
});

