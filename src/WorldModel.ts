import IWorldView from "./IWorldView";
import Snake from "./Snake";

class WorldModel {
  private snake: Snake;
  private worldWidth: number;
  private worldHeight: number;
  private worldView: IWorldView | null;

  /*
    I made a WorldModel with an existing Snake.
    Width and height default to 10 if not given.
   */
  constructor(snake: Snake, width: number = 10, height: number = 10) {
    this.snake = snake;
    this.worldWidth = width;
    this.worldHeight = height;
    this.worldView = null;
  }

  /*
   I made this so it would update the world by moving the Snake whatever number of steps.
   */
  update(steps: number) {
    this.snake.move(steps);

    if (this.worldView !== null) {
      this.worldView.display(this);
    }
  }

  setView(worldView: IWorldView): void {
    this.worldView = worldView;
  }

  /*
    Now I would get the Snake in this world.
   */
  getSnake(): Snake {
    return this.snake;
  }

  get width(): number {
    return this.worldWidth;
  }

  get height(): number {
    return this.worldHeight;
  }
}

export default WorldModel;
