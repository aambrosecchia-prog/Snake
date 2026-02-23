import Point from "./point";

describe("Point Tests", () => {
  it("stores x and y values from the constructor", () => {
    const p = new Point(3, 7);
    expect(p.x).toBe(3);
    expect(p.y).toBe(7);
  });

  it("works with negative numbers", () => {
    const p = new Point(-4, -9);
    expect(p.x).toBe(-4);
    expect(p.y).toBe(-9);
  });

  it("works with zero values", () => {
    const p = new Point(0, 0);
    expect(p.x).toBe(0);
    expect(p.y).toBe(0);
  });
});
