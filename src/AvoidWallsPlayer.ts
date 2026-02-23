import Player from "./Player";

/*
 * A Player that tries to avoid crashing into world walls.
 */
class AvoidWallsPlayer extends Player {
  /*
Creates an avoidWalls player.
   */
  constructor(sc: any) {
    super(sc);
  }

  /*
    Makes a turn decision to avoid walls.
   */
  makeTurn(): void {
    const pos = this.sc.snakePosition;
    const dir = this.sc.snakeDirection;
    const w = this.sc.worldWidth;
    const h = this.sc.worldHeight;

    const half = h / 2;

    //Left wall crash case
    if (dir === "left" && pos.x === 0) {
      if (pos.y <= half) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
      return;
    }

    // Right wall crash case
    if (dir === "right" && pos.x === w) {
      if (pos.y <= half) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
      return;
    }

    // Bottom wall crash case
    if (dir === "down" && pos.y === 0) {
      if (pos.x <= w / 2) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
      return;
    }

    // Top wall crash case
    if (dir === "up" && pos.y === h) {
      if (pos.x <= w / 2) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
      return;
    }

    // Otherwise do nothing
  }
}

export default AvoidWallsPlayer;
