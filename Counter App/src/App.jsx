import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-400">
      <div className="text-center flex flex-col gap-4 p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-black backdrop-blur-3xl">Counter App</h1>
        <h2 className="text-2xl">{counter}</h2>
        <div className="flex flex-row justify-center gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
