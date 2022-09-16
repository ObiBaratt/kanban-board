import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";

export default function Home({ user, setUser }) {
    return (
        <>
          <Navbar user={user} setUser={setUser} />
          <DndProvider backend={HTML5Backend}>
              <Board user={user} setUser={setUser} />
          </DndProvider>
        </>
      );
}
