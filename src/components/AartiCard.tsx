import React, { useState, useEffect } from "react";

interface AartiCardProps {
  title: string;
  text: string;
}

export default function AartiCard({ title, text }: AartiCardProps) {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  // Split text into lines
  const lines = text.split("\n");
  const previewText = lines.slice(0, 4).join("\n");

  return (
    <>
      {/* Card */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
        <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-lg font-bold text-orange-700 mb-2">{title}</h2>

          <p className="whitespace-pre-line leading-relaxed font-mukta text-gray-800">
            {previewText}
          </p>

          {lines.length > 4 && (
            <button
              onClick={() => setOpen(true)}
              className="mt-2 text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Read Full
            </button>
          )}
        </div>
      </div>

      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white max-w-2xl w-full mx-4 rounded-lg shadow-lg p-6 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-orange-700 mb-4">
              {title}
            </h2>

            {/* Text */}
            <p className="whitespace-pre-line leading-relaxed font-mukta text-gray-800 max-h-[70vh] overflow-y-auto text-center">
              {text}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
