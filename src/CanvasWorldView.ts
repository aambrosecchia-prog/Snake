import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

class CanvasWorldView implements IWorldView {
  /*
    I created my new variables here
    */
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  /*
 This is my scalingFactor contructor wih has my canvas element.
 */
  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  display(world: WorldModel): void {
    /*
  I used my properties from worldModel.ts in the method.
  */
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;

    /*
   And here is whare I call my snake from the worldModel.
   */
    const snake = world.getSnake();
    const x = snake.Position.x;
    const y = snake.Position.y;

    /*
  I relyed a lot on the notes for the code below to draw the rectangle. I didn't get to run it by anyone visually to see if it runs, though.
  */
    this.context.fillRect(
      x * this.scalingFactor,
      y * this.scalingFactor,
      this.scalingFactor,
      this.scalingFactor,
    );
  }
}

export default CanvasWorldView;
