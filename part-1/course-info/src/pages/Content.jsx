import React from "react";
import Part from "./Part";

const Content = ({ part, excercise }) => {
  return (
    <div>
      <p>
        <Part part={part.part1} excercise={excercise.exercises1} />
        <Part part={part.part2} excercise={excercise.exercises2} />
        <Part part={part.part3} excercise={excercise.exercises3} />
      </p>
      <p></p>
    </div>
  );
};

export default Content;
