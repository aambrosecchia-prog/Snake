import Point from "./point";

type Direction = "right" | "down" | "left" | "up";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: Point;
  private currentDirection: Direction;

  constructor() {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
  }

  get Position(): Point {
    return this.currentPosition;
  }

  get Direction(): Direction {
    return this.currentDirection;
  }

  move(squares: number) {
    if (this.currentDirection === "right") {
      this.currentPosition = new Point(
        this.Position.x + squares,
        this.Position.y,
      );
    } else if (this.currentDirection === "left") {
      this.currentPosition = new Point(
        this.Position.x - squares,
        this.Position.y,
      );
    } else if (this.currentDirection === "up") {
      this.currentPosition = new Point(
        this.Position.x,
        this.Position.y + squares,
      );
    } else {
      // down
      this.currentPosition = new Point(
        this.Position.x,
        this.Position.y - squares,
      );
    }
  }

  turnLeft() {
    if (this.currentDirection === "right") {
      this.currentDirection = "up";
    } else if (this.currentDirection === "up") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "down";
    } else {
      // down
      this.currentDirection = "right";
    }
  }

  turnRight() {
    if (this.currentDirection === "right") {
      this.currentDirection = "down";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "up";
    } else {
      // up
      this.currentDirection = "right";
    }
  }

  /**
   * @deprecated Use turnLeft() or turnRight() instead.
   */
  turn() {
    this.turnRight();
  }
}

export default Snake;
