import Snake from "./Snake";

describe("Snake tests, which I hopefully did correctly?", () => {
  it("starts at (0, 0)", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    expect(x).toBe(0);
    expect(y).toBe(0);
  });

  it("moves right by default", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    s.move(5);

    expect(s.Position.x).toBe(x + 5);
    expect(s.Position.y).toBe(y);
  });

  it("turnLeft makes it move up", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    s.turnLeft();
    s.move(3);

    expect(s.Position.x).toBe(x);
    expect(s.Position.y).toBe(y - 3);
  });

  it("turnRight makes it move down", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    s.turnRight();
    s.move(2);

    expect(s.Position.x).toBe(x);
    expect(s.Position.y).toBe(y + 2);
  });

  it("multiple turns work (left then right returns to right)", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    s.turnLeft();
    s.turnRight();
    s.move(4);

    expect(s.Position.x).toBe(x + 4);
    expect(s.Position.y).toBe(y);
  });

  it("right turn twice points left", () => {
    const s = new Snake();
    const x = s.Position.x;
    const y = s.Position.y;

    s.turnRight();
    s.turnRight();
    s.move(7);

    expect(s.Position.x).toBe(x - 7);
    expect(s.Position.y).toBe(y);
  });
});
//Tried to start testing the other dirrections hereb ut not sure if I did it right.
it("turnLeft goes through all directions", () => {
  const s = new Snake();

  s.turnLeft();
  expect(s.Direction).toBe("up");

  s.turnLeft();
  expect(s.Direction).toBe("left");

  s.turnLeft();
  expect(s.Direction).toBe("down");

  s.turnLeft();
  expect(s.Direction).toBe("right");
});
it("turnRight goes through all directions", () => {
  const s = new Snake();

  s.turnRight();
  expect(s.Direction).toBe("down");

  s.turnRight();
  expect(s.Direction).toBe("left");

  s.turnRight();
  expect(s.Direction).toBe("up");

  s.turnRight();
  expect(s.Direction).toBe("right");
});
