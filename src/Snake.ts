import display from "./display";

import { truncate } from "fs";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;

  constructor() {
    this.currentPosition = 0;
    this.currentDirection = 0;
  }

  move(squares: number) {
    if (this.currentDirection >= 0) {
      this.currentPosition = this.currentPosition + squares;
    } else {
      this.currentPosition = this.currentPosition - squares;
    }
  }

  turn() {
    if (this.currentDirection >= 0) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 0;
    }
  }

  get Position() {
    return this.currentPosition;
  }
}



export default Snake;
