import Snake from "./Snake";

/*
 WorldModel has one Snake (aggregation).
 The Snake is created in a different file, snake.ts, and passed to the world model.
 */
class WorldModel {
  private snake: Snake;
  private worldWidth: number;
  private worldHeight: number;

  /*
    I made a WorldModel with an existing Snake.
    Width and height default to 10 if not given.
   */
  constructor(snake: Snake, width: number = 10, height: number = 10) {
    this.snake = snake;
    this.worldWidth = width;
    this.worldHeight = height;
  }

  /*
   I made this so it would update the world by moving the Snake whatever number of steps.
   */
  update(steps: number) {
    this.snake.move(steps);
  }

  /*
    Now I would get the Snake in this world.
   */
  getSnake(): Snake {
    return this.snake;
  }

  /*
   Gets the width of the world.
   */
  get width(): number {
    return this.worldWidth;
  }

  /*
    Gets the height of the world.
   */
  get height(): number {
    return this.worldHeight;
  }
}

export default WorldModel;
