import WorldModel from "./WorldModel";
import Player from "./Player";

class GameController {
  private world: WorldModel;
  /*
 Assigned players here.
 */
  private player1!: Player;
  private player2!: Player;

  constructor(world: WorldModel) {
    this.world = world;
  }

  setPlayer1(player: Player): void {
    this.player1 = player;
  }

  setPlayer2(player: Player): void {
    this.player2 = player;
  }

  run(): void {
    let lastTime = 0;

    const updateFrame = (milliseconds: number) => {
      this.player1.makeTurn();
      this.player2.makeTurn();

      const elapsedTime = milliseconds - lastTime;
      /*
and below is the code with a loop that should update the frame if I got it right?
*/
      if (elapsedTime > 250) {
        this.world.update(1);
        lastTime += 250;
      }

      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}

export default GameController;
