import LRKeyInputHandler from "./lRKeyInputHandler";

describe("LRKeyInputHandler tests", () => {
  it("starts with no left or right move", () => {
    const inputHandler = new LRKeyInputHandler();

    expect(inputHandler.madeLeftMove()).toBe(false);
    expect(inputHandler.madeRightMove()).toBe(false);
  });

  it("resets left move to false", () => {
    const inputHandler = new LRKeyInputHandler();

    inputHandler.resetLeftMove();

    expect(inputHandler.madeLeftMove()).toBe(false);
  });

  it("resets right move to false", () => {
    const inputHandler = new LRKeyInputHandler();

    inputHandler.resetRightMove();

    expect(inputHandler.madeRightMove()).toBe(false);
  });
});
