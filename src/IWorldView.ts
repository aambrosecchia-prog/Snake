import WorldModel from "./WorldModel";
/*
Creating my IWorldView interface here.
*/
interface IWorldView {
  /*
This is my display method that is now voided.
*/
  display: (world: WorldModel) => void;
}

export default IWorldView;
