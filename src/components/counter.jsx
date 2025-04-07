import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm text-center space-y-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-indigo-700">Counter</h1>
        <div className="text-6xl font-semibold text-gray-800">
          {state.count}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow"
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: 'reset' })}
            className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg shadow"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch({ type: 'increment' })}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
