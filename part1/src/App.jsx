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
      <Part  part={part[0]} exercises={exercises[0]}/>
      <Part part={part[1]} exercises={exercises[1]}/>
      <Part part={part[2]} exercises={exercises[2]}/>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] 

  return (
    <div>
      <Header course={course}/>
      <Content part={[parts[0].name, parts[1].name, parts[2].name]} exercises={[parts[0].exercises,parts[1].exercises, parts[2].exercises]}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App
