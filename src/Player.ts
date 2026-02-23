import SnakeController from "./SnakeController";
/*
  Represents a Player that can control a snake through a SnakeController.
 */
abstract class Player {
  protected sc: SnakeController;

  /*
   Creates a player with a SnakeController.
   */
  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  /*
    Makes one decision/turn for the snake.
   */
  abstract makeTurn(): void;
}

export default Player;
