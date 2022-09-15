import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";

export default function Home() {
    return (
        <>
          <Navbar />
          <DndProvider backend={HTML5Backend}>
              <Board />
          </DndProvider>
        </>
      );
}
