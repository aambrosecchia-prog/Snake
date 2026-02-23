import Snake from "./Snake";

/*
 WorldModel has one Snake (aggregation).
 The Snake is created in a different file, snake.ts, and passed to the world model.
 */
class WorldModel {
  private snake: Snake;

  /*
    I made a WorldModel with an existing Snake.
   */
  constructor(snake: Snake) {
    this.snake = snake;
  }

  /*
   I made this so it would update the world by moving the Snake whatever number of steps.
   */
  update(steps: number) {
    this.snake.move(steps);
  }

  /*
   * Now I would get the Snake in this world.
   */
  getSnake(): Snake {
    return this.snake;
  }
}

export default WorldModel;
