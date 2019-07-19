import { detectCollision } from "/src/collisionDetection";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;
    this.size = 20;

    this.previousY = -2;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 400 };
    this.speed = { x: 4, y: this.previousY };
  }

  resetToPrevious() {}

  increaseSpeed() {
    this.speed.y -= 3;
    this.previousY = this.speed.y;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //console.log(this.game.paddle.position.x);
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // hitting wall on left/right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    // hitting wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // BOTTOM OF GAME - GAMEOVER
    if (this.position.y + this.size >= this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
