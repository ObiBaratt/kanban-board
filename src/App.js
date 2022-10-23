import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Kanban from "./components/Kanban/Kanban";
import Home from "./components/Home/Home";

import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Kanban user={user} setUser={setUser} demo={false} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        </Routes>
      );
}

export default App;
