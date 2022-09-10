import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
      return (
        <>
        <Login />
          <Navbar />
          <div className="centered">
            <Board />
          </div>
        </>
      );
}

export default App;
