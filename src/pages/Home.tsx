import React from "react";
import aartis from "../data/aarti.json";
import AartiCard from "../components/AartiCard";
import stotras from "../data/stotra.json";
import chalisas from "../data/chalisa.json"

export default function Home() {
    return (
      <>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            {/* Column 1: Logo */}
            <div className="flex justify-center">
              <img
                src="/favicon.png"
                alt="भक्ति संग्रह लोगो"
                className="w-40 h-40 object-contain rounded-full shadow-lg"
              />
            </div>

            {/* Column 2: Text */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-orange-700">🙏 भक्ति संग्रह 🙏</h1>
              <p className="mt-4 text-gray-600">
                यहाँ पर आप सभी भगवान की आरती और स्तोत्र पढ़ सकते हैं।
              </p>
            </div>
          </div>
          <hr className="my-6 border-t-4 border-orange-500 rounded"></hr>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-orange-700 mb-4">आरती संग्रह</h1>
            <div className="flex flex-wrap justify-center">
                {aartis.map((aarti) => (
                  <AartiCard key={aarti.id} title={aarti.title} text={aarti.text} />
                ))}
            </div>    
          </div>
          {/* <hr></hr>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-orange-700 mb-4">स्तोत्र संग्रह</h1>
            <div className="flex flex-wrap justify-center">
              {stotras.map((stotra) => (
                <AartiCard key={stotra.id} title={stotra.title} text={stotra.text} />
              ))}
            </div>
          </div> */}
          <hr className="my-6 border-t-4 border-orange-500 rounded"></hr>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-orange-700 mb-4">चालीसा संग्रह</h1>
            <div className="flex flex-wrap justify-center">
              {chalisas.map((chalisa) => (
                <AartiCard key={chalisa.id} title={chalisa.title} text={chalisa.text} />
              ))}
            </div>
          </div>
      </> 
    );
  }
  