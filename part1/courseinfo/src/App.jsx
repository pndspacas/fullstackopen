const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ course, exercises }) => (
  <p>
    {course} {exercises}
  </p>
);

const Content = ({ course }) => (
  <>
    <Part course={course.parts[0].name} exercises={course.parts[0].exercises} />
    <Part course={course.parts[1].name} exercises={course.parts[1].exercises} />
    <Part course={course.parts[2].name} exercises={course.parts[2].exercises} />
  </>
);

const Total = ({ course }) => (
  <p>
    Total{' '}
    {course.parts[0].exercises +
      course.parts[1].exercises +
      course.parts[2].exercises}
  </p>
);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
