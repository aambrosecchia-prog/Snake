import Snake from "./Snake";
import WorldModel from "./WorldModel";
import IWorldView from "./IWorldView";

class MockWorldView implements IWorldView {
  public displayCalled: boolean = false;

  display(world: WorldModel): void {
    this.displayCalled = true;
  }
}

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

    world.update(5);
    s.turnLeft();
    world.update(2);

    expect(world.getSnake().Position.x).toBe(5);
    expect(world.getSnake().Position.y).toBe(-2);
  });

  it("turnRight then update moves down", () => {
    const s = new Snake();
    const world = new WorldModel(s);

    s.turnRight();
    world.update(3);

    expect(world.getSnake().Position.x).toBe(0);
    expect(world.getSnake().Position.y).toBe(3);
  });

  it("uses default width and height of 10", () => {
    const s = new Snake();
    const world = new WorldModel(s);

    expect(world.width).toBe(10);
    expect(world.height).toBe(10);
  });

  it("stores custom width and height", () => {
    const s = new Snake();
    const world = new WorldModel(s, 20, 30);

    expect(world.width).toBe(20);
    expect(world.height).toBe(30);
  });

  it("calls display on the world view during update", () => {
    const s = new Snake();
    const world = new WorldModel(s);
    const mockView = new MockWorldView();

    world.setView(mockView);
    world.update(1);

    expect(mockView.displayCalled).toBe(true);
  });
});
