import Snake from "./Snake";

describe("Snake PT2 Tests (2D + turning)", () => {
  it("starts at (0, 0)", () => {
    const s = new Snake();
    expect(s.Position.x).toBe(0);
    expect(s.Position.y).toBe(0);
  });

  it("moves right by default", () => {
    const s = new Snake();
    s.move(5);
    expect(s.Position.x).toBe(5);
    expect(s.Position.y).toBe(0);
  });

  it("turnLeft makes it move up", () => {
    const s = new Snake();
    s.turnLeft();
    s.move(3);
    expect(s.Position.x).toBe(0);
    expect(s.Position.y).toBe(-3);
  });

  it("turnRight makes it move down", () => {
    const s = new Snake();
    s.turnRight();
    s.move(2);
    expect(s.Position.x).toBe(0);
    expect(s.Position.y).toBe(2);
  });

  it("multiple turns work (left then right returns to right)", () => {
    const s = new Snake();

    s.turnLeft();
    s.turnRight();
    s.move(4);

    expect(s.Position.x).toBe(4);
    expect(s.Position.y).toBe(0);
  });

  it("right turn twice points left", () => {
    const s = new Snake();

    s.turnRight();
    s.turnRight();
    s.move(7);

    expect(s.Position.x).toBe(-7);
    expect(s.Position.y).toBe(0);
  });
});
