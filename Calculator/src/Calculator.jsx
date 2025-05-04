import React, { useState } from "react";

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const calculate = () => {
    try {
      setInputValue(eval(inputValue));
    } catch {
      setInputValue("Error");
    }
  };
  const clear = () => {
    setInputValue("");
  };
  return (
    <form
      name="calc"
      className="bg-white shadow-lg rounded-xl p-4 w-72 mx-auto mt-10 grid grid-cols-4 gap-3"
    >
      <input
        type="text"
        value={inputValue}
        readOnly
        className="col-span-4 text-right p-3 text-xl border rounded-md bg-gray-50 mb-2"
      />
      <span
        onClick={() => clear()}
        className="cursor-pointer bg-red-500 text-white p-3 rounded text-center"
      >
        C
      </span>
      <span
        onClick={() => display("/")}
        className="cursor-pointer bg-blue-500 text-white p-3 rounded text-center"
      >
        /
      </span>
      <span
        onClick={() => display("*")}
        className="cursor-pointer bg-blue-500 text-white p-3 rounded text-center"
      >
        *
      </span>
      <span
        onClick={() => display("7")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        7
      </span>
      <span
        onClick={() => display("8")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        8
      </span>
      <span
        onClick={() => display("9")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        9
      </span>
      <span
        onClick={() => display("-")}
        className="cursor-pointer bg-blue-500 text-white p-3 rounded text-center"
      >
        -
      </span>
      <span
        onClick={() => display("4")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        4
      </span>
      <span
        onClick={() => display("5")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        5
      </span>
      <span
        onClick={() => display("6")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        6
      </span>
      <span
        onClick={() => display("+")}
        className="cursor-pointer bg-blue-500 text-white p-3 rounded text-center"
      >
        +
      </span>
      <span
        onClick={() => display("1")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        1
      </span>
      <span
        onClick={() => display("2")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        2
      </span>
      <span
        onClick={() => display("3")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        3
      </span>
      <span
        onClick={() => display("0")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        0
      </span>
      <span
        onClick={() => display("00")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        00
      </span>
      <span
        onClick={() => display(".")}
        className="cursor-pointer bg-gray-200 p-3 rounded text-center"
      >
        .
      </span>
      <span
        onClick={() => calculate()}
        className="cursor-pointer col-span-4 bg-green-500 text-white p-3 rounded text-center"
      >
        =
      </span>
    </form>
  );
};
export default Calculator;
