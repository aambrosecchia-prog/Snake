import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import Player from "./Player";

class DummyPlayer extends Player {
  public didRun: boolean = false;

  constructor(sc: SnakeController) {
    super(sc);
  }

  makeTurn(): void {
    this.didRun = true;
  }
}

describe("Player Tests", () => {
  it("stores the SnakeController passed to the constructor", () => {
    const s = new Snake();
    const world = new WorldModel(s, 10, 10);
    const sc = new SnakeController(world, s);

    const p = new DummyPlayer(sc);

    expect(p.didRun).toBe(false);
    p.makeTurn();
    expect(p.didRun).toBe(true);
  });

  it("requires subclasses to include makeTurn", () => {
    expect(true).toBe(true);
  });
});
