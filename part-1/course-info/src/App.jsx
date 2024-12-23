import Header from "./pages/HEader";
import "./App.css";
import Content from "./pages/Content";
import Total from "./pages/Total";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      {course.parts.length > 0 &&
        course.parts.map((part) => (
          <>
            <Content part={part.name} excercise={part.exercises} />
          </>
        ))}
      <Total
        excercise={course?.parts.reduce((sum, part) => sum + part.exercises, 0)}
      />
    </div>
  );
}

export default App;
