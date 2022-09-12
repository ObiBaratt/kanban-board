import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
      return (
        <>
        <Login />
          <Navbar />
          <DndProvider backend={HTML5Backend}>
              <Board />
          </DndProvider>

        </>
      );
}

export default App;
