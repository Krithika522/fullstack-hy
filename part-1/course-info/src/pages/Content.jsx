import React from "react";
import Part from "./Part";

const Content = ({ part, excercise }) => {
  return (
    <div>
      <p>
        <Part part={part} excercise={excercise} />
      </p>
      <p></p>
    </div>
  );
};

export default Content;
