import React from "react";
import aartis from "../data/aarti.json";
import AartiCard from "../components/AartiCard";


export default function Aarti() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">आरती संग्रह</h1>
      <div className="flex flex-wrap justify-center">
          {aartis.map((aarti) => (
            <AartiCard key={aarti.id} title={aarti.title} text={aarti.text} />
          ))}
      </div>    
    </div>
  );
}
