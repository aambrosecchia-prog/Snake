import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";

describe("SnakeController Tests", () => {
  it("returns snake position correctly", () => {
    const s = new Snake();
    const world = new WorldModel(s, 20, 30);
    const sc = new SnakeController(world, s);

    expect(sc.snakePosition.x).toBe(0);
    expect(sc.snakePosition.y).toBe(0);
  });

  it("returns snake direction correctly", () => {
    const s = new Snake();
    const world = new WorldModel(s);
    const sc = new SnakeController(world, s);

    expect(sc.snakeDirection).toBe("right");
  });

  it("turnSnakeLeft calls snake.turnLeft()", () => {
    const s = new Snake();
    const world = new WorldModel(s);
    const sc = new SnakeController(world, s);

    sc.turnSnakeLeft();

    expect(sc.snakeDirection).toBe("up");
  });

  it("turnSnakeRight calls snake.turnRight()", () => {
    const s = new Snake();
    const world = new WorldModel(s);
    const sc = new SnakeController(world, s);

    sc.turnSnakeRight();

    expect(sc.snakeDirection).toBe("down");
  });

  it("returns world width and height correctly", () => {
    const s = new Snake();
    const world = new WorldModel(s, 50, 60);
    const sc = new SnakeController(world, s);

    expect(sc.worldWidth).toBe(50);
    expect(sc.worldHeight).toBe(60);
  });
});
