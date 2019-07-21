import {
  detectCollisionType1,
  detectCollisionType2
} from "/src/collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;

    this.dontChangeY = false;
  }

  update() {
    if (detectCollisionType1(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDeletion = true;
    }
    if (detectCollisionType2(this.game.ball, this)) {
      this.game.ball.speed.x = -this.game.ball.speed.x;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    ctx.border = "2px solid black";
  }
}
