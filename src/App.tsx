import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aarti from "./pages/Aarti";
import Stotra from "./pages/Stotra";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aartis" element={<Aarti />} />
        <Route path="/stotras" element={<Stotra />} />
      </Routes>
    </Router>
  );
}

export default App;
