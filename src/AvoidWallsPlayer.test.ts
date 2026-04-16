import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

describe("AvoidWallsPlayer Tests", () => {
  it("turns left when at left wall in upper half", () => {
    const s = new Snake();
    const world = new WorldModel(s, 10, 10);

    s.turnLeft();
    s.move(6); // y = 6 (upper half)
    s.turnLeft();

    const sc = new SnakeController(world, s);
    const player = new AvoidWallsPlayer(sc);

    player.makeTurn();

    expect(sc.snakeDirection).not.toBe("left");
  });

  it("turns right when at left wall in lower half", () => {
    const s = new Snake();
    const world = new WorldModel(s, 10, 10);

    // stay in lower half (y = 0)
    s.turnLeft(); // up
    s.turnLeft(); // left

    const sc = new SnakeController(world, s);
    const player = new AvoidWallsPlayer(sc);

    player.makeTurn();

    expect(sc.snakeDirection).not.toBe("left");
  });

  it("does nothing if not near a wall", () => {
    const s = new Snake();
    const world = new WorldModel(s, 10, 10);

    const sc = new SnakeController(world, s);
    const player = new AvoidWallsPlayer(sc);

    player.makeTurn();

    expect(sc.snakeDirection).toBe("right");
  });

  it("turns when about to hit bottom wall", () => {
    const s = new Snake();
    const world = new WorldModel(s, 10, 10);

    s.turnRight(); // down

    const sc = new SnakeController(world, s);
    const player = new AvoidWallsPlayer(sc);

    player.makeTurn();

    expect(sc.snakeDirection).not.toBe("down");
  });
});
