const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.name} {props.quantity}
      </p>
    </>
  )
}

const Total = (props) => {
  let sum = 0;
  for (let i = 0; i < props.nums.length; i++) {
    sum += props.nums[i];
  }
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={part1} quantity={exercises1} />
      <Content name={part2} quantity={exercises2} />
      <Content name={part3} quantity={exercises3} />
      <Total nums={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App