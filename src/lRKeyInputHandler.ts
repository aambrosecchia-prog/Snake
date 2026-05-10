import IInputHandler from "./IInputHandler";

class LRKeyInputHandler implements IInputHandler {
  // My booleans start here!
  wasLeftArrowPushed: boolean;
  wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;

    /*
    My event listener for the left and right arrows here.
    */
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      }

      if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }

  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }

  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  /*
  Here I reset the booleans.
  */
  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;
