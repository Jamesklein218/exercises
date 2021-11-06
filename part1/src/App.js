import React from 'react'

const Head = (props) => {
  return (
    <div class="Head">
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p> {part} {exercises} </p>
  )
}

const Content = (props) => {
  return (
    <div class="content">
      <Part part={props.partList[0]} exercises={props.excList[0]} />
      <Part part={props.partList[1]} exercises={props.excList[1]} />
      <Part part={props.partList[2]} exercises={props.excList[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div class="total">
      <p>Number of exercises {props.total}</p>
    </div>
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
    <div class="app">
      <Head course={course} />
      <Content
        partList={[part1, part2, part3]}
        excList={[part1, part2, part3]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
