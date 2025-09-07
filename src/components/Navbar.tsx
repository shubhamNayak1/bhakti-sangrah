import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-orange-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">भक्ति संग्रह</h1>
      <div className="space-x-4">
        <Link to="/">होम</Link>
        <Link to="/aartis">आरती</Link>
        <Link to="/stotras">स्तोत्र</Link>
      </div>
    </nav>
  );
}
