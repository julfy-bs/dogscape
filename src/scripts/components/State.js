import player from '../../images/player/dog/player.png';


const image = {
  size: 480,
  width: 480,
  height: 480,
};
export default class State {
  constructor(modelScale, modelWidth, modelHeight, animationDelay) {
    this.imageSize = image.size;
    this.imageContentWidth = image.width;
    this.imageContentHeight = image.height;
    this.image = this._createImage(player);
    this.modelScale = modelScale;
    this.modelWidth = modelWidth;
    this.modelHeight = modelHeight;
    this.animationDelay = animationDelay;
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.spriteMap = [];
    this.animationState = [
      {
        name: 'base-left',
        frames: 4,
      },
      {
        name: 'base-right',
        frames: 4,
      },
      {
        name: 'damage-left',
        frames: 12,
      },
      {
        name: 'damage-right',
        frames: 12,
      },
      {
        name: 'down-left',
        frames: 1,
      },
      {
        name: 'down-right',
        frames: 1,
      },
      {
        name: 'evade-left',
        frames: 18,
      },
      {
        name: 'evade-right',
        frames: 18,
      },
      {
        name: 'idle-left',
        frames: 14,
      },
      {
        name: 'idle-right',
        frames: 14,
      },
      {
        name: 'jump-left',
        frames: 25,
      },
      {
        name: 'jump-right',
        frames: 25,
      },
      {
        name: 'swinging-left',
        frames: 16,
      },
      {
        name: 'swinging-right',
        frames: 16,
      },
      {
        name: 'walk-left',
        frames: 28,
      },
      {
        name: 'walk-right',
        frames: 28,
      },
    ];
    this._createAnimationMap();
  }

  draw(context, modelPositionX, modelPositionY) {
    // context.fillRect(modelPositionX, modelPositionY, this.modelWidth * this.modelScale, this.modelHeight * this.modelScale);
    // this._drawHitBox(context, modelPositionX, modelPositionY, this.modelWidth, this.modelHeight)
    context.drawImage(this.image,
      this.frameX,
      this.frameY,
      this.imageContentWidth,
      this.imageContentHeight,
      modelPositionX,
      modelPositionY,
      this.modelWidth * this.modelScale,
      this.modelHeight * this.modelScale);
  }

  update() {
    let position = Math.floor(this.gameFrame / this.animationDelay) % this.spriteMap['walk-right'].location.length;
    this.frameX = this.imageSize * position;
    this.frameY = this.spriteMap['walk-right'].location[position].y;
    this.gameFrame++;
  }

  _createImage(image) {
    const element = document.createElement('img');
    element.classList.add('player');
    element.setAttribute('src', image);
    return element;
  }

  _drawHitBox(context, modelPositionX, modelPositionY, modelWidth, modelHeight) {
    context.beginPath();
    context.arc(modelPositionX + modelWidth / 2, modelPositionY + modelHeight / 1.5, modelWidth / 6, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
  }

  _createAnimationMap() {
    this.animationState.forEach((item, index) => {
      let frames = {
        location: [],
      };
      for (let i = 0; i < item.frames; i++) {
        let positionX = i * this.imageSize;
        let positionY = index * this.imageSize;
        frames.location.push({ x: positionX, y: positionY });
      }
      this.spriteMap[item.name] = frames;
    });
  }

}
