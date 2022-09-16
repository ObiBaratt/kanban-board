import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
        <Routes>
          <Route path="/home" element={<Home user={user} setUser={setUser} />} />
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
        </Routes>
      );
}

export default App;
