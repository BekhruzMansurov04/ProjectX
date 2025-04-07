import React, { useState, useMemo } from 'react';

const hisoblaFaktorial = (son) => {
  console.log("Faktorial hisoblanmoqda...");
  if (son < 0) return 0;
  if (son === 0) return 1;
  let natija = 1;
  for (let i = 1; i <= son; i++) {
    natija *= i;
  }
  return natija;
};

const UseMemo = () => {
  const [son, setSon] = useState(1);
  const [rangli, setRangli] = useState(false);

  const faktorial = useMemo(() => hisoblaFaktorial(son), [son]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-lg space-y-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700">Faktorial Hisoblagich (useMemo bilan)</h1>

        <div className="space-y-3">
          <label className="block font-medium">Son kiriting:</label>
          <input
            type="number"
            value={son}
            onChange={(e) => setSon(parseInt(e.target.value))}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <p className="text-lg">
            <span className="font-semibold">Natija (faktorial):</span> {faktorial}
          </p>
        </div>

        <button
          onClick={() => setRangli(!rangli)}
          className={`px-4 py-2 rounded text-white font-semibold ${rangli ? 'bg-green-500' : 'bg-blue-500'} hover:opacity-90`}
        >
          Rangi o'zgartirish
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
