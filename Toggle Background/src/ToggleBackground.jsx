import React, { useState } from "react";

const ToggleBackground = () => {
  const [bgColor, setBgColor] = useState("black");
  const [txtColor, setTxtColor] = useState("#1b1b1b");

  const handleClick = () => {
    const isWhite = bgColor === "white";
    setBgColor(isWhite ? "#1b1b1b" : "white");
    setTxtColor(isWhite ? "#ffa31a" : "#1b1b1b");
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: bgColor === "white" ? "#1b1b1b" : "white",
          color: txtColor,
          border: `2px solid ${txtColor}`,
          padding: "0.5rem 1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {bgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section>
        <h1 className="text-2xl text-white">Welcome to the real world!!</h1>
      </section>
    </div>
  );
};

export default ToggleBackground;
