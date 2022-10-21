import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "../Board/Board"
import Navbar from "../Navbar/Navbar";

export default function Home() {
    const user = "Demo User"

    return (
        <>
          <Navbar user={user} />
          <DndProvider backend={HTML5Backend}>
              <Board user={user} demo={true} />
          </DndProvider>
          </>
    )
}
