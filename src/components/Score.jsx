// src/components/Score.jsx
import React from "react";

export function Score({ score, total }) {
  return (
    <div className="text-center bg-green-100 p-6 rounded-2xl shadow-xl max-w-md mx-auto animate-pop">
      <h1 className="text-3xl font-extrabold text-green-700 mb-4">¡Quiz completado! 🎉</h1>
      <p className="text-xl text-gray-700">
        Tu puntaje final es: <span className="font-bold">{score} / {total}</span>
      </p>
    </div>
  );
}