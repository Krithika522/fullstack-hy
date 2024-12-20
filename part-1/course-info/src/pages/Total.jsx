import React from "react";

const Total = ({ excercise }) => {
  return (
    <div>
      <p>Number of excercises {excercise.reduce((sum, num) => sum + num, 0)}</p>
    </div>
  );
};

export default Total;
