import State from './State.js';

const playerModel = {
  height: 480,
  width: 480,
  scale: 1,
};

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.scale = playerModel.scale;
    this.width = playerModel.width;
    this.height = playerModel.height;
    // this.hitBoxX = this.width / 6;
    // this.hitBoxY = this.height / 6;
    // this.x = this.gameWidth - this.width * this.scale;
    this.x = 0;
    this.y = this.gameHeight - this.height * this.scale;
    this.animationDelay = 3;
    this.speed = 0;
    this.currentState = new State(this.scale, this.width, this.height, this.animationDelay);
  }

  draw(context) {
    this.currentState.draw(context, this.x, this.y);

  }

  update() {
    // if (this.x < 0) {
    //   this.x = 0;
    // }
    // if (this.x > this.gameWidth) {
    //   this.x = this.gameWidth;
    // }
    // if (this.x <= this.gameWidth - this.width * this.scale) {
    //   this.speed = 1;
    //   this.x += this.speed;
    // }
    this.currentState.update();
  }

}
