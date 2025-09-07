import React from "react";
interface AartiCardProps {
    key: number;
    title: string;
    text: string;
  }
  
  export default function AartiCard({key, title, text }: AartiCardProps) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md m-2" key={key}>
          <h2 className="text-lg font-bold text-orange-700 mb-2">{title}</h2>
          <p className="whitespace-pre-line leading-relaxed font-mukta text-gray-800" >{text}</p>
        </div>
      
    );
  }
  