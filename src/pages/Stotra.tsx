import stotras from "../data/stotra.json";
import AartiCard from "../components/AartiCard";
import React from "react";

export default function Stotra() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">स्तोत्र संग्रह</h1>
      {stotras.map((stotra) => (
        <AartiCard key={stotra.id} title={stotra.title} text={stotra.text} />
      ))}
    </div>
  );
}
