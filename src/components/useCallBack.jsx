import React, { useState, useCallback } from 'react';

const Button = React.memo(({ handleClick }) => {
  console.log('Rendering Button');
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Click Me
    </button>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Clicked!');
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">useCallback Example</h1>
        <Button handleClick={handleClick} />
        <p className="text-lg">Count: {count}</p>
      </div>
    </div>
  );
};

export default UseCallback;
