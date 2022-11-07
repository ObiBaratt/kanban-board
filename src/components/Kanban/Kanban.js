import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";

export default function Kanban({ user, setUser}) {
    return (
        <>
          <Navbar user={user} setUser={setUser} />
          <Board user={user} setUser={setUser} />
        </>
      );
}
