const Header = (props) => {
  console.log(props);
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
      <Part part={part.part1.name} exercises={part.part1.exercises}/>
      <Part part={part.part2.name} exercises={part.part2.exercises}/>
      <Part part={part.part3.name} exercises={part.part3.exercises}/>
    </div>
  )
};

const Total = (props) => {
  console.log(props);
  return (
    <p>Number of exercises {props.total} </p>
  )
};

const App = () => {
  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  //     {
  //       name: 'Using props to pass data',
  //       exercises: 7
  //     },
  //     {
  //       name: 'State of a component',
  //       exercises: 14
  //     }
  //   ]
  // };

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={{part1, part2, part3}}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
