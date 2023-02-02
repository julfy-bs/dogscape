import idleLeft from '../../images/player/dog/idle-left.png';
import idleRight from '../../images/player/dog/idle-right.png';
import walkLeft from '../../images/player/dog/walk-left.png';
import walkRight from '../../images/player/dog/walk-right.png';
import baseLeft from '../../images/player/dog/base-left.png';
import baseRight from '../../images/player/dog/base-right.png';
import damageLeft from '../../images/player/dog/damage-left.png';
import evadeLeft from '../../images/player/dog/evade-left.png';
import swingingLeft from '../../images/player/dog/swinging-left.png';
import downLeft from '../../images/player/dog/down-left.png';


const image = {
  // size: 480,
  // width: 210,
  // height: 170,
  // paddingX: 100,
  // paddingY: 200,
  size: 480,
  width: 480,
  height: 480,
  paddingX: 100,
  paddingY: 150,
};
export default class State {
  constructor(modelScale, modelWidth, modelHeight, animationDelay) {
    this.imageSize = image.size;
    this.imageContentWidth = image.width;
    this.imageContentHeight = image.height;
    this.paddingX = image.paddingX;
    this.paddingY = image.paddingY;
    this.image = this._createImage(downLeft);
    this.modelScale = modelScale;
    this.modelWidth = modelWidth;
    this.modelHeight = modelHeight;
    this.animationDelay = animationDelay;
    this.frameX = 0;
    this.frameY = 0;
    this.frameForward = true;
    this.gameFrame = 0;
  }

  draw(context, modelPositionX, modelPositionY) {
    context.fillStyle = 'red';
    // context.fillRect(modelPositionX, modelPositionY, this.modelWidth * this.modelScale, this.modelHeight * this.modelScale);
    context.drawImage(this.image,
      this.paddingX + this.frameX * this.imageSize,
      this.paddingY + this.frameY * this.imageSize,
      this.imageContentWidth - this.paddingX,
      this.imageContentHeight - this.paddingY,
      modelPositionX,
      modelPositionY,
      this.modelWidth * this.modelScale,
      this.modelHeight * this.modelScale);
  }

  update() {
    if (this.gameFrame % this.animationDelay === 0) {
      // if (this.frameX === 1) {
      //   this.frameForward = false;
      // }
      // if (this.frameX === 0) {
      //   this.frameForward = true;
      // }
      // if (this.frameX < 1 && this.frameForward === false) {
      //   this.frameX--;
      // } else {
      //   this.frameX++;
      // }
      // if (this.frameX < 1) {
      //   this.frameX++;
      // }
    }
    this.gameFrame++;
  }

  _createImage(image) {
    const element = document.createElement('img');
    element.classList.add('player');
    element.setAttribute('src', image);
    return element;
  }

}
