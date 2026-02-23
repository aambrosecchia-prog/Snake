import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("WorldModel Tests", () => {
  it("update moves the snake", () => {
    const s = new Snake();
    const world = new WorldModel(s);

    world.update(4);

    expect(world.getSnake().Position.x).toBe(4);
    expect(world.getSnake().Position.y).toBe(0);
  });

  it("turn then update moves in the new direction", () => {
    const s = new Snake();
    const world = new WorldModel(s);

    world.update(5); // right to (5, 0)
    s.turnLeft(); // now up
    world.update(2); // to (5, 2)

    expect(world.getSnake().Position.x).toBe(5);
    expect(world.getSnake().Position.y).toBe(2);
  });

  it("turnRight then update moves down", () => {
    const s = new Snake();
    const world = new WorldModel(s);

    s.turnRight(); // right -> down
    world.update(3); // (0, -3)

    expect(world.getSnake().Position.x).toBe(0);
    expect(world.getSnake().Position.y).toBe(-3);
  });
});
