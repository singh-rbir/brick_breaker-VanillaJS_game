export function detectCollisionType1(ball, gameObject) {
  // hitting the paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    leftSideOfBall + ball.size / 2 >= leftSideOfObject &&
    rightSideOfBall - ball.size / 2 <= rightSideOfObject
  ) {
    return true;
  } else return false;
}

export function detectCollisionType2(ball, gameObject) {
  // hitting the paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  if (
    // ball hits the left/right side of gameObject
    topOfBall + ball.size / 2 >= topOfObject &&
    bottomOfBall - ball.size / 2 <= bottomOfObject &&
    leftSideOfBall <= rightSideOfObject &&
    rightSideOfBall >= leftSideOfObject
  ) {
    return true;
  } else return false;
}
