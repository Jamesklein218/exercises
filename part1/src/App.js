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
      <Part part={props.partList[0].name}
        exercises={props.partList[0].exercises} />
      <Part part={props.partList[1].name}
        exercises={props.partList[1].exercises} />
      <Part part={props.partList[2].name}
        exercises={props.partList[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div class="total">
      <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div class="app">
      <Head course={course.name} />
      <Content
        partList={course.parts}
      />
      <Total total={course.parts} />
    </div>
  )
}

export default App
