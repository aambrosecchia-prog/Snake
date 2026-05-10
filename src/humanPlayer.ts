import Player from "./Player";
import SnakeController from "./SnakeController";
import IInputHandler from "./IInputHandler";

class HumanPlayer extends Player {
  private inputHandler: IInputHandler;

  constructor(sc: SnakeController, inputHandler: IInputHandler) {
    super(sc);
    this.inputHandler = inputHandler;
  }

  makeTurn(): void {
    /*
   This is  whare I make sure the snake is turning left when it's meant too.
   */
    if (this.inputHandler.madeLeftMove()) {
      this.sc.turnSnakeLeft();
      this.inputHandler.resetLeftMove();
    } else if (this.inputHandler.madeRightMove()) {
      /*
And the same for the right.
*/
      this.sc.turnSnakeRight();
      this.inputHandler.resetRightMove();
    }
  }
}

export default HumanPlayer;
