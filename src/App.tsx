import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    const out = document.getElementById("output");
    if (out) out.innerText = "OUTPUT:\n";

    const purpleSnake = new Snake();
    display("Purple start: " + purpleSnake.Position);

    purpleSnake.move(8);
    display("Purple after move(8): " + purpleSnake.Position); // expect 8

    purpleSnake.turn();
    purpleSnake.move(3);
    display("Purple after turn() + move(3): " + purpleSnake.Position); // expect 5

    const goldSnake = new Snake();
    display("Gold start: " + goldSnake.Position);

    goldSnake.turn();
    goldSnake.move(4);
    display("Gold after turn() + move(4): " + goldSnake.Position); // expect -4

    goldSnake.turn();
    goldSnake.move(2);
    display("Gold after turn() + move(2): " + goldSnake.Position); // expect -2
  }, []);

  return (
    <div className="App">
      <h1>Snake Manual Tests</h1>
      <Display />
    </div>
  );
}
