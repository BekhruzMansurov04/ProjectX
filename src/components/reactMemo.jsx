import React, { useState } from 'react';

const Komponent = React.memo(({ matn, hisob }) => {
  console.log('QimmatHisoblovchiKomponent qayta render bo`ldi');
  return (
    <>
      <p className="text-lg font-semibold">Eslab qolingan: {matn}</p>
      <p className="text-lg font-semibold">Hisob: {hisob}</p>
    </>
  );
});

const ReactMemo = () => {
  const [hisob, setHisob] = useState(0);
  const [matn, setMatn] = useState('Salom Memo!');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">React.memo Misoli</h1>
        <Komponent matn={matn} hisob={hisob} />
        <input
          value={matn}
          onChange={(e) => setMatn(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Yangi matn yozing..."
        />
        <button
          onClick={() => setHisob(hisob + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Hisobni oshirish ({hisob})
        </button>
      </div>
    </div>
  );
};

export default ReactMemo;
