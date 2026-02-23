import WorldModel from "./WorldModel";
import Snake from "./Snake";
import Point from "./point";

/*
 SnakeController limits what a Player can do with a Snake and its WorldModel so no cheating happens.
 Players can turn the snake and read allowed world/snake info, but it can't control the snake itself.
 */
class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  /*
    Creates a SnakeController for a certain snake and world.
   */
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

  /*
    Turns the snake left.
   */
  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  /*
   Turns the snake right.
   */
  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  /*
   Gets the snake's current position.
   */
  get snakePosition(): Point {
    return this.slitherer.Position;
  }

  /*
   Gets the snake's current direction.
   */
  get snakeDirection() {
    return this.slitherer.Direction;
  }

  /*
    Gets the world's width.
   */
  get worldWidth(): number {
    return this.snakeWorld.width;
  }

  /*
    Gets the world's height.
   */
  get worldHeight(): number {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
