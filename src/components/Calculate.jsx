import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Calculate = () => {
  const [add1, setAdd1] = useState();
  const [add2, setAdded2] = useState();
  const [result, setResult] = useState();
  const [all, setAll] = useState("Plus");

  const cleanHandler = () => {
    setAdd1("");
    setAdded2("");
  };
  
  const calculater = () => {
    if (all === "Plus") return parseFloat(add1) + parseFloat(add2);
    else if (all === "Minus") return parseFloat(add1) - parseFloat(add2);
    else if (all === "Dobav") return parseFloat(add1) * parseFloat(add2);
    else if (all === "Delene") return parseFloat(add1) / parseFloat(add2);
  };

  useEffect(() => {
    console.log(calculater);
    setResult(calculater());
  }, [add1, add2, all]);
  return (
    <div className="All">
      <h1 className="text">Calculate React</h1>
      <input
        type="number"
        value={add1}
        onChange={(e) => setAdd1(e.target.value)}
      />
      <input
        type="number"
        value={add2}
        onChange={(e) => setAdded2(e.target.value)}
      />
      <select onChange={(e) => setAll(e.target.value)}>
        <option>Plus</option>
        <option>Minus</option>
        <option>Dobav</option>
        <option>Delene</option>
      </select>
      <button onClick={cleanHandler}>Clean</button>
      <h1 className="text">Result:{result}</h1>
    </div>
  );
};

export default Calculate;
