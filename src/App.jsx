import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Counter from "./components/counter";
import ReactMemo from "./components/reactMemo";
import UseCallback from "./components/useCallBack";
import UseMemo from "./components/useMemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/reactMemo" element={<ReactMemo />} />
      <Route path="/useCallBack" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
    </Routes>
  );
}

export default App;
