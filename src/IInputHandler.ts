interface IInputHandler {
  /*
    Here are all my methods for this interface below.
    */
  madeLeftMove(): boolean;
  madeRightMove(): boolean;
  resetLeftMove(): void;
  resetRightMove(): void;
}

export default IInputHandler;
