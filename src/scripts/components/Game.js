import Player from './Player.js';

export default class Game {
  constructor(app) {
    this.app = app;
    this.gameWidth = window.innerWidth;
    this.gameHeight = window.innerHeight;
    this.canvas = this._createCanvas();
    this.context = this._getCanvasContext(this.canvas);
    this.app.prepend(this.canvas);
    this.player = new Player(this.gameWidth, this.gameHeight);
    this.animate();
  }

  _createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.classList.add('page__canvas');
    canvas.width = this.gameWidth;
    canvas.height = this.gameHeight;
    return canvas;
  };

  _getCanvasContext = (canvas) => {
    return canvas.getContext('2d');
  };

  animate() {
    this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.player.draw(this.context);
    this.player.update();
    requestAnimationFrame(() => this.animate());
  }
}
