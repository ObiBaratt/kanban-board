import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="centered">
        <h1 className="bg-light">%USERNAME%'s Board</h1>
        <Board />
      </div>
    </>
    );
}

export default App;
