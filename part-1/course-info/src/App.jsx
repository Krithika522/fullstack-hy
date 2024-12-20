import Header from "./pages/HEader";
import "./App.css";
import Content from "./pages/Content";
import Total from "./pages/Total";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const excercises = { exercises1, exercises2, exercises3 };
  const part = { part1, part2, part3 };
  return (
    <>
      <Header course={course} />
      <Content part={{ ...part }} excercise={{ ...excercises }} />

      <Total excercise={[exercises1, exercises2, exercises3]} />
    </>
  );
}

export default App;
