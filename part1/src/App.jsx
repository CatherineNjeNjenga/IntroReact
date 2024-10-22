const Header = (props) => {
  console.log(props.course);
  return (
    <h1>{props.course}</h1>
  )
};

const Part = ({part, exercises}) => {
  console.log(part, exercises)
  return (
    <>
    <p>
      {part} {exercises}
    </p>
  </>
  )
};

const Content = ({part, exercises}) => {
  console.log(part, exercises);
  return (
    <div>
      <Part part={part.part1} exercises={exercises.exercises1}/>
      <Part part={part.part2} exercises={exercises.exercises2}/>
      <Part part={part.part3} exercises={exercises.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total} </p>
  )
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  // console.log(now, a+b);

  return (
    <div>
      <Header course={course}/>
      <Content part={{part1, part2, part3}} exercises={{exercises1, exercises2, exercises3}}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
