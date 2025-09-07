import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
