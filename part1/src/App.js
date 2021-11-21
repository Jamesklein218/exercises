import React, { useState } from 'react'
import './index.css'

const Head = ({ text }) => {
  return <h1>{text}</h1>
}

const Button = ({ text, handle }) => {
  return (
    <button onClick={handle}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistic = ({ good, bad, neutral }) => {
  let total = good + neutral + bad
  let average = ((good - bad) / total)
  let positive = ((good / (total)) * 100) + " %"

  if (total !== 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  } else {
    return <p>No feedback given</p>
  }
}


const App = () => {
  console.log('render')
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Head text="give feedback" />
      <Button text="good" handle={handleGood} />
      <Button text="neutral" handle={handleNeutral} />
      <Button text="bad" handle={handleBad} />
      <Head text="statistics" />
      <Statistic
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App