import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Kanban from "./components/Kanban/Kanban";
import Landing from "./components/Landing/Landing";

import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/board" element={<Kanban user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        </Routes>
      );
}

export default App;
