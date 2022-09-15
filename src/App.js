import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import "./App.css";

function App() {

  return (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      );
}

export default App;
