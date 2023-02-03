import React from "react";

const CalculateForm = ({ handlerSubmit }) => {
  return (
    <div>
      <button onClick={handlerSubmit}>Clean</button>
    </div>
  );
};

export default CalculateForm;
